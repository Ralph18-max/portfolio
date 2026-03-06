from django.conf import settings
from django.core.mail import send_mail
from rest_framework import viewsets

# Create your views here.

from .models import (
    User,
    SocialNetworks,
    Projet,
    Experience,
    Service,
    Localisation,
    PointContact,
)
from .serializer import (
    UserSerializer,
    SocialNetworksSerializer,
    ProjetSerializer,
    ExperienceSerializer,
    ServiceSerializer,
    LocalisationSerializer,
    PointContactSerializer,
)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("id")
    serializer_class = UserSerializer


class SocialNetworksViewSet(viewsets.ModelViewSet):
    queryset = SocialNetworks.objects.all().order_by("id")
    serializer_class = SocialNetworksSerializer


class ProjetViewSet(viewsets.ModelViewSet):
    queryset = Projet.objects.all().order_by("id")
    serializer_class = ProjetSerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all().order_by("id")
    serializer_class = ExperienceSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all().order_by("id")
    serializer_class = ServiceSerializer


class LocalisationViewSet(viewsets.ModelViewSet):
    queryset = Localisation.objects.all().order_by("id")
    serializer_class = LocalisationSerializer


class PointContactViewSet(viewsets.ModelViewSet):
    queryset = PointContact.objects.all().order_by("id")
    serializer_class = PointContactSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        subject = f"[Portfolio] Nouveau message: {instance.objet}"
        message = (
            f"Nom complet: {instance.nom_complet}\n"
            f"Email: {instance.email}\n\n"
            f"Message:\n{instance.message}"
        )
        recipient = getattr(settings, "CONTACT_FORM_RECIPIENT", None)
        from_email = getattr(settings, "DEFAULT_FROM_EMAIL", None)
        if recipient and from_email:
            send_mail(
                subject,
                message,
                from_email,
                [recipient],
                fail_silently=True,
            )
