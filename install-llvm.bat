@call vcvarsall.bat x64 %*
@echo on
@call cd llvm\buildbot
powershell -Command "(gc configure.py) -replace 'clang;', 'clang;openmp;flang' | Out-File -encoding ASCII configure.py"
powershell -Command "(gc configure.py) -replace 'abs_obj_dir, \"install\"', '\"c:\", os.sep, \"llvm\"' | Out-File -encoding ASCII configure.py"
@call cd ..
rem pause
python .\buildbot\configure.py --cmake-gen "Visual Studio 17 2022" --cuda -t Release
@call cd buildbot
powershell -Command "(gc configure.py) -replace 'clang;openmp;flang', 'clang;' | Out-File -encoding ASCII configure.py"
powershell -Command "(gc configure.py) -replace '\"c:\", os.sep, \"llvm\"', 'abs_obj_dir, \"install\"' | Out-File -encoding ASCII configure.py"
@call cd ..\..