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
- VatNumber : Numéro de TVA du client.
- LastName : Nom seul du client (sans prénom).
- FirstName : Prénom seul du client (sans nom).
- Title : Civilité du client (par exemple, M., Mme, Dr).

### D�claration TypeScript
```json
interface Customer {
  Id: number;
  Guid: string; // GUID represented as string
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
  VatNumber: string;
  LastName: string;
  FirstName: string;
  Title: string;
}
```