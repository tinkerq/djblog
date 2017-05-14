from django.conf.urls import include,url
from .views import *
from rest_framework import routers

router=routers.DefaultRouter()
router.register('artical',ArticalViewSet)
router.register('user',UserViewSet)
router.register('artical/new',NewArticalViewSet)

urlpatterns = [
    url('',include(router.urls)),
]