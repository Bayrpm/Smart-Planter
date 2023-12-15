# urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('sensordata/', ListaSensorData.as_view(), name='lista-sensordata'),
    path('SensorSuelo/', ListarSensorSuelo.as_view(), name='lista-SensorSuelo'),
    path('listar-datos-sensor-data/', ListarDatosSensorData.as_view(), name='listar_datos_sensor_data'),
    path('listar-datos-sensor-suelo/', ListarDatosSensorSuelo.as_view(), name='listar_datos_sensor_suelo'),
]
