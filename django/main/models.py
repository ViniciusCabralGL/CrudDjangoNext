from django.db import models
from django.utils import timezone


class Assinaturas(models.Model):
    nome = models.CharField(max_length=55)
    valor = models.FloatField()

    def __str__(self):
        return self.nome


class Categorias(models.Model):
    nome = models.CharField(max_length=55)

    def __str__(self):
        return self.nome


class Filmes(models.Model):
    nome = models.CharField(max_length=55)
    categoria_FK = models.ForeignKey(Categorias, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.nome


class Usuarios(models.Model):
    nome = models.CharField(max_length=55)
    email = models.CharField(max_length=80)
    fone = models.CharField(max_length=15)
    ativo = models.BooleanField(default=False)
    assinatura_FK = models.ForeignKey(Assinaturas, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.nome


class Favoritos(models.Model):
    filme_FK = models.ForeignKey(Filmes, on_delete=models.DO_NOTHING)
    usuario_FK = models.ForeignKey(Usuarios, on_delete=models.DO_NOTHING)



