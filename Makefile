.PHONY: dist gh-pages

dist:
	npm run dist

gh-pages:
	mv dist/a-site/* .
