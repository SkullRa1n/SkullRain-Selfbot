@echo off
title Instalando Modulos

echo / ---------------------------------------------- /
echo         SelfBot Criado por Skull Rain
echo                 14 / 11 / 2021
echo               All rights reserved.
echo / ---------------------------------------------- /
echo Instalando Modulos requiridos...
echo --------------------------------------
cd %~dp0
cmd /c "npm init"
cmd /c "npm i npm@7.5.3
cmd /c "npm i bufferutil"
cmd /c "npm i javascript-obfuscator"
cmd /c "npm i discord.js@12.5.3"
cmd /c "npm i discord.js-selfbot@12.0.2"
cmd /c "npm i cat-facts"
cmd /c "npm i chance"
cmd /c "npm i dbl.js"
cmd /c "npm i dog-facts"
cmd /c "npm i google-translate-api"
cmd /c "npm i hastebin-gen"
cmd /c "npm i moment-duration-format"
cmd /c "npm i moment"
cmd /c "npm i package-info"
cmd /c "npm i superagent"
cmd /c "npm i utf-8-validate"
cmd /c "npm i zlib-sync"
echo.
echo Done!
echo Criando ficheiro de inicialização...
echo ------------------------------------
echo @echo off > iniciar.bat
echo :: Criado por Skull Rain (https://github.com/SkullRa1n) [ 14 / 11 / 2021 ] >> iniciar.bat
echo :: -*Leia o readme para saber sobre direitos e permissões!*- >> iniciar.bat
echo title Skull Rain Selfbot >> iniciar.bat
echo :START >> iniciar.bat
echo node skull.js >> iniciar.bat
echo goto START >> iniciar.bat
echo "iniciar.bat" iniciar.bat criado.
echo ------------------------------------