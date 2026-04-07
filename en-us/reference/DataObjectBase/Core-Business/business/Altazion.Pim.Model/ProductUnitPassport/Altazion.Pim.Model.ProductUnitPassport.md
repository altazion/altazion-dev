## ProductUnitPassport

This class represents the digital passport of an individual product unit, stored in the corresponding MongoDB collection.
It covers unit traceability (serial number or batch number), possession history (digital police book), and repair history, conforming to GS1 and ESPR requirements.

Public properties:
- Id: Unique identifier of the unit passport (MongoDB key).
- ProductId: Identifier of the reference product (key to FullProduct.Id).
- Gtin: GTIN of the unit, used for direct lookup without loading FullProduct.
- SerialNumber: Serial number of the unit, set if stock management mode is by unit identifier.
- BatchNumber: Batch number of the unit, set if stock management mode is by batch number.
- ManufactureDate: Manufacturing date of the unit.
- ManufactureSiteGln: GS1 GLN of the manufacturing site.
- DppSnapshotId: Link to the applicable ProductDppSnapshot.
- WarrantyActivationDate: Warranty start date.
- WarrantyExpiryDate: Warranty expiry date.
- Status: Current status of the unit (ProductUnitStatus enum) defaulting to Active.
- ActiveRecall: Active recall alert on this unit or null if none. When set, the unit is in circulation but must be returned.
- RepairHistory: History of repairs and interventions on this unit.
- OwnershipHistory: History of ownership transfers (digital police book).

Related enums ProductUnitStatus and ProductUnitTransferType are defined and described separately.

### TypeScript class
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