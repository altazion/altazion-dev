## CustomerAddress

La classe CustomerAddress représente une adresse liée à un client dans le système (correspondant à la table gestcom_clients_adresses).

Propriétés publiques :

- AddressGuid : Identifiant unique (GUID) de l'adresse.
- CustomerGuid : GUID du client associé.
- IsActive : Indique si l'adresse est active.
- Title : Civilité ou titre liée à l'adresse.
- Company : Nom de la société.
- FullName : Nom complet de la personne/entité.
- StreetAddress : Adresse postale.
- PostalCode : Code postal.
- City : Ville.
- CountryCode : Code pays.
- Phone : Numéro de téléphone.
- Email : Adresse email.
- IsBillingAddress : Indique si l'adresse sert pour la facturation.
- SiteId : Identifiant du site associé.
- IsDefault : Indique si l'adresse est l'adresse par défaut.
- Region : Région géographique.
- IsTemporary : Indique si l'adresse est temporaire.
- Mobile : Numéro de téléphone mobile.

Cette classe sert à stocker et manipuler toutes les informations nécessaires pour une adresse client avec ses différentes caractéristiques et son état.


### D�claration TypeScript
```typescript
interface CustomerAddress {
  AddressGuid: string; // GUID
  CustomerGuid: string; // GUID
  IsActive: boolean;
  Title?: string | null;
  Company?: string | null;
  FullName?: string | null;
  StreetAddress?: string | null;
  PostalCode?: string | null;
  City?: string | null;
  CountryCode?: string | null;
  Phone?: string | null;
  Email?: string | null;
  IsBillingAddress: boolean;
  SiteId: number;
  IsDefault: boolean;
  Region?: string | null;
  IsTemporary: boolean;
  Mobile?: string | null;
}
```