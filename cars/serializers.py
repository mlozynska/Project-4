from rest_framework import serializers
from .models import Car
from reviews.serializers import ReviewSerializer

class CarSerializer(serializers.ModelSerializer):
  class Meta:
    model = Car
    fields = '__all__'

class PopulatedCarSerializer(CarSerializer):
  review_set = ReviewSerializer(read_only=True, many=True)    