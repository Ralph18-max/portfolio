export interface IUser {
  id: number;
  nom: string;
  prenom: string;
  photo_profil: string | null;
  description: string;
  age: number;
  email: string;
  lien_cv: string;
  telephone: string;
}
