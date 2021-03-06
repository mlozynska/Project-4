from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=9)
    picture = models.CharField(max_length=500, default=None)

    def __str__(self):
        return self.title