from django.db import models

# Create your models here.
class Image(models.Model):
  image = models.CharField(max_length=500, default=None)
  car = models.ForeignKey("cars.Car", on_delete=models.CASCADE)

  def __str__(self):
      return f"Image: {self.image}"