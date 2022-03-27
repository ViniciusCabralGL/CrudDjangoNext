from django.urls import path
from .views import *

urlpatterns = [
    # Usuarios
    path("", UsuariosAPIView.as_view(), name='home'),
    path("usuarios/", UsuariosAPIView.as_view(), name='usuarios'),
    path('usuarios/<int:pk>/', UsuariosAPIView.as_view(), name='usuariosParameters'),
    # Filmes
    path("filmes/", FilmesAPIView.as_view(), name='filmes'),
    path('filmes/<int:pk>/', FilmesAPIView.as_view(), name='filmesParameters'),
    # Categorias
    path("categorias/", CategoriasAPIView.as_view(), name='categorias'),
    path('categorias/<int:pk>/', CategoriasAPIView.as_view(), name='categoriasParameters'),
    # Assinaturas
    path("assinaturas/", AssinaturasAPIView.as_view(), name='assinaturas'),
    path('assinaturas/<int:pk>/', AssinaturasAPIView.as_view(), name='assinaturasParameters'),
    # Favoritos
    path("favoritos/", FavoritosAPIView.as_view(), name='favoritos'),
    path('favoritos/<int:pk>/', FavoritosAPIView.as_view(), name='favoritosParameters'),
]

