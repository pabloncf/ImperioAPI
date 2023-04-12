from rest_framework import serializers
from .models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = [
            'id_cliente',
            'nome',
            'nacionalidade',
            'naturalidade',
            'data_nasc',
            'sexo',
            'estado_civil',
            'paratleta',
            'endereco',
            'bairro',
            'cep',
            'cidade',
            'estado',
            'telefone_residencial',
            'telefone_comercial',
            'celular',
            'profissao',
            'nome_pai',
            'nome_mae',
            'dependente_01',
            'dependente_02',
            'dependente_03',
            'dependente_04',
            'cpf',
            'rg',
            'orgao_emissor',
            'data_emissao',
            'passaporte',
            'validade_passaporte',
            'cr',
            'validade_cr',
            'observacoes'
        ]
