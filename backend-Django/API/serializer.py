from rest_framework import serializers
from .models import (
    User,
    SocialNetworks,
    Projet,
    Experience,
    Service,
    Localisation,
    PointContact
)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class SocialNetworksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialNetworks
        fields = '__all__'


class ProjetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projet
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class LocalisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Localisation
        fields = '__all__'


class PointContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = PointContact
        fields = '__all__'


