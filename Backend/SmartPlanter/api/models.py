# models.py
from django.db import models

class SensorData(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()


    def __str__(self):
        return f'Temperature: {self.temperature}, Humidity: {self.humidity}'


class SensorSuelo(models.Model):
    humidity_ground = models.TextField()

    def __str__(self):
        return f'Humidity: {self.humidity}'
