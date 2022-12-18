@echo off

@call git submodule deinit -f sccache
@call git submodule update --init sccache


@call cd sccache
@call cargo build --release --no-default-features
@call cd ..