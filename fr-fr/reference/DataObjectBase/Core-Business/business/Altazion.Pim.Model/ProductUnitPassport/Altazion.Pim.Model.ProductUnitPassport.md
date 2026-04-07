## ProductUnitPassport

Cette classe représente le passeport numérique d'un exemplaire produit individuel, stocké dans la collection MongoDB correspondant.
Elle couvre la traçabilité unitaire (numéro de série ou de lot), l'historique de possession (livre de police) et l'historique de réparation, conformément aux exigences GS1 et ESPR.

Propriétés publiques :
- Id : Identifiant unique du passeport unitaire (clé MongoDB).
- ProductId : Identifiant du produit de référence (clé vers FullProduct.Id).
- Gtin : GTIN de l'exemplaire, utilisé pour une recherche directe sans charger FullProduct.
- SerialNumber : Numéro de série de l'exemplaire, renseigné si mode gestion stock par unité.
- BatchNumber : Numéro de lot de l'exemplaire, renseigné si mode gestion stock par lot.
- ManufactureDate : Date de fabrication de l'exemplaire.
- ManufactureSiteGln : GLN GS1 du site de fabrication.
- DppSnapshotId : Lien vers le ProductDppSnapshot applicable pour ce passeport.
- WarrantyActivationDate : Date d'activation de la garantie.
- WarrantyExpiryDate : Date d'expiration de la garantie.
- Status : Statut courant de l'exemplaire (enum ProductUnitStatus) avec valeur par défaut Active.
- ActiveRecall : Alerte de rappel active sur cet exemplaire, ou null si pas de rappel. Le rappel signifie que l'exemplaire est toujours en circulation mais doit être retourné.
- RepairHistory : Historique des réparations et interventions sur cet exemplaire.
- OwnershipHistory : Historique des transferts de possession (livre de police numérique).

Énumérations associées décrites dans le code (ProductUnitStatus et ProductUnitTransferType).

### D�claration TypeScript
```typescript
interface ProductUnitRepairEvent {
  Date: string; // DateOnly as ISO string
  RepairerName: string;
  Description: string;
  ReplacedComponents: string[];
}

interface ProductUnitOwnershipTransfer {
  TransferDate: string; // DateOnly as ISO string
  TransferType: ProductUnitTransferType;
  CedantGuid?: string | null; // GUID nullable
  CedantEncryptedData: string;
  AcquisitionPrice?: number | null;
  Currency: string;
  PaymentMethod: string;
  DocumentReference: string;
}

enum ProductUnitStatus {
  Active = 0,
  Recalled = 1,
  Scrapped = 2,
  Refurbished = 3,
  Lost = 4,
  Stolen = 5
}

enum ProductUnitTransferType {
  NewSale = 0,
  Resale = 1,
  CustomerReturn = 2,
  Donation = 3,
  LegalSeizure = 4,
  LossOrTheft = 5
}

interface ProductUnitActiveRecall {
  BatchNumber: string;
  DppSnapshotId?: string | null; // GUID nullable
  NotificationDate: string; // DateOnly as ISO string
}

interface ProductUnitPassport {
  Id: string; // GUID
  ProductId: string; // GUID
  Gtin: string;
  SerialNumber: string;
  BatchNumber: string;
  ManufactureDate?: string | null; // DateOnly nullable
  ManufactureSiteGln: string;
  DppSnapshotId?: string | null; // GUID nullable
  WarrantyActivationDate?: string | null; // DateOnly nullable
  WarrantyExpiryDate?: string | null; // DateOnly nullable
  Status: ProductUnitStatus;
  ActiveRecall?: ProductUnitActiveRecall | null;
  RepairHistory: ProductUnitRepairEvent[];
  OwnershipHistory: ProductUnitOwnershipTransfer[];
}
```