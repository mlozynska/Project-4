from django.urls import path
from . import views
from .views import ReviewIndexView
from .views import ReviewDetailView

urlpatterns = [
    path('<int:pk>/', ReviewDetailView.as_view()),
    path('', ReviewIndexView.as_view()),
]