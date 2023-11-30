# urls.py
from django.urls import path
from .views import ListaSensorData, ListarDatosSensorData

urlpatterns = [
    path('sensordata/', ListaSensorData.as_view(), name='lista-sensordata'),
    path('listar-datos-sensor-data/', ListarDatosSensorData.as_view(), name='listar_datos_sensor_data'),
]
