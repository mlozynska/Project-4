from django.urls import path
from .views import CarIndexView
from .views import CarDetailView
from . import views

urlpatterns = [
  path('', CarIndexView.as_view()),
  path('<int:pk>/', CarDetailView.as_view()),
  
]