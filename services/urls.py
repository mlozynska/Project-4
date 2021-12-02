from django.urls import path
from . import views
from .views import ServiceIndexView
from .views import ServiceDetailView

urlpatterns = [
    path('<int:pk>/', ServiceDetailView.as_view()),     # wildcard: we specify that the route can match /5 or /6
    path('', ServiceIndexView.as_view()),
]