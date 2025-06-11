from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=False, null=False)

    def __str__(self):
        return self.first_name
    
    def __str__(self):
        return self.last_name 
class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=255)
    max_attendees = models.PositiveIntegerField(default=50)

    def __str__(self):
        return f"{self.title} - {self.date}"
class EventRegistration(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return f"{self.username} - {self.event.title}"