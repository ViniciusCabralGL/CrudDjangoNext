from django.contrib import admin

from .models import *


class detUsuarios(admin.ModelAdmin):
    list_display = ('id', 'nome', 'email', 'fone', 'ativo')
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10


class detFilmes(admin.ModelAdmin):
    list_display = ('id', 'nome', 'categoria_FK')
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10


class detCategorias(admin.ModelAdmin):
    list_display = ('id', 'nome')
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10


class detAssinaturas(admin.ModelAdmin):
    list_display = ('id', 'nome', 'valor',)
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10


class detFavoritos(admin.ModelAdmin):
    list_display = ('id', 'filme_FK', 'usuario_FK')
    list_display_links = ('id',)
    list_per_page = 10


admin.site.register(Usuarios, detUsuarios)
admin.site.register(Filmes, detFilmes)
admin.site.register(Categorias, detCategorias)
admin.site.register(Assinaturas, detAssinaturas)
admin.site.register(Favoritos, detFavoritos)
