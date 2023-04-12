from django.db import models
from uuid import uuid4

# Create your models here.

class Cliente(models.Model):
    id_cliente = models.UUIDField(primary_key=True,default=uuid4,editable=False)

    nome = models.CharField(max_length=100)

    nacionalidade = models.CharField(max_length=100)
    naturalidade = models.CharField(max_length=100)
    data_nasc = models.CharField(max_length=100)

    MASCULINO = "Masculino"
    FEMININO = "Feminino"
    SEXO_OPCOES = [
        (MASCULINO, "Masculino"),
        (FEMININO, "Feminino")
    ]
    sexo = models.CharField(max_length=20,choices=SEXO_OPCOES,default=MASCULINO)

    estado_civil = models.CharField(max_length=100)

    sim = "Sim"
    nao = "Não"
    PARATLETA_OPCOES = [
        (nao, "Não"),
        (sim, "Sim")
    ]
    paratleta = models.CharField(max_length=100, choices=PARATLETA_OPCOES,default=nao)

    endereco = models.CharField(max_length=100)
    bairro = models.CharField(max_length=100)
    cep = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)

    telefone_residencial = models.CharField(max_length=100)
    telefone_comercial = models.CharField(max_length=100)
    celular = models.CharField(max_length=100)

    profissao = models.CharField(max_length=100)

    nome_pai = models.CharField(max_length=100)
    nome_mae = models.CharField(max_length=100)
    dependente_01 = models.CharField(max_length=100)
    dependente_02 = models.CharField(max_length=100)
    dependente_03 = models.CharField(max_length=100)
    dependente_04 = models.CharField(max_length=100)

    cpf = models.CharField(max_length=100)
    rg = models.CharField(max_length=100)
    orgao_emissor = models.CharField(max_length=100)
    data_emissao = models.CharField(max_length=100)
    passaporte = models.CharField(max_length=100)
    validade_passaporte = models.CharField(max_length=100)
    cr = models.CharField(max_length=100)
    validade_cr = models.CharField(max_length=100)
    observacoes = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

