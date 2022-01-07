# files-to-matrix

Generates a
[build matrix](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)
from a list of files/paths.

Can be used with
[changed-files](https://github.com/marketplace/actions/changed-files) action.

Written in Typescript and runs with [Deno](https://deno.land).

## Usage

### Content

```
> tree test-data/ -d 1
test-data/
├── some-dir
├── other-dir
└── ignored
```

### Workflow

```yaml
- uses: nahsi/files-to-matrix@v1
  id: jobs
  with:
    files: test-data/*-dir
    settings: >-
      [
        {
          "name": "dir",
          "level": 1
        }
      ]
```

### Result

```json
[
  {
    "dir": "some-dir"
  },
  {
    "dir": "other-dir"
  }
]
```

## Inputs

### `files`

List of files/paths to generate matrix from. Supports globbing.

#### Example:

```yaml
files: >-
  some/dir/** dir/*/*.(yml|yaml)
  other/path
```

### `settings`

Json array of settings that will be used to generate matrix.

| name    | type   | required | default          | description           |
| ------- | ------ | -------- | ---------------- | --------------------- |
| `level` | number | true     |                  | level/depth of path   |
| `name`  | string | false    | value of `level` | name of the level     |
| `trim`  | bool   | false    | false            | remove file extention |

If `level` settings is ommited it will be ignored, i.e. with input:

```yaml
files: some/example/path
settings: >-
  [
    {
      "level": 1
    }
  ]
```

result will be:

```json
[
  {
    "1": "example"
  }
]
```

#### Example:

```yml
settings: >-
  [
    {
      "name": "target",
      "level: 1
    },
    {
      "name": "role",
      "level": 2,
      "trim": true
    }
  ]
```

## Example workflows

### Terraform

```
> tree terraform/ -d 1
terraform/
├── kafka
└── vps
```

```yaml
name: Run terraform

on:
  push:
    branches:
      - "master"

jobs:
  matrix:
    runs-on: ubuntu-latest
    outputs:
      tf-matrix: "${{ steps.tf.outputs.matrix }}"
    steps:
      - uses: actions/checkpout@v2
        with:
          fetch-depth: 0

      - name: "Find changed terraform configs"
        id: changed-tf
        uses: tj-actions/changed-files@v10
        with:
          files: |
            terraform/**

      - uses: nahsi/files-to-matrix@v1
        id: tf
        with:
          files: "${{ steps.changed-tf.outputs.all_modified_files }}"
          settings: >-
            [
              {
                "name": "dir",
                "level": 1
              }
            ]

  run-terraform:
    runs-on: ubuntu-latest
    needs: matrix
    strategy:
      fail-fast: false
      matrix:
        tf: "${{ fromJSON(needs.matrix.tf-matrix) }}"

    defaults:
      run:
        working-directory: "terraform/${{ matrix.tf.dir }}"

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v1

      - name: Terraform init
        run: terraform init -input=false

      - name: Terraform apply
        run: terraform apply -auto-approve -input=false
```

### Ansible

```
> tree inventory/
inventory/                               
├── group_vars                           
│   ├── all                              
│   │   ├── nomad.yml
│   │   └── consul.yml
│   ├── servers    
│   │   ├── consul.yml      
│   │   ├── nomad.yml
└── host_vars
    └── some_host 
        └── consul.yml
```

```yaml
name: Run ansible

on:
  push:
    branches:
      - "master"

jobs:
  matrix:
    runs-on: ubuntu-latest
    outputs:
      ansible-matrix: "${{ steps.ansible.outputs.matrix }}"
    steps:
      - uses: actions/checkpout@v2
        with:
          fetch-depth: 0

      - name: "Find changed inventory files"
        id: changed-inventory
        uses: tj-actions/changed-files@v10
        with:
          files: |
            inventory/**

      - uses: nahsi/files-to-matrix@v1
        id: ansible
        with:
          files: "${{ steps.changed-inventory.outputs.all_modified_files }}"
          settings: >-
            [
              {
                "name": "target",
                "level": 2
              },
              {
                "name": "role",
                "level": 3,
                "trim": true
              }
            ]

  run-ansible:
    runs-on: ubuntu-latest
    needs: matrix
    strategy:
      fail-fast: false
      matrix:
        ansible: "${{ fromJSON(needs.matrix.ansible-matrix) }}"

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Run ansible
        uses: dawidd6/action-ansible-playbook@v2
        with:
          key: "${{ secrets.SSH_KEY }}"
          playbook: site.yml
          options: |
            -e "target=${{ matrix.ansible.target }}"
            -e "role=${{ matrix.ansible.role }}"
```
