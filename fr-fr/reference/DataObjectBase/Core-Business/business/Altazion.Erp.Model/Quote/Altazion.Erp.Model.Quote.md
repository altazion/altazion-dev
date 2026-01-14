## Quote

La classe `Quote` représente un devis commercial détaillé avec toutes ses informations essentielles concernant le client, les montants, les dates, et l'état de validation.

Constantes définissant les états possibles d'un devis :
- `EtatEnCours` : Le devis est en cours de rédaction.
- `EtatValide` : Le devis est validé et envoyé au client.
- `EtatArchive` : Le devis est archivé (refusé ou périmé).
- `EtatFacture` : Le devis a été transformé en facture.
- `EtatPartiel` : Le devis a été partiellement facturé.

Propriétés publiques :
- `Id` (decimal) : Identifiant unique du devis.
- `Number` (string) : Numéro du devis.
- `Origin` (string) : Origine ou source de la demande du devis.
- `NumberRevision` (int) : Numéro de révision pour gérer les versions successives.
- `CustomerId` (int) : Identifiant numérique du client.
- `AmountExcludingVat` (decimal) : Montant total hors taxes du devis.
- `AmountWithVAT` (decimal) : Montant total TTC du devis.
- `CreationDate` (DateTimeOffset) : Date de création du devis.
- `AssociatedIdDocument` (Int64) : Identifiant du document associé au devis.
- `ExpirationDate` (DateTimeOffset) : Date d'expiration ou de fin de validité du devis.
- `EditionState` (byte) : État d'édition du devis (ex: brouillon, finalisé).
- `GlobalDiscountExcludingVAT` (decimal) : Remise globale hors taxes appliquée au devis.
- `GlobalDiscountWithVAT` (decimal) : Remise globale TTC appliquée au devis.
- `GlobalDiscountLabel` (string) : Libellé ou description de la remise globale.
- `TotalDiscountExcludingVAT` (decimal) : Montant total des remises hors taxes (lignes + globale).
- `TotalDiscountWithVAT` (decimal) : Montant total des remises TTC (lignes + globale).
- `CustomerName` (string) : Nom du client.
- `CustomerAddress` (string) : Adresse du client (rue et numéro).
- `CustomerPostalCode` (string) : Code postal du client.
- `CustomerCity` (string) : Ville du client.
- `CustomerEmail` (string) : Email du client.
- `Status` (string) : État courant du devis (en cours, validé, archivé, facturé, partiel).
- `ValidationCode` (string) : Code de validation (pour validation en ligne par exemple).
- `Label` (string) : Libellé ou titre du devis.
- `AcceptanceDate` (DateTimeOffset?) : Date d'acceptation par le client (nullable).
- `AcceptanceSource` (string) : Source ou personne ayant accepté le devis.
- `ProspectGuid` (Guid) : Identifiant unique du prospect associé.
- `EstimatedStartDate` (DateTimeOffset?) : Date estimée de début de réalisation.
- `EstimatedEndDate` (DateTimeOffset?) : Date estimée de fin de réalisation.
- `ActualDateStart` (DateTimeOffset?) : Date réelle de début de réalisation.
- `ActualDateEnd` (DateTimeOffset?) : Date réelle de fin de réalisation.
- `AcceptanceDocument` (string) : Numéro ou référence du document d'acceptation (ex: bon de commande).
- `ContractGuid` (Guid) : Identifiant unique du contrat associé au devis.

### D�claration TypeScript
```typescript
interface Quote {
  // Constants for quote states
  EtatEnCours: string;  // "E" - In progress
  EtatValide: string;   // "V" - Validated
  EtatArchive: string;  // "A" - Archived
  EtatFacture: string;  // "F" - Invoiced
  EtatPartiel: string;  // "P" - Partially invoiced

  Id: number;  // Unique identifier of the quote
  Number: string;  // Quote number
  Origin: string;  // Origin/source of the quote
  NumberRevision: number;  // Revision number
  CustomerId: number;  // Numeric client ID
  AmountExcludingVat: number;  // Amount excluding VAT
  AmountWithVAT: number;  // Amount including VAT
  CreationDate: string;  // Creation date (ISO 8601 string)
  AssociatedIdDocument: number;  // Associated document ID
  ExpirationDate: string;  // Expiration/validity end date
  EditionState: number;  // Edition state
  GlobalDiscountExcludingVAT: number;  // Global discount excl. VAT
  GlobalDiscountWithVAT: number;  // Global discount incl. VAT
  GlobalDiscountLabel: string;  // Discount label
  TotalDiscountExcludingVAT: number;  // Total discount excl. VAT
  TotalDiscountWithVAT: number;  // Total discount incl. VAT
  CustomerName: string;  // Client name
  CustomerAddress: string;  // Client address
  CustomerPostalCode: string;  // Client postal code
  CustomerCity: string;  // Client city
  CustomerEmail: string;  // Client email
  Status: string;  // Quote status
  ValidationCode: string;  // Validation code
  Label: string;  // Quote label/title
  AcceptanceDate?: string;  // Acceptance date (nullable)
  AcceptanceSource: string;  // Source/person accepting
  ProspectGuid: string;  // Prospect unique ID (GUID)
  EstimatedStartDate?: string;  // Estimated start date
  EstimatedEndDate?: string;  // Estimated end date
  ActualDateStart?: string;  // Actual start date
  ActualDateEnd?: string;  // Actual end date
  AcceptanceDocument: string;  // Acceptance document ref
  ContractGuid: string;  // Contract unique ID (GUID)
}

// Constants values (can be set on the interface or externally)
const EtatEnCours = "E";
const EtatValide = "V";
const EtatArchive = "A";
const EtatFacture = "F";
const EtatPartiel = "P";
```