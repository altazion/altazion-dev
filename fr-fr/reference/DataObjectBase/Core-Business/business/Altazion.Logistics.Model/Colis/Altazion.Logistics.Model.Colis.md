## Colis

La classe Colis représente un colis dans le système logistique Altazion.

Propriétés publiques :

- Guid : Identifiant unique du colis (type Guid).
- Numero : Numéro du colis (type string).
- Date : Date d'enregistrement ou de création du colis (type DateTimeOffset).
- CodeBarre : Code-barres associé au colis (type string).
- PrestataireId : Identifiant du prestataire logistique (type int).
- DatePrelevement : Date optionnelle de prélèvement du colis (type DateTimeOffset?).
- Poids : Poids du colis en grammes (type decimal).
- EstLivre : Indique si le colis a été livré (type bool).
- BordereauGuid : Identifiant optionnel du bordereau associé (type Guid?).
- Nom : Nom du destinataire ou du colis (type string).
- Adresse : Adresse de livraison (type string).
- CodePostal : Code postal de livraison (type string).
- Ville : Ville de livraison (type string).
- BonPreparationGuid : Identifiant du bon de préparation associé (type Guid).

Chaque propriété reflète une information précise liée à la gestion des colis dans Altazion.

### D�claration TypeScript
```typescript
interface Colis {
  Guid: string; // Identifiant unique du colis
  Numero: string; // Numéro du colis
  Date: string; // Date d'enregistrement ou de création (format ISO 8601)
  CodeBarre: string; // Code-barres associé
  PrestataireId: number; // Identifiant du prestataire
  DatePrelevement?: string | null; // Date optionnelle de prélèvement (nullable, format ISO 8601)
  Poids: number; // Poids en grammes
  EstLivre: boolean; // Statut de livraison
  BordereauGuid?: string | null; // Identifiant optionnel du bordereau
  Nom: string; // Nom du destinataire
  Adresse: string; // Adresse de livraison
  CodePostal: string; // Code postal
  Ville: string; // Ville
  BonPreparationGuid: string; // Identifiant du bon de préparation
}
```