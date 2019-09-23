from django.db import models

class CustomerUser(models.Model):
    Email = models.EmailField(unique=True)
    Name = models.CharField(max_length=20)
    SecondName = models.CharField(max_length=20)
    LastName = models.CharField(max_length=20, blank=True)
    Icon = models.ImageField()
    Creation = models.DateTimeField()
