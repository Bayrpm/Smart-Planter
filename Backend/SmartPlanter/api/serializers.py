# serializers.py
from rest_framework import serializers
from .models import *

class SensorDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = '__all__'

class SensorSueloSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorSuelo
        fields = '__all__'

