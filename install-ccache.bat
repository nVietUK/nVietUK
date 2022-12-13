@call rmdir build\ccache /s
@echo off
@call mkdir build\ccache
@call cd build\ccache
cmake ^
    -G "Visual Studio 17 2022" ^
    -S ..\..\ccache^
    -DCMAKE_BUILD_TYPE=Release ^
    -DCMAKE_INSTALL_PREFIX=C:\\ccache ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON 
@call cd ..\..