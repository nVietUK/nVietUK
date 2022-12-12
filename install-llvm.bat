@call vcvarsall.bat x64 %*
@call rmdir build\llvm /s
@call mkdir build\llvm
@call cd build\llvm
cmake ^
    -G "Visual Studio 17 2022" ^
    -DCMAKE_BUILD_TYPE=Release ^
    -DCMAKE_INSTALL_PREFIX=C:\\llvm ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ^
    -DCMAKE_CXX_LINK_FLAGS="-Wl,-rpath,$LD_LIBRARY_PATH" ^
    -DFLANG_ENABLE_WERROR=OFF ^
    -DLLVM_ENABLE_ASSERTIONS=ON ^
    -DLLVM_TARGETS_TO_BUILD=host ^
    -DLLVM_LIT_ARGS=-v ^
    -DLLVM_ENABLE_PROJECTS="clang;clang-tools-extra;lld;lldb;mlir;flang;openmp" ^
    -DLLVM_ENABLE_RUNTIMES="compiler-rt" ^
    ..\..\llvm\llvm
@call cd ..\..
pause