## Customer

La classe Customer représente un client avec ses informations personnelles et professionnelles. Elle contient les propriétés suivantes :

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
- EUSpecifications : Spécifications spécifiques à l'Union Européenne pour ce client (voir classe imbriquée CustomerEUSpecifications).
- FranceSpecifications : Spécifications spécifiques à la France (CustomerFranceSpecifications).
- GermanySpecifications : Spécifications spécifiques à l'Allemagne (CustomerGermanySpecifications).
- SpainSpecifications : Spécifications spécifiques à l'Espagne (CustomerSpainSpecifications).
- ItalySpecifications : Spécifications spécifiques à l'Italie (CustomerItalySpecifications).
- BelgiumSpecifications : Spécifications spécifiques à la Belgique (CustomerBelgiumSpecifications).
- NetherlandsSpecifications : Spécifications spécifiques aux Pays-Bas (CustomerNetherlandsSpecifications).
- LuxembourgSpecifications : Spécifications spécifiques au Luxembourg (CustomerLuxembourgSpecifications).
- SwitzerlandSpecifications : Spécifications spécifiques à la Suisse (CustomerSwitzerlandSpecifications).
- UKSpecifications : Spécifications spécifiques au Royaume-Uni (CustomerUKSpecifications).
- paymentTermType : Type de délai de paiement (enum PaymentTermType).
- PaymentTermDelay : Délai de paiement en jours.
- PreferredPaymentMethod : Méthode de paiement préférée (enum PaymentMethodKind).
- IsExemptFromLateFees : Exemption des frais de retard.
- InvoiceToPartnerOnly : Indique si la facturation doit être au partenaire uniquement.
- PartnerGuid : GUID du partenaire associé.

Constantes/énumérations définies :

- PaymentTermType : Enum définissant les types de délais de paiement :
  - NextXDays : délai fixe en jours après date donnée.
  - XDaysThenEndOfMonth : délai fixe puis fin du mois.
  - EndOfMonthPlusXDays : fin du mois puis délai fixe.

Les classes imbriquées correspondent aux spécifications fiscales ou légales par pays ou région.



### D�claration TypeScript
```typescript
interface Customer {
  Id: number;
  Guid: string; // GUID string
  Name: string;
  StreetAddress: string;
  PostalCode: string;
  CountryCode: string;
  City: string;
  MainEmail: string;
  Importance: number;
  IsArchived: boolean;
  CreationDate: Date;
  CustomerType: number;
  Phone: string;
  Mobile: string;
  AccountingAccount: string;
  LastName: string;
  FirstName: string;
  Title: string;
  EUSpecifications: CustomerEUSpecifications | null;
  FranceSpecifications: CustomerFranceSpecifications | null;
  GermanySpecifications: CustomerGermanySpecifications | null;
  SpainSpecifications: CustomerSpainSpecifications | null;
  ItalySpecifications: CustomerItalySpecifications | null;
  BelgiumSpecifications: CustomerBelgiumSpecifications | null;
  NetherlandsSpecifications: CustomerNetherlandsSpecifications | null;
  LuxembourgSpecifications: CustomerLuxembourgSpecifications | null;
  SwitzerlandSpecifications: CustomerSwitzerlandSpecifications | null;
  UKSpecifications: CustomerUKSpecifications | null;
  paymentTermType: PaymentTermType;
  PaymentTermDelay: number;
  PreferredPaymentMethod: PaymentMethodKind;
  IsExemptFromLateFees: boolean;
  InvoiceToPartnerOnly: boolean;
  PartnerGuid?: string | null;
}

enum PaymentTermType {
  NextXDays = 0,
  XDaysThenEndOfMonth = 1,
  EndOfMonthPlusXDays = 3
}

interface CustomerEUSpecifications {
  VatNumber: string;
  EORINumber: string;
  TaxExemptionReason: string;
}

interface CustomerFranceSpecifications {
  SIRETNumber: string;
  SIRENNumber: string;
  APECode: string;
  ShareCapital?: number | null;
  LegalForm: string;
  RCSNumber: string;
  RCSCity: string;
}

interface CustomerGermanySpecifications {
  Handelsregisternummer: string;
}

interface CustomerSpainSpecifications {
  CIF: string;
  CNAE: string;
}

interface CustomerItalySpecifications {
  CodiceFiscale: string;
  RAE: string;
  ATECO: string;
}

interface CustomerBelgiumSpecifications {
  BCENumber: string;
  NACE: string;
}

interface CustomerNetherlandsSpecifications {
  KvKNummer: string;
  SBI: string;
}

interface CustomerLuxembourgSpecifications {
  RCSNumber: string;
  NACE: string;
}

interface CustomerSwitzerlandSpecifications {
  IDENumber: string;
  NOGA: string;
}

interface CustomerUKSpecifications {
  CompanyNumber: string;
  SIC: string;
}

```