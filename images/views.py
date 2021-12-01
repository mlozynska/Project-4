from django.shortcuts import render
from .models import Image
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ImageSerializer

class ImageDetailView(APIView):
    def delete(self, request, pk):
        try:
            image = Image.objects.get(id=pk)
            image.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk):
        image = Image.objects.get(id=pk)
        updated_image = ImageSerializer(image, data=request.data)
        if updated_image.is_valid():
            updated_image.save()
            return Response(updated_image.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_image.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        image = Image.objects.get(id=pk)
        serialized_image = ImageSerializer(image)
        return Response(serialized_image.data,status=status.HTTP_200_OK)

class ImageIndexView(APIView):
    def post(self,request):
        image = ImageSerializer(data = request.data)
        if image.is_valid():
            image.save()
            return Response(image.data, status=status.HTTP_201_CREATED)
        else:
            return Response(image.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # responder to GET /parks/
    def get(self,request):
        images = Image.objects.all()
        serialized_images = ImageSerializer(images, many=True)
        return Response(serialized_images.data, status=status.HTTP_200_OK)