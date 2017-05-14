from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

from .models import *


class UserSerializer(ModelSerializer):
    class Meta:
        model=User
        fields = ['id', 'username','first_name','last_name','email']

class ArticalSerializer(ModelSerializer):
    author=UserSerializer()
    class Meta:
        model= Artical
        fields=['id','url','title','image','author','body']

class NewArticleSerializer(ModelSerializer):
