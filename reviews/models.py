from django.db import models

# Create your models here.
class Review(models.Model):
  name = models.CharField(max_length=20, default=None)
  title = models.CharField(max_length=20, default=None)
  rating = models.IntegerField()
  text = models.TextField()
  car = models.ForeignKey("cars.Car", on_delete=models.CASCADE)

  def __str__(self):
      return f"Review: {self.title} {self.rating}/5. {self.text} "