## Customer

Représente un client avec ses informations personnelles et professionnelles.

Propriétés publiques :
- Id : Identifiant unique du client.
- Guid : Identifiant global unique (GUID) du client.
- Name : Nom complet du client.
- StreetAddress : Adresse du client.
- PostalCode : Code postal du client.
- CountryCode : Code du pays du client.
- City : Ville du client.
- MainEmail : Adresse e-mail principale du client.
- Importance : Niveau d'importance du client.
- IsArchived : Indique si le client est archivé.
- CreationDate : Date de création du client.
- CustomerType : Type de client (par exemple, particulier ou entreprise).
- Phone : Numéro de téléphone du client.
- Mobile : Numéro de téléphone mobile du client.
- AccountingAccount : Compte comptable du client.
- LastName : Nom seul du client (sans prénom).
- FirstName : Prénom seul du client (sans nom).
- Title : Civilité du client (par exemple, M., Mme, Dr).
- EUSpecifications : Spécifications spécifiques à l'Union Européenne pour ce client.
- FranceSpecifications : Spécifications spécifiques à la France pour ce client.
- GermanySpecifications : Spécifications spécifiques à l'Allemagne pour ce client.
- SpainSpecifications : Spécifications spécifiques à l'Espagne pour ce client.
- ItalySpecifications : Spécifications spécifiques à l'Italie pour ce client.
- BelgiumSpecifications : Spécifications spécifiques à la Belgique pour ce client.
- NetherlandsSpecifications : Spécifications spécifiques aux Pays-Bas pour ce client.
- LuxembourgSpecifications : Spécifications spécifiques au Luxembourg pour ce client.
- SwitzerlandSpecifications : Spécifications spécifiques à la Suisse pour ce client.
- UKSpecifications : Spécifications spécifiques au Royaume-Uni pour ce client.
- paymentTermType : Définit le type de délai de paiement.
- PaymentTermDelay : Définit le délai de paiement en jours (en fonction du type).
- PreferredPaymentMethod : Méthode de paiement préférée du client.
- IsExemptFromLateFees : Permet d'exempter ce client des frais de retard.
- InvoiceToPartnerOnly : Permet de définir si la facturation doit être faite uniquement au partenaire lié au client.
- PartnerGuid : L'identifiant global unique (GUID) du partenaire associé au client, s'il y a lieu.

Constantes et énumérations déclarées:
- Enum PaymentTermType :
  * NextXDays : Un nombre de jours fixe après la date donnée, 0 pour facture due immédiatement (si date tombe un samedi ou dimanche, report au lundi).
  * XDaysThenEndOfMonth : Ajoute un délai fixe puis va jusqu'à la fin du mois (avec report au lundi si samedi/dimanche).
  * EndOfMonthPlusXDays : Va jusqu'à la fin du mois puis ajoute un délai fixe (avec report au lundi si samedi/dimanche).

Classes imbriquées décrivant des spécifications nationales/regionales :
- CustomerEUSpecifications : VatNumber, EORINumber, TaxExemptionReason.
- CustomerFranceSpecifications : SIRETNumber, SIRENNumber, APECode, ShareCapital, LegalForm, RCSNumber, RCSCity.
- CustomerGermanySpecifications : Handelsregisternummer.
- CustomerSpainSpecifications : CIF, CNAE.
- CustomerItalySpecifications : CodiceFiscale, RAE, ATECO.
- CustomerBelgiumSpecifications : BCENumber, NACE.
- CustomerNetherlandsSpecifications : KvKNummer, SBI.
- CustomerLuxembourgSpecifications : RCSNumber, NACE.
- CustomerSwitzerlandSpecifications : IDENumber, NOGA.
- CustomerUKSpecifications : CompanyNumber, SIC.

### D�claration TypeScript
```typescript
interface Customer {
  Id: number;
  Guid: string; // GUID as string
  Name: string | null;
  StreetAddress: string | null;
  PostalCode: string | null;
  CountryCode: string | null;
  City: string | null;
  MainEmail: string | null;
  Importance: number; // short
  IsArchived: boolean;
  CreationDate: string; // ISO date string
  CustomerType: number; // short
  Phone: string | null;
  Mobile: string | null;
  AccountingAccount: string | null;
  LastName: string | null;
  FirstName: string | null;
  Title: string | null;
  EUSpecifications?: CustomerEUSpecifications;
  FranceSpecifications?: CustomerFranceSpecifications;
  GermanySpecifications?: CustomerGermanySpecifications;
  SpainSpecifications?: CustomerSpainSpecifications;
  ItalySpecifications?: CustomerItalySpecifications;
  BelgiumSpecifications?: CustomerBelgiumSpecifications;
  NetherlandsSpecifications?: CustomerNetherlandsSpecifications;
  LuxembourgSpecifications?: CustomerLuxembourgSpecifications;
  SwitzerlandSpecifications?: CustomerSwitzerlandSpecifications;
  UKSpecifications?: CustomerUKSpecifications;
  paymentTermType: PaymentTermType;
  PaymentTermDelay: number;
  PreferredPaymentMethod: PaymentMethodKind;
  IsExemptFromLateFees: boolean;
  InvoiceToPartnerOnly: boolean;
  PartnerGuid?: string | null; // Nullable GUID
}

enum PaymentTermType {
  NextXDays = 0,
  XDaysThenEndOfMonth = 1,
  EndOfMonthPlusXDays = 3,
}

interface CustomerEUSpecifications {
  VatNumber?: string | null;
  EORINumber?: string | null;
  TaxExemptionReason?: string | null;
}

interface CustomerFranceSpecifications {
  SIRETNumber?: string | null;
  SIRENNumber?: string | null;
  APECode?: string | null;
  ShareCapital?: number | null;
  LegalForm?: string | null;
  RCSNumber?: string | null;
  RCSCity?: string | null;
}

interface CustomerGermanySpecifications {
  Handelsregisternummer?: string | null;
}

interface CustomerSpainSpecifications {
  CIF?: string | null;
  CNAE?: string | null;
}

interface CustomerItalySpecifications {
  CodiceFiscale?: string | null;
  RAE?: string | null;
  ATECO?: string | null;
}

interface CustomerBelgiumSpecifications {
  BCENumber?: string | null;
  NACE?: string | null;
}

interface CustomerNetherlandsSpecifications {
  KvKNummer?: string | null;
  SBI?: string | null;
}

interface CustomerLuxembourgSpecifications {
  RCSNumber?: string | null;
  NACE?: string | null;
}

interface CustomerSwitzerlandSpecifications {
  IDENumber?: string | null;
  NOGA?: string | null;
}

interface CustomerUKSpecifications {
  CompanyNumber?: string | null;
  SIC?: string | null;
}

enum PaymentMethodKind {
  // Placeholder - actual enum values not provided in the code snippet
}

```