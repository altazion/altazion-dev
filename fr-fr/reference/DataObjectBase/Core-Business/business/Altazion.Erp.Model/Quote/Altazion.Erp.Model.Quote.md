## Quote

La classe Quote représente un devis avec ses informations essentielles telles que l'identifiant unique, le numéro du devis, l'origine, la révision, et les données associées au client et aux montants. Elle inclut aussi les dates (création, expiration, acceptation, début et fin estimées et réelles) ainsi que les états associés au devis et à son édition. Les remises globales et totales hors taxes et TTC sont incluses, de même que les informations relatifs au client (nom, adresse, CP, ville, email).

Constantes définissant les états possibles du devis :
- EtatEnCours : "E" (en cours de rédaction)
- EtatValide : "V" (validé et envoyé)
- EtatArchive : "A" (archivé, refusé ou périmé)
- EtatFacture : "F" (transformé en facture)
- EtatPartiel : "P" (partiellement facturé)

Propriétés publiques détaillées :
- Id : identifiant unique du devis.
- Number : numéro du devis.
- Origin : origine/source de la demande du devis.
- NumberRevision : numéro de révision pour gestion des versions.
- CustomerId : identifiant numérique du client.
- AmountExcludingVat : montant total hors taxes.
- AmountWithVAT : montant total TTC.
- CreationDate : date de création du devis.
- AssociatedIdDocument : identifiant du document associé.
- ExpirationDate : date de fin de validité du devis.
- EditionState : état d'édition (ex: brouillon, finalisé).
- GlobalDiscountExcludingVAT : remise globale hors taxes.
- GlobalDiscountWithVAT : remise globale TTC.
- GlobalDiscountLabel : description libellé de la remise globale.
- TotalDiscountExcludingVAT : total des remises hors taxes.
- TotalDiscountWithVAT : total des remises TTC.
- CustomerName : nom du client.
- CustomerAddress : adresse du client.
- CustomerPostalCode : code postal du client.
- CustomerCity : ville du client.
- CustomerEmail : email du client.
- Status : état général du devis.
- ValidationCode : code de validation du devis.
- Label : libellé/titre du devis.
- AcceptanceDate : date d'acceptation par le client (nullable).
- AcceptanceSource : source/personne ayant accepté le devis.
- ProspectGuid : identifiant unique du prospect.
- EstimatedStartDate : date estimée de début de réalisation (nullable).
- EstimatedEndDate : date estimée de fin de réalisation (nullable).
- ActualDateStart : date réelle de début (nullable).
- ActualDateEnd : date réelle de fin (nullable).
- AcceptanceDocument : référence document d'acceptation.
- ContractGuid : identifiant unique du contrat associé.

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
  CreationDate: Date;
  AssociatedIdDocument: number;
  ExpirationDate: Date;
  EditionState: number; // byte represented as number
  GlobalDiscountExcludingVAT: number;
  GlobalDiscountWithVAT: number;
  GlobalDiscountLabel: string;
  TotalDiscountExcludingVAT: number;
  TotalDiscountWithVAT: number;
  CustomerName: string;
  CustomerAddress: string;
  CustomerPostalCode: string;
  CustomerCity: string;
  CustomerEmail: string;
  Status: string;
  ValidationCode: string;
  Label: string;
  AcceptanceDate?: Date | null;
  AcceptanceSource: string;
  ProspectGuid: string; // GUID
  EstimatedStartDate?: Date | null;
  EstimatedEndDate?: Date | null;
  ActualDateStart?: Date | null;
  ActualDateEnd?: Date | null;
  AcceptanceDocument: string;
  ContractGuid: string; // GUID
  // Constants for states
  static readonly EtatEnCours: "E";
  static readonly EtatValide: "V";
  static readonly EtatArchive: "A";
  static readonly EtatFacture: "F";
  static readonly EtatPartiel: "P";
}
```