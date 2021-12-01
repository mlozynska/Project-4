from django.db import models

# Create your models here.
class Car(models.Model):
  title = models.CharField(max_length=50, default=None)
  colour = models.CharField(max_length=50, default=None)
  year = models.IntegerField(default=None)
  picture = models.CharField(max_length=500, default=None)
  colour = models.CharField(max_length=50, default=None)
  steering = models.CharField(max_length=20, default=None)
  passengers = models.IntegerField(default=None)
  description = models.TextField(max_length=1500, default=None)
  minprice = models.IntegerField(default=None)
  hourly = models.IntegerField(default=None)

  def __str__(self):
    return f'{self.title}'