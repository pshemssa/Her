from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=False, null=False)

    def __str__(self):
        return self.first_name
    
    def __str__(self):
        return self.last_name 
