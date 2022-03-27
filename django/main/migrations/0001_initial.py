# Generated by Django 4.0.2 on 2022-03-16 18:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Assinaturas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=55)),
                ('valor', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Categorias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=55)),
            ],
        ),
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idUserFK', models.BigIntegerField()),
                ('nome', models.CharField(max_length=55)),
                ('email', models.CharField(max_length=80)),
                ('fone', models.CharField(max_length=15)),
                ('ativo', models.BooleanField(default=False)),
                ('assinatura_FK', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='main.assinaturas')),
            ],
        ),
        migrations.CreateModel(
            name='Filmes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=55)),
                ('categoria_FK', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='main.categorias')),
            ],
        ),
        migrations.CreateModel(
            name='Favoritos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('filme_FK', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='main.filmes')),
                ('usuario_FK', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='main.usuarios')),
            ],
        ),
    ]