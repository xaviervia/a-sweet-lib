.PHONY: dist gh-pages submodules

dist:
	npm run dist

submodules:
	git submodule update

gh-pages:
	git reset --hard origin/master
	git submodule update
	npm run dist
	mv dist/a-site/* .
	rm -rf src
	git add --all
	git commit -m 'Update gh-pages'
	git push -f origin gh-pages
