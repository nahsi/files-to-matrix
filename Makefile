action:
	act --rebuild --rm pull_request

cache:
	deno cache --unstable --import-map import_map.json main.ts tests/*

test:
	deno test --unstable --import-map import_map.json \
		--allow-env --allow-read tests/*

lint:
	deno lint main.ts src/* tests/*

fmt:
	deno fmt main.ts src/* tests/* README.md
