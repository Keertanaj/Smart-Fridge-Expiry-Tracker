# Generated by Django 5.0.3 on 2024-03-06 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='React',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('food', models.CharField(max_length=30)),
                ('expiry', models.CharField(max_length=10)),
            ],
        ),
    ]
