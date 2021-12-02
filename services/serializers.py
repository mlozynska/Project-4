from django.db import models
from rest_framework import serializers

from reviews.serializers import ReviewSerializer
from .models import Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class PopulatedServiceSerializer(ServiceSerializer):
    review_set = ReviewSerializer(read_only=True, many=True)