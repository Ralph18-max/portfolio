from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    UserViewSet,
    SocialNetworksViewSet,
    ProjetViewSet,
    ExperienceViewSet,
    ServiceViewSet,
    LocalisationViewSet,
    PointContactViewSet,
)

router = DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"social-networks", SocialNetworksViewSet)
router.register(r"projets", ProjetViewSet)
router.register(r"experiences", ExperienceViewSet)
router.register(r"services", ServiceViewSet)
router.register(r"localisations", LocalisationViewSet)
router.register(r"points-contact", PointContactViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
