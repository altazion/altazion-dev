## InvoiceSearchRequest

Classe représentant une requête de recherche de factures clients.

Propriétés publiques :
- OnlyActive (bool?) : Indique si la recherche doit porter uniquement sur les factures actives.
- Origin (string) : Origine des factures à filtrer.
- CustomerId (int?) : Identifiant du client pour filtrer les factures.
- CustomerName (string) : Nom du client pour filtrer les factures.
- PostalCode (string) : Code postal pour rapprocher la localisation du client.
- City (string) : Ville pour la recherche géographique.
- Email (string) : Adresse e-mail associée aux factures ou clients.
- MinDate (DateTimeOffset?) : Date minimale de la facture pour filtrer.
- MaxDate (DateTimeOffset?) : Date maximale de la facture pour filtrer.
- SearchText (string) : Texte libre pour rechercher dans les factures.
- PartnerGuid (Guid?) : Identifiant unique d'un partenaire pour filtrage spécifique.

### D�claration TypeScript
```typescript
interface InvoiceSearchRequest {
  OnlyActive?: boolean;
  Origin?: string;
  CustomerId?: number;
  CustomerName?: string;
  PostalCode?: string;
  City?: string;
  Email?: string;
  MinDate?: string; // ISO 8601 date string
  MaxDate?: string; // ISO 8601 date string
  SearchText?: string;
  PartnerGuid?: string; // GUID string
}
```