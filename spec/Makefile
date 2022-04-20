spec_src_dir := $(abspath ./)
output_dir := $(abspath ../lib/openapi)
doc_output_dir := $(abspath ./build/docs)

yamls := $(wildcard $(spec_src_dir)/*.yaml)
htmls := $(patsubst $(spec_src_dir)/%.yaml, $(doc_output_dir)/%.html, $(yamls))

.PHONY: all, docs, clean

.PHONY: client-js, server-express, server-pistache

all: client-js server-pistache docs

docs: $(htmls)

client-js: $(yamls)
	mkdir -p $(output_dir)/$@
	openapi-generator-cli generate -o $(output_dir)/$@ \
	  -g javascript \
	  --additional-properties=projectName=echo-test-client \
	  -i $^
	cd $(output_dir)/$@ && npm install && npm run build

server-express: $(yamls)
	mkdir -p $(output_dir)/$@
	openapi-generator-cli generate -o $(output_dir)/$@ \
	  -g nodejs-express-server \
	  -i $^
	cd $(output_dir)/$@ && npm install

server-pistache: $(yamls)
	mkdir -p $(output_dir)/$@
	openapi-generator-cli generate -o $(output_dir)/$@ \
	  -g cpp-pistache-server \
	  -i $^

$(doc_output_dir)/%.html: $(spec_src_dir)/%.yaml
	mkdir -p $(@D)
	redoc-cli bundle -o $@ $^

clean:
	rm -rf $(doc_output_dir)
	rm -rf $(output_dir)
