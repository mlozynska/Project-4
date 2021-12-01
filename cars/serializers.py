from rest_framework import serializers
from .models import Car
from reviews.serializers import ReviewSerializer
from images.serializers import ImageSerializer

class CarSerializer(serializers.ModelSerializer):
  class Meta:
    model = Car
    fields = '__all__'

class PopulatedCarSerializer(CarSerializer):
  review_set = ReviewSerializer(read_only=True, many=True)
  image_set = ImageSerializer(read_only=True, many=True)