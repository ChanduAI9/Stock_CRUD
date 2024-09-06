from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StockViewSet,index

router = DefaultRouter()
router.register(r'stocks', StockViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('home',index,name='index')
]
