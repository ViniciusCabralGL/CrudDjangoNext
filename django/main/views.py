from .serializers import *
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from django.http import HttpResponseRedirect
from rest_framework.permissions import IsAuthenticated
#from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
# import requests


class UsuariosAPIView(APIView):
    """API Usuarios"""
    #permission_classes = (IsAuthenticated,)
    def get(self, request, pk=''):
        if pk == '':
            usuarios = Usuarios.objects.all()
            # usuarios =  Usuarios.objects.filter(id=pk)
            serializer = UsuariosSerializer(usuarios, many=True)
            return Response(serializer.data)
        else:
            usuarios = Usuarios.objects.get(id=pk)
            serializer = UsuariosSerializer(usuarios)
            return Response(serializer.data)

    def post(self, request):
        serializer = UsuariosSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"msg": "Inserido com sucesso"})
        # return Response({"id": serializer.data['id']})

    def put(self, request, pk=''):
        usuarios = Usuarios.objects.get(id=pk)
        serializer = UsuariosSerializer(usuarios, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk=''):
        usuarios = Usuarios.objects.get(id=pk)
        usuarios.delete()
        return Response({"msg": "Apagado com sucesso"})


class FilmesAPIView(APIView):
    def get(self, request, pk=''):
        if pk == '':
            filmes = Filmes.objects.all()
            # usuarios =  Usuarios.objects.filter(id=pk)
            serializer = FilmesSerializer(filmes, many=True)
            return Response(serializer.data)
        else:
            filmes = Filmes.objects.get(id=pk)
            serializer = FilmesSerializer(filmes)
            return Response(serializer.data)

    def post(self, request):
        serializer = FilmesSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"msg": "Inserido com sucesso"})
        # return Response({"id": serializer.data['id']})

    def put(self, request, pk=''):
        filmes = Filmes.objects.get(id=pk)
        serializer = FilmesSerializer(filmes, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk=''):
        filmes = Filmes.objects.get(id=pk)
        filmes.delete()
        return Response({"msg": "Apagado com sucesso"})


class CategoriasAPIView(APIView):
    def get(self, request, pk=''):
        if pk == '':
            categorias = Categorias.objects.all()
            # usuarios =  Usuarios.objects.filter(id=pk)
            serializer = CategoriasSerializer(categorias, many=True)
            return Response(serializer.data)
        else:
            categorias = Categorias.objects.get(id=pk)
            serializer = CategoriasSerializer(categorias)
            return Response(serializer.data)

    def post(self, request):
        serializer = CategoriasSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"msg": "Inserido com sucesso"})
        # return Response({"id": serializer.data['id']})

    def put(self, request, pk=''):
        categorias = Categorias.objects.get(id=pk)
        serializer = CategoriasSerializer(categorias, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk=''):
        categorias = Categorias.objects.get(id=pk)
        categorias.delete()
        return Response({"msg": "Apagado com sucesso"})


class AssinaturasAPIView(APIView):
    def get(self, request, pk=''):
        if pk == '':
            assinaturas = Assinaturas.objects.all()
            # usuarios =  Usuarios.objects.filter(id=pk)
            serializer = AssinaturasSerializer(assinaturas, many=True)
            return Response(serializer.data)
        else:
            assinaturas = Assinaturas.objects.get(id=pk)
            serializer = AssinaturasSerializer(assinaturas)
            return Response(serializer.data)

    def post(self, request):
        serializer = AssinaturasSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"msg": "Inserido com sucesso"})
        # return Response({"id": serializer.data['id']})

    def put(self, request, pk=''):
        assinaturas = Assinaturas.objects.get(id=pk)
        serializer = AssinaturasSerializer(assinaturas, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk=''):
        assinaturas = Assinaturas.objects.get(id=pk)
        assinaturas.delete()
        return Response({"msg": "Apagado com sucesso"})


class FavoritosAPIView(APIView):
    def get(self, request, pk=''):
        if pk == '':
            favoritos = Favoritos.objects.all()
            # usuarios =  Usuarios.objects.filter(id=pk)
            serializer = FavoritosSerializer(favoritos, many=True)
            return Response(serializer.data)
        else:
            favoritos = Favoritos.objects.get(id=pk)
            serializer = FavoritosSerializer(favoritos)
            return Response(serializer.data)

    def post(self, request):
        serializer = FavoritosSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"msg": "Inserido com sucesso"})
        # return Response({"id": serializer.data['id']})

    def put(self, request, pk=''):
        favoritos = Favoritos.objects.get(id=pk)
        serializer = FavoritosSerializer(favoritos, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk=''):
        favoritos = Favoritos.objects.get(id=pk)
        favoritos.delete()
        return Response({"msg": "Apagado com sucesso"})