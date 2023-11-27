# models.py
from django.db import models

class SensorData(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()


    def __str__(self):
        return f'Temperature: {self.temperature}, Humidity: {self.humidity}'
