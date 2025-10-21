## Colis

La classe Colis représente un colis logistique avec plusieurs propriétés clés :

- Guid : Identifiant unique du colis (type Guid).
- Numero : Numéro du colis (string).
- Date : Date à laquelle le colis a été créé ou enregistré (DateTime).
- CodeBarre : Code barre associé au colis (string).
- PrestataireId : Identifiant du prestataire logistique en charge du colis (int).
- DatePrelevement : Date du prélèvement du colis, peut être null (DateTime?).
- Poids : Poids du colis en grammes (decimal).
- EstLivre : Indique si le colis a été livré (bool).
- BordereauGuid : Identifiant optionnel du bordereau lié au colis (Guid?).
- Nom : Nom du destinataire ou du colis (string).
- Adresse : Adresse de livraison (string).
- CodePostal : Code postal de l'adresse de livraison (string).
- Ville : Ville de l'adresse de livraison (string).
- BonPreparationGuid : Identifiant du bon de préparation lié au colis (Guid).

Cette classe dérive de DataObjectBase et encapsule la logique de chargement des données via la méthode FromDataRow, qui remplit les propriétés à partir d'une ligne de données. Elle surcharge aussi la méthode GetKey pour retourner la clé principale (le Guid) et ToString pour un affichage lisible du colis.

### D�claration TypeScript
```typescript
interface Colis {
  Guid: string; // Unique identifier of the parcel
  Numero: string; // Parcel number
  Date: string; // Parcel date in ISO format
  CodeBarre: string; // Barcode
  PrestataireId: number; // Logistic service provider ID
  DatePrelevement?: string | null; // Nullable pickup date
  Poids: number; // Weight in grams
  EstLivre: boolean; // Delivered status
  BordereauGuid?: string | null; // Optional shipping slip ID
  Nom: string; // Name
  Adresse: string; // Delivery address
  CodePostal: string; // Postal code
  Ville: string; // City
  BonPreparationGuid: string; // Preparation slip ID
}
```