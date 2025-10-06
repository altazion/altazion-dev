## Quote

La classe `Quote` représente un devis dans le système ERP d'Altazion. Elle contient les propriétés principales suivantes :

- `Id` : Identifiant unique du devis (type decimal).
- `Number` : Numéro du devis (type string).
- `Origin` : Origine du devis (type string).
- `NumberRevision` : Numéro de la révision du devis (type int).
- `CustomerId` : Identifiant numérique du client associé au devis (type int).
- `AmountExcludingVat` : Montant du devis hors TVA (type decimal).
- `AmountWithVAT` : Montant TTC du devis (type decimal).
- `CreationDate` : Date de création du devis (type DateTime).
- `AssociatedIdDocument` : Identifiant du document associé (type Int64).
- `ExpirationDate` : Date d'expiration du devis (type DateTime).
- `EditionState` : État de l'édition du devis (type byte).
- `GlobalDiscountExcludingVAT` : Remise globale hors TVA appliquée au devis (type decimal).
- `GlobalDiscountWithVAT` : Remise globale TTC appliquée au devis (type decimal).
- `GlobalDiscountLabel` : Libellé de la remise globale (type string).
- `TotalDiscountExcludingVAT` : Remise totale hors TVA (type decimal).
- `TotalDiscountWithVAT` : Remise totale TTC (type decimal).
- `ClientName` : Nom du client (type string).
- `ClientAddress` : Adresse du client (type string).
- `ClientCP` : Code postal du client (type string).
- `ClientCity` : Ville du client (type string).
- `ClientEmail` : Email du client (type string).
- `State` : État courant du devis (type string).
- `ValidationCode` : Code de validation du devis (type string).
- `Label` : Libellé ou titre du devis (type string).
- `AcceptanceDate` : Date d'acceptation du devis, nullable (type DateTime?).
- `AcceptanceSource` : Source ou personne ayant accepté le devis (type string).
- `ProspectGuid` : Identifiant unique global (GUID) du prospect (type Guid).
- `EstimatedStartDate` : Date estimée de début (type DateTime?).
- `EstimatedEndDate` : Date estimée de fin (type DateTime?).
- `ActualDateStart` : Date réelle de début (type DateTime?).
- `ActualDateEnd` : Date réelle de fin (type DateTime?).
- `AcceptanceDocument` : Document justificatif d'acceptation (type string).
- `ContractGuid` : Identifiant unique global (GUID) du contrat associé (type Guid).

Constantes définissant les états possibles du devis :
- `EtatEnCours` = "E" (en cours)
- `EtatValide` = "V" (validé)
- `EtatArchive` = "A" (archivé)
- `EtatFacture` = "F" (facturé)
- `EtatPartiel` = "P" (partiel)

Cette classe sert à gérer toutes les informations relatives aux devis dans l'ERP, incluant les montants, les dates importantes, les informations client et les remises appliquées.

### D�claration TypeScript
```typescript
interface Quote {
  Id: number;
  Number: string;
  Origin: string;
  NumberRevision: number;
  CustomerId: number;
  AmountExcludingVat: number;
  AmountWithVAT: number;
  CreationDate: string; // ISO date string
  AssociatedIdDocument: number;
  ExpirationDate: string; // ISO date string
  EditionState: number;
  GlobalDiscountExcludingVAT: number;
  GlobalDiscountWithVAT: number;
  GlobalDiscountLabel: string;
  TotalDiscountExcludingVAT: number;
  TotalDiscountWithVAT: number;
  ClientName: string;
  ClientAddress: string;
  ClientCP: string;
  ClientCity: string;
  ClientEmail: string;
  State: string;
  ValidationCode: string;
  Label: string;
  AcceptanceDate?: string; // ISO date string or null
  AcceptanceSource: string;
  ProspectGuid: string;
  EstimatedStartDate?: string; // ISO date string or null
  EstimatedEndDate?: string; // ISO date string or null
  ActualDateStart?: string; // ISO date string or null
  ActualDateEnd?: string; // ISO date string or null
  AcceptanceDocument: string;
  ContractGuid: string;
}

// Constants for quote states
const EtatEnCours = "E";
const EtatValide = "V";
const EtatArchive = "A";
const EtatFacture = "F";
const EtatPartiel = "P";
```