FROM denoland/deno:alpine
COPY . .
RUN deno cache -q --import-map import_map.json --unstable src/main.ts
CMD [ \
  "run", "-q", \
  "--import-map", "import_map.json", \
  "--allow-env", "--allow-all", \
  "--unstable", "src/main.ts" \
]
