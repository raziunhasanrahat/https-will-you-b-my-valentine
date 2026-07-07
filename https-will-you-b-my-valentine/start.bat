@echo off
setlocal

cd /d "%~dp0"

echo.
echo Starting Maha and Rakin proposal website...
echo.

if not exist "node_modules" (
  echo Installing dependencies. This may take a minute...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo Installation failed. Please make sure Node.js is installed.
    pause
    exit /b 1
  )
)

echo.
echo Opening http://localhost:5173
echo Keep this window open while the website is running.
echo.

start "" "http://localhost:5173"
call npm.cmd run dev -- --port 5173

pause
