# urls.py
from django.urls import path
from .views import ListaSensorData

urlpatterns = [
    path('sensordata/', ListaSensorData.as_view(), name='lista-sensordata'),
]
