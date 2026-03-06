# 🚀 Guide de Déploiement - Portfolio Django + Angular

## 📋 Architecture de Déploiement

### Option B: Serverless (Recommandé)
- **Frontend**: Netlify (gratuit)
- **Backend**: Render.com (gratuit → $7/mois)

---

## 🎯 Étape 1: Déployer le Backend (Render.com)

### 1.1 Préparer le Repository
```bash
# Ajouter les fichiers de déploiement
git add .
git commit -m "Add deployment configuration"
git push origin main
```

### 1.2 Créer le Service sur Render.com
1. Allez sur [render.com](https://render.com)
2. Connectez-vous avec GitHub
3. Cliquez sur "New +" → "Web Service"
4. Sélectionnez votre repository
5. Configurez le service :
   - **Name**: portfolio-backend
   - **Runtime**: Python 3
   - **Root Directory**: `backend-Django`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn config.wsgi:application`
   - **Instance Type**: Free

### 1.3 Variables d'Environnement
Ajoutez ces variables dans Render Dashboard :
```
DJANGO_SECRET_KEY=yXSycDk8NKpZ4uv214jGORbqsap7BnAUi5BTzpNRDzjbbF6kiU_qc5oqjvqJ8yu1-54
DEBUG=False
ALLOWED_HOSTS=votre-url.onrender.com
CONTACT_FORM_RECIPIENT=kouamejeantrinite@gmail.com
```

### 1.4 Générer une Clé Secrète
```bash
python -c "import secrets; print(secrets.token_urlsafe(50))"
```

---

## 🎯 Étape 2: Mettre à Jour le Frontend

### 2.1 Mettre à Jour l'URL de l'API
Remplacez `https://your-backend-url.onrender.com` par votre vraie URL Render dans tous les services :
- `src/app/shared/Services/UserService.ts`
- `src/app/shared/Services/ProjetService.ts`
- `src/app/shared/Services/ExperienceService.ts`
- `src/app/shared/Services/ServiceService.ts`
- `src/app/shared/Services/SocialNetworksService.ts`
- `src/app/shared/Services/Localisation.ts`
- `src/app/shared/Services/PointContactService.ts`

### 2.2 Build de Production
```bash
cd portfolio-angular-Kouame-jean-Raphael-Trinite
npm run build
```

---

## 🎯 Étape 3: Déployer le Frontend (Netlify)

### 3.1 Créer le Compte Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous avec GitHub

### 3.2 Déployer le Site
1. Cliquez sur "Add new site" → "Import an existing project"
2. Sélectionnez votre repository
3. Configurez les paramètres :
   - **Base directory**: `portfolio-angular-Kouame-jean-Raphael-Trinite`
   - **Build command**: `cd portfolio-angular-Kouame-jean-Raphael-Trinite && npm run build`
   - **Publish directory**: `portfolio-angular-Kouame-jean-Raphael-Trinite/dist/portfolio`
   - **Node version**: 18

### 3.3 Variables d'Environnement (Optionnel)
Ajoutez des variables si nécessaire dans Netlify Dashboard.

---

## 🎯 Étape 4: Configuration CORS

### 4.1 Mettre à Jour les Origines Autorisées
Dans votre dashboard Render.com, ajoutez l'URL Netlify :
```
CORS_ALLOWED_ORIGINS = [
    "https://votre-site.netlify.app",
    "http://localhost:4200",  # Pour développement
]
```

---

## 🎯 Étape 5: Tester le Déploiement

### 5.1 Vérifier le Backend
Visitez `https://votre-backend-url.onrender.com/api/users/`

### 5.2 Vérifier le Frontend
Visitez `https://votre-site.netlify.app`

### 5.3 Tester le Formulaire de Contact
Remplissez et soumettez le formulaire de contact.

---

## 🔧 Dépannage

### Problèmes Communs

#### CORS Errors
```python
# Dans settings.py du backend
CORS_ALLOWED_ORIGINS = [
    "https://votre-site.netlify.app",
]
```

#### Backend ne démarre pas
```bash
# Vérifier les logs sur Render.com
# Assurer que toutes les dépendances sont dans requirements.txt
```

#### Frontend ne se charge pas
```bash
# Vérifier que le build a réussi
# Nettoyer et rebuild : npm run build
```

#### Formulaire de contact ne fonctionne pas
- Vérifier les URLs dans les services Angular
- Tester l'API directement avec curl/Postman
- Vérifier les CORS settings

---

## 📝 Checklist de Déploiement

- [ ] Backend déployé sur Render.com
- [ ] Variables d'environnement configurées
- [ ] Frontend buildé avec la bonne URL d'API
- [ ] Frontend déployé sur Netlify
- [ ] CORS configuré pour l'URL Netlify
- [ ] Formulaire de contact testé
- [ ] Toutes les pages fonctionnent

---

## 🎉 Félicitations !

Votre portfolio est maintenant en ligne ! Les visiteurs peuvent :
- Voir vos informations personnelles
- Consulter vos projets et expériences
- Vous contacter via le formulaire
- Accéder à vos réseaux sociaux

---

## 💡 Pour Aller Plus Loin

1. **Domaine Personnalisé**: Configurez un domaine sur Netlify
2. **Analytics**: Ajoutez Google Analytics
3. **SEO**: Optimisez les meta-tags
4. **Performance**: Utilisez le CDN de Netlify
5. **Sécurité**: Ajoutez des headers de sécurité
