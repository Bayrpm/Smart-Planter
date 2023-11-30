from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status

class ListaSensorData(generics.ListCreateAPIView):
    serializer_class = SensorDataSerializer

    def get_queryset(self):
        # Devolver el primer registro si existe
        return SensorData.objects.all().first()

    def perform_create(self, serializer):
        # Obtener el primer registro
        existing_data = SensorData.objects.first()

        # Si existe un registro, actualizar los valores
        if existing_data:
            serializer.update(existing_data, self.request.data)
            return Response(serializer.data, status=status.HTTP_200_OK)

        # Si no existe un registro, crear uno nuevo
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ListarSensorSuelo(generics.ListCreateAPIView):
    serializer_class = SensorSueloSerializer

    def get_queryset(self):
        # Devolver el primer registro si existe
        return SensorSuelo.objects.all().first()

    def perform_create(self, serializer):
        # Obtener el primer registro
        existing_data = SensorSuelo.objects.first()

        # Si existe un registro, actualizar los valores
        if existing_data:
            serializer.update(existing_data, self.request.data)
            return Response(serializer.data, status=status.HTTP_200_OK)

        # Si no existe un registro, crear uno nuevo
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ListarDatosSensorData(generics.ListAPIView):
    serializer_class = SensorDataSerializer
    queryset = SensorData.objects.all()

