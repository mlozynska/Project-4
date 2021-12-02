from rest_framework import serializers
from services.serializers import ServiceSerializer
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
  services = ServiceSerializer(read_only=True, many=True)