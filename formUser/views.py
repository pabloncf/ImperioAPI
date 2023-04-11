from django.shortcuts import render
from rest_framework import viewsets
from .models import Cliente,DadosPessoais
from .serializer import ClienteSerializer,DadosPessoaisSerializer

# Create your views here.

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all().order_by('id_cliente')
    serializer_class = ClienteSerializer

class DadosPessoaisViewSet(viewsets.ModelViewSet):
    queryset = DadosPessoais.objects.all().order_by('cpf')
    serializer_class = DadosPessoaisSerializer