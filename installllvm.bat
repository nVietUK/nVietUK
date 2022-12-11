@echo on
@call vcvarsall.bat x64 %*
@call cd llvm-project
cmake -S llvm -B build -G "Visual Studio 17 2022" -DLLVM_ENABLE_PROJECTS='clang;clang-tools-extra;flang;openmp' -DLLVM_ENABLE_RUNTIMES='openmp' -DCMAKE_INSTALL_PREFIX=C:\\llvm -DCMAKE_BUILD_TYPE=Release 
pause