from importlib.resources import path
from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.comment_detail),
     path('', views.user_comments),
    path('all/', views.get_all_comments),
]