## Colis

The Colis class models a logistics parcel with several important properties:

- Guid: Unique identifier of the parcel (Guid).
- Numero: Parcel number (string).
- Date: Date when the parcel was created or recorded (DateTime).
- CodeBarre: Barcode associated with the parcel (string).
- PrestataireId: Identifier of the logistic service provider responsible for the parcel (int).
- DatePrelevement: Date of parcel pickup, nullable (DateTime?).
- Poids: Weight of the parcel in grams (decimal).
- EstLivre: Indicates whether the parcel has been delivered (bool).
- BordereauGuid: Optional identifier of the shipping slip related to the parcel (Guid?).
- Nom: Name of recipient or parcel (string).
- Adresse: Delivery address (string).
- CodePostal: Postal code of the delivery address (string).
- Ville: City of the delivery address (string).
- BonPreparationGuid: Identifier for the preparation slip linked to the parcel (Guid).

This class inherits from DataObjectBase and encapsulates loading data logic with the FromDataRow method, which populates properties from a data row. It overrides GetKey to return the primary key (the Guid) and ToString for a human-readable parcel display.

### TypeScript class
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