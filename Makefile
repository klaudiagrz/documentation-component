ci-pr: resolve validate test

.PHONY: resolve
resolve:
	yarn bootstrap

.PHONY: validate
validate:
	yarn conflict-check
	yarn lint-check
	yarn markdownlint
	yarn type-check

.PHONY: test
test: 
	yarn test