from django.shortcuts import render
from .models import Service
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ServiceSerializer
# from .serializers import PopulatedServiceSerializer

class ServiceDetailView(APIView):
    def delete(self, request, pk):
        try:
            service = Service.objects.get(id=pk)
            service.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk):
        service = Service.objects.get(id=pk) # django ORM method to grab
        updated_service = ServiceSerializer(service, data=request.data)
        if updated_service.is_valid():
            updated_service.save()
            return Response(updated_service.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_service.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        service = Service.objects.get(id=pk)
        # serialized_service = PopulatedServiceSerializer(service)
        serialized_service = ServiceSerializer(service) 
        return Response(serialized_service.data,status=status.HTTP_200_OK)

class ServiceIndexView(APIView):
    def post(self,request):
        service = ServiceSerializer(data = request.data)
        if service.is_valid():
            service.save() # <--- django ORM method to save to db
            return Response(service.data, status=status.HTTP_201_CREATED)
        else:
            return Response(service.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self,request):
        services = Service.objects.all()
        # serialized_services = PopulatedServiceSerializer(services, many=True)
        serialized_services = ServiceSerializer(services, many=True)
        return Response(serialized_services.data, status=status.HTTP_200_OK)