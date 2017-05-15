from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import *
from .models import *
from django.contrib.auth.models import User

def main(request):
    return render(request,)
class ArticalViewSet(viewsets.ModelViewSet):
    queryset=Artical.objects.all()
    serializer_class= ArticalSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class= UserSerializer
