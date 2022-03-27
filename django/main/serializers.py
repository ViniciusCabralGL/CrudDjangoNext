from rest_framework import serializers
from .models import *


class CategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        many = True
        model = Categorias
        fields = '__all__'


class FilmesSerializer(serializers.ModelSerializer):
    # categorias = CategoriasSerializer(many=True, read_only=True)
    # categorias = serializers.RelatedField(many=True)
    #categorias = CategoriasSerializer(many=True, read_only=True)

    class Meta:
        many = True
        model = Filmes
        fields = '__all__'


class AssinaturasSerializer(serializers.ModelSerializer):
    class Meta:
        many = True
        model = Assinaturas
        fields = '__all__'


class FavoritosSerializer(serializers.ModelSerializer):
    class Meta:
        many = True
        model = Favoritos
        fields = '__all__'


class UsuariosSerializer(serializers.ModelSerializer):
    #assinaturas = AssinaturasSerializer(many=True, read_only=True)

    class Meta:
        many = True
        model = Usuarios
        fields = '__all__'
        #'assinaturas'
        #depth = 1

