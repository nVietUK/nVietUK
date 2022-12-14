@echo off
@call rmdir build\oneTBB /s
@call mkdir build\oneTBB
@call cd build\oneTBB
cmake ^
    -G "Visual Studio 17 2022" ^
    -D CMAKE_CONFIGURATION_TYPES:STRING=Release ^
    -D CMAKE_TRY_COMPILE_CONFIGURATION:STRING=Release ^
    -S ..\..\oneTBB^
    -DCMAKE_INSTALL_PREFIX=C:\\oneTBB ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON 
@call cd ..\..