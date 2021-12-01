from django.urls import path
from . import views
from .views import ImageIndexView
from .views import ImageDetailView

urlpatterns = [
    path('<int:pk>/', ImageDetailView.as_view()),
    path('', ImageIndexView.as_view()),
]