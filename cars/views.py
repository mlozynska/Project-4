from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Car
from .serializers import CarSerializer, PopulatedCarSerializer
from django.http.response import HttpResponse

class CarDetailView(APIView): # ONE OBJECT
  def get(self, request, pk): # pk = id-integer # GET ONE OBJECT
    car = Car.objects.get(id=pk) # find object by id
    print(car)
    serialized_car = PopulatedCarSerializer(car) # formatting data
    return Response(serialized_car.data, status=status.HTTP_200_OK)

  def delete(self, request, pk): # pk = id-integer # DELETE ONE OBJECT
    delete_car = Car.objects.get(id=pk) # find object by id
    delete_car.delete() # delete object
    return Response(status=status.HTTP_204_NO_CONTENT)

  def put(self, request, pk): # pk = id-integer # UPDATE ONE OBJECT
    update_car = Car.objects.get(id=pk) # find object by id
    serialized_update_car = CarSerializer(update_car, data=request.data) # formatting data
    if serialized_update_car.is_valid():
      serialized_update_car.save()
      return Response(serialized_update_car.data, status=status.HTTP_202_ACCEPTED)
    else:
      return Response(serialized_update_car.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class CarIndexView(APIView):
  def post(self, request): #POST NEW OBJECT 
    car = CarSerializer(data = request.data)# serializing incoming data to proper format
    if car.is_valid(): # validation if data is valid
      car.save() # saving in database django ORM method to to save db
      return Response(car.data, status=status.HTTP_201_CREATED)

  def get(self, request): # GET ALL OBJECTS
    #get all listings from database
    cars = Car.objects.all()
    print("CARS********->", cars) # returns a queryset, needs to be converted
    # serialize the response, to convert into python

    serialised_cars = PopulatedCarSerializer(cars, many=True)

    print('SERIALISED CARS *********->', serialised_cars.data)
    # return the response as JSON
    return Response(serialised_cars.data, status=status.HTTP_200_OK)

def home(request):
  cars = Car.objects.all() # all data giving back
  # print(cars)
  return HttpResponse('<h1>My Parks!</h1>')

def about(request):
  cars = Car.objects.all()
  # print(cars)
  return HttpResponse('<h1>About the Park<h1>')