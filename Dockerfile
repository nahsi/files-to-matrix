FROM denoland/deno:alpine
COPY . .
RUN deno cache index.ts
ENTRYPOINT ["deno", "run", "index.ts"]
