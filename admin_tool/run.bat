@echo off
cd /d %~dp0

echo Starting FoxyVocab Admin...
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not installed or not in PATH.
    echo Please install Python and try again.
    pause
    exit /b
)

python foxyvocab_admin.py

echo.
echo App closed.