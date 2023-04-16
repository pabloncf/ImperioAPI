from django.shortcuts import render
from rest_framework import viewsets
from .models import Cliente
from .serializer import ClienteSerializer

# Create your views here.

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all().order_by('cpf')
    serializer_class = ClienteSerializer
