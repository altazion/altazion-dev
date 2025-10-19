## Customer

Cette classe représente un client avec ses informations personnelles et professionnelles. Elle contient les propriétés publiques suivantes :

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
- CustomerType : Type de client (ex. particulier ou entreprise).
- Phone : Numéro de téléphone du client.
- Mobile : Numéro de téléphone mobile du client.
- AccountingAccount : Compte comptable du client.
- LastName : Nom seul du client.
- FirstName : Prénom seul du client.
- Title : Civilité du client (ex. M., Mme, Dr).
- EUSpecifications : Spécifications spécifiques à l'Union Européenne (numéro de TVA, numéro EORI, motif d'exonération de TVA).
- FranceSpecifications : Spécifications spécifiques à la France (SIRET, SIREN, APE/NAF, capital social, forme juridique, RCS numéro et ville).
- paymentTermType : Définit le type de délai de paiement (enumeration avec NextXDays, XDaysThenEndOfMonth, EndOfMonthPlusXDays).
- PaymentTermDelay : Délai de paiement en jours.
- PreferredPaymentMethod : Méthode de paiement préférée du client.
- IsExemptFromLateFees : Exemption des frais de retard.
- InvoiceToPartnerOnly : Facturation uniquement au partenaire lié.
- PartnerGuid : GUID du partenaire associé si applicable.

La classe définit également une énumération interne PaymentTermType décrivant les types de délais de paiement possibles (avec la gestion des dates tombant le weekend).

Deux classes internes décrivent les spécifications EU (CustomerEUSpecifications) et France (CustomerFranceSpecifications) avec leurs propriétés spécifiques.

Cette classe dérive de DataObjectBase et possède des méthodes pour charger ses données depuis une DataRow et vérifier l'égalité basée sur l'Id.


### D�claration TypeScript
```typescript
interface CustomerEUSpecifications {
    VatNumber?: string;
    EORINumber?: string;
    TaxExemptionReason?: string;
}

interface CustomerFranceSpecifications {
    SIRETNumber?: string;
    SIRENNumber?: string;
    APECode?: string;
    ShareCapital?: number | null;
    LegalForm?: string;
    RCSNumber?: string;
    RCSCity?: string;
}

enum PaymentTermType {
    NextXDays = 0,
    XDaysThenEndOfMonth = 1,
    EndOfMonthPlusXDays = 3
}

enum PaymentMethodKind {
    // Assuming placeholder values for PaymentMethodKind as the source is not given
    Unknown = 0,
    CreditCard = 1,
    BankTransfer = 2,
    Cash = 3
}

interface Customer {
    Id: number;
    Guid: string; // GUID as string
    Name?: string;
    StreetAddress?: string;
    PostalCode?: string;
    CountryCode?: string;
    City?: string;
    MainEmail?: string;
    Importance: number;
    IsArchived: boolean;
    CreationDate: Date;
    CustomerType: number;
    Phone?: string;
    Mobile?: string;
    AccountingAccount?: string;
    LastName?: string;
    FirstName?: string;
    Title?: string;
    EUSpecifications?: CustomerEUSpecifications;
    FranceSpecifications?: CustomerFranceSpecifications;
    paymentTermType: PaymentTermType;
    PaymentTermDelay: number;
    PreferredPaymentMethod: PaymentMethodKind;
    IsExemptFromLateFees: boolean;
    InvoiceToPartnerOnly: boolean;
    PartnerGuid?: string | null;
}
```