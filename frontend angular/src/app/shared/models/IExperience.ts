export interface IExperience {
  id: number;
  user: number;
  date_debut: string;
  date_fin: string | null;
  role: string;
  nom_entreprise: string;
  description: string;
  type_contrat: string;
}
