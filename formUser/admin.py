from django.contrib import admin
from .models import Cliente,DadosPessoais
# Register your models here.

class ClienteAdmin(admin.ModelAdmin):
    list_display = (
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
        'dependente_04'
        )

admin.site.register(Cliente,ClienteAdmin)

class DadosPessoaisAdmin(admin.ModelAdmin):
    list_display = (
        'cpf',
        'rg',
        'orgao_emissor',
        'data_emissao',
        'passaporte',
        'validade_passaporte',
        'cr',
        'validade_cr',
        'observacoes'
    )

admin.site.register(DadosPessoais,DadosPessoaisAdmin)