# views.py
from rest_framework import generics
from .models import SensorData
from .serializers import SensorDataSerializer
from rest_framework.response import Response
from rest_framework import status


class ListaSensorData(generics.ListCreateAPIView):
    queryset = SensorData.objects.all()
    serializer_class = SensorDataSerializer
    

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)