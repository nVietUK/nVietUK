@call rmdir build\libuv /s
@echo off
@call mkdir build\libuv
@call cd build\libuv
cmake ^
    -G "Visual Studio 17 2022" ^
    -D CMAKE_CONFIGURATION_TYPES:STRING=Release ^
    -D CMAKE_TRY_COMPILE_CONFIGURATION:STRING=Release ^
    -S ..\..\libuv^
    -DCMAKE_INSTALL_PREFIX=C:\\libuv ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON 
@call cd ..\..