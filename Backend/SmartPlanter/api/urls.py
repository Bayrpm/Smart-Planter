# urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('sensordata/', ListaSensorData.as_view(), name='lista-sensordata'),
    path('SensorSuelo/', ListarSensorSuelo.as_view(), name='lista-SensorSuelo'),
]
