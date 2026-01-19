## Colis

The Colis class represents a parcel in the Altazion logistics system.

Public properties:

- Guid: Unique identifier of the parcel (type Guid).
- Numero: Parcel number (type string).
- Date: Date of registration or creation of the parcel (type DateTimeOffset).
- CodeBarre: Barcode associated with the parcel (type string).
- PrestataireId: Identifier of the logistics service provider (type int).
- DatePrelevement: Optional date when the parcel was picked up (type DateTimeOffset?).
- Poids: Weight of the parcel in grams (type decimal).
- EstLivre: Indicates whether the parcel has been delivered (type bool).
- BordereauGuid: Optional identifier of the associated delivery note (type Guid?).
- Nom: Name of the recipient or parcel (type string).
- Adresse: Delivery address (type string).
- CodePostal: Delivery postal code (type string).
- Ville: Delivery city (type string).
- BonPreparationGuid: Identifier of the associated preparation slip (type Guid).

Each property represents specific information related to parcel management in Altazion.

### TypeScript class
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