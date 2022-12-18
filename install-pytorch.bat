@echo off

@call git submodule deinit -f pytorch
@call git submodule update --init pytorch

@call cd pytorch
@call git submodule sync
@call git submodule update --init --recursive
@call cd ..

@call sccache\target\release\sccache.exe --stop-server
@call sccache\target\release\sccache.exe --start-server

@call vcvarsall.bat x64
@call cd pytorch
rem @call python -m venv install-pytorch
@call python setup.py install --cmake
@call cd ..