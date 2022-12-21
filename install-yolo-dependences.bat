@echo off
@call rmdir Build /s /q
@call .bat/install-pytorch.bat
@call .bat/install-opencv.bat

@call cd yolov7
@call git checkout main
@call git pull
@call cd ..