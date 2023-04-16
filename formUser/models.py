from django.db import models

# Create your models here.

class Cliente(models.Model):
    cpf = models.CharField(primary_key=True,max_length=100)
    nome = models.CharField(max_length=100, primary_key=False)

    nacionalidade = models.CharField(max_length=100)
    naturalidade = models.CharField(max_length=100)
    data_nasc = models.CharField(max_length=100)

    sexo = models.CharField(max_length=100)

    estado_civil = models.CharField(max_length=100)

    paratleta = models.CharField(max_length=100)

    endereco = models.CharField(max_length=100)
    bairro = models.CharField(max_length=100)
    cep = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)

    telefone_residencial = models.CharField(max_length=100, blank=True)
    telefone_comercial = models.CharField(max_length=100, blank=True)
    celular = models.CharField(max_length=100)

    profissao = models.CharField(max_length=100)

    nome_pai = models.CharField(max_length=100)
    nome_mae = models.CharField(max_length=100)
    dependente_01 = models.CharField(max_length=100, blank=True)
    dependente_02 = models.CharField(max_length=100, blank=True)
    dependente_03 = models.CharField(max_length=100, blank=True)
    dependente_04 = models.CharField(max_length=100, blank=True)

    rg = models.CharField(max_length=100)
    orgao_emissor = models.CharField(max_length=100)
    data_emissao = models.CharField(max_length=100)
    passaporte = models.CharField(max_length=100, blank=True)
    validade_passaporte = models.CharField(max_length=100, blank=True)
    cr = models.CharField(max_length=100, blank=True)
    validade_cr = models.CharField(max_length=100, blank=True)
    observacoes = models.CharField(max_length=100, blank=True)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

