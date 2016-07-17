.PHONY: dist gh-pages

dist:
	npm run dist

gh-pages:
	git reset --hard origin/master
	npm run dist
	mv dist/a-site/* .
	rm -rf src
	git add --all
	git commit -m 'Update gh-pages'
	git push origin gh-pages
