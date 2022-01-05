action:
	act --rebuild --rm pull_request

cache:
	deno cache --import-map import_map.json --unstable src/* tests/*

lint:
	deno lint src/* tests/*

fmt:
	deno fmt src/* tests/*
