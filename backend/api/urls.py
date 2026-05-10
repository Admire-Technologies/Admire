from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('contacts', views.ContactInquiryViewSet)
router.register('services', views.ServiceViewSet)
router.register('projects', views.ProjectViewSet)
router.register('clients', views.ClientViewSet)
router.register('subscribers', views.SubscriberViewSet)

urlpatterns = [
    path('health/', views.health_check),
    path('', include(router.urls)),
]
