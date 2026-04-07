## CustomerAddress

Cette classe représente une adresse client dans le système ERP d'Altazion, correspondant à la table gestcom_clients_adresses.

Propriétés publiques :
- AddressGuid : Identifiant unique (GUID) de l'adresse.
- CustomerGuid : GUID du client auquel l'adresse est associée.
- IsActive : Indique si l'adresse est active.
- Title : Civilité ou titre associé à l'adresse.
- Company : Nom de la société associée à l'adresse.
- FullName : Nom complet (propriété en lecture seule).
- FirstName : Prénom.
- LastName : Nom de famille.
- StreetAddress : Adresse postale.
- PostalCode : Code postal.
- City : Ville.
- CountryCode : Code pays.
- Phone : Numéro de téléphone.
- Email : Adresse email.
- IsBillingAddress : Indique si cette adresse est celle de facturation.
- SiteId : Identifiant du site lié.
- IsDefault : Indique si c'est l'adresse par défaut.
- Region : Région.
- IsTemporary : Indique si l'adresse est temporaire.
- Mobile : Numéro de téléphone mobile.

### D�claration TypeScript
```typescript
interface CustomerAddress {
  AddressGuid: string; // GUID
  CustomerGuid: string; // GUID
  IsActive: boolean;
  Title?: string | null;
  Company?: string | null;
  FullName?: string | null; // read-only
  FirstName?: string | null;
  LastName?: string | null;
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