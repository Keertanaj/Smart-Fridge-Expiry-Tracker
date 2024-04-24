from django.db import models

# Create your models here.
class React(models.Model):
    food = models.CharField(max_length = 30)
    expiry = models.DateField()
    
