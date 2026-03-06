from django.db import models


# Create your models here.
class User(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    photo_profil = models.ImageField(upload_to='photos/', blank=True, null=True)
    description = models.TextField(blank=True)
    age = models.IntegerField()
    email = models.EmailField(unique=True)
    lien_cv = models.URLField(blank=True)
    telephone = models.CharField(max_length=20)
    
    def __str__(self):
        return f"{self.prenom} {self.nom}"

class SocialNetworks(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="reseaux_sociaux"
    )
    nom_plateforme = models.CharField(max_length=50)
    lien = models.URLField()

    def __str__(self):
        return self.nom_plateforme

class Projet(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="projets"
    )
    resume = models.TextField()
    titre = models.CharField(max_length=150)
    image = models.ImageField(upload_to='projets/', blank=True, null=True)
    lien = models.URLField(blank=True)

    def __str__(self):
        return self.titre

class Experience(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="experiences"
    )
    date_debut = models.DateField()
    date_fin = models.DateField(blank=True, null=True)
    role = models.CharField(max_length=100)
    nom_entreprise = models.CharField(max_length=150)
    description = models.TextField()
    type_contrat = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.role} - {self.nom_entreprise}"

class Service(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="services"
    )
    nom = models.CharField(max_length=100)
    detail = models.TextField()
    type_service = models.CharField(max_length=100)
    outils = models.CharField(max_length=255)

    def __str__(self):
        return self.nom

class Localisation(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="localisation"
    )
    pays = models.CharField(max_length=100)
    ville = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    quartier = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.ville}, {self.pays}"

class PointContact(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="points_contact"
    )
    nom_complet = models.CharField(max_length=150)
    objet = models.CharField(max_length=150)
    message = models.TextField()
    email = models.EmailField()

    def __str__(self):
        return self.nom_complet

   
