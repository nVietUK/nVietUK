@echo off

@call cd pytorch
@call git submodules sync
@call git submodules update --init --recursive
@call cd ..

@call rmdir build\pytorch /s
@call mkdir build\pytorch
@call cd build\pytorch
cmake ^
    -G "Visual Studio 17 2022" ^
    -DCMAKE_CONFIGURATION_TYPES="Release"^
    -S ..\..\pytorch^
    -DCMAKE_BUILD_TYPE=Release ^
    -DCMAKE_INSTALL_PREFIX=C:\\pytorch ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON 
@call cd ..\..