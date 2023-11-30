@echo off
rem Nombre del entorno virtual
set nombre_entorno=mi_entorno
rem Verificar si el entorno virtual existe
if not exist %nombre_entorno% (
    echo Creando y activando el entorno virtual %nombre_entorno%
    python -m venv %nombre_entorno%
)

rem Instalar versiones específicas de Django y las dependencias si el entorno no existe o ya existe
call %nombre_entorno%\Scripts\activate && pip install Django==4.2.7 mysqlclient pymysql django-cors-headers djangorestframework

rem Abrir una nueva ventana CMD con el entorno virtual activado
start cmd /k "call %nombre_entorno%\Scripts\activate"