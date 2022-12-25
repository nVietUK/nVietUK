@echo off
:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
    IF "%PROCESSOR_ARCHITECTURE%" EQU "amd64" (
>nul 2>&1 "%SYSTEMROOT%\SysWOW64\cacls.exe" "%SYSTEMROOT%\SysWOW64\config\system"
) ELSE (
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
)

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params= %*
    echo UAC.ShellExecute "cmd.exe", "/c ""%~s0"" %params:"=""%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"
:--------------------------------------    

del /a /s /q %windir%\temp & md %windir%\temp>nul
del /a /s /q %userprofile%\recent\*.*>nul
del /a /s /q "%userprofile%\Local Settings\Temporary Internet Files\*.*">nul
del /a /s /q "%userprofile%\Local Settings\Temp\*.*">nul
del /a /s /q "%userprofile%\recent\*.*">nul
del /a /s /q %systemdrive%\*.tmp>nul
del /a /s /q %systemdrive%\*._mp>nul
del /a /s /q %systemdrive%\*.log>nul
del /a /s /q %systemdrive%\*.gid>nul
del /a /s /q %systemdrive%\*.chk>nul
del /a /s /q %systemdrive%\*.old>nul
del /a /s /q %systemdrive%\recycled\*.*>nul
del /a /s /q %windir%\*.bak>nul
del /a /s /q %windir%\prefetch\*.*>nul
del /a /s /q %windir%\temp & md %windir%\temp>nul
del /a /s /q %userprofile%\recent\*.*>nul
del /a /s /q "%userprofile%\Local Settings\Temporary Internet Files\*.*">nul
del /a /s /q "%userprofile%\Local Settings\Temp\*.*">nul
del /a /s /q "%userprofile%\recent\*.*">nul
del /a /s /q %systemdrive%\*.tmp>nul
del /a /s /q %systemdrive%\*._mp>nul
del /a /s /q %systemdrive%\*.log>nul
del /a /s /q %systemdrive%\*.gid>nul
del /a /s /q %systemdrive%\*.chk>nul
del /a /s /q %systemdrive%\*.old>nul
del /a /s /q %systemdrive%\recycled\*.*>nul
del /a /s /q %windir%\*.bak>nul
del /a /s /q %windir%\prefetch\*.*>nul
exit