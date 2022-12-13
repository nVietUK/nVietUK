@call rmdir build\libuv /s
@echo off
@call mkdir build\libuv
@call cd build\libuv
cmake ^
    -G "Visual Studio 17 2022" ^
    -S ..\..\libuv^
    -DCMAKE_INSTALL_PREFIX=C:\\libuv ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON 
@call cd ..\..