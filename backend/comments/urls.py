from importlib.resources import path
from django.urls import path
from . import views

urlpatterns = [
    path('', views.comments_list),
    path('<int:pk>/', views.comment_detail),
]