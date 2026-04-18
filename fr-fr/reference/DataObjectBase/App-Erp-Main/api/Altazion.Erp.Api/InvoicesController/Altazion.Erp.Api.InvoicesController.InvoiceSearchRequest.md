## InvoiceSearchRequest

Cette classe représente une requête de recherche pour des factures dans le système ERP d'Altazion.

Propriétés publiques :
- OnlyActive : bool? - Indique si la recherche doit se limiter aux factures actives uniquement.
- Origin : string - Permet de filtrer par origine/point de vente.
- CustomerId : int? - Identifiant numérique du client pour lequel rechercher les factures.
- CustomerName : string - Nom du client utilisé comme critère de recherche.
- PostalCode : string - Code postal associé au client pour affiner la recherche.
- City : string - Ville associée au client.
- Email : string - Email du client pour filtrer les factures.
- MinDate : DateTimeOffset? - Date minimale pour filtrer les factures (date de début).
- MaxDate : DateTimeOffset? - Date maximale pour filtrer les factures (date de fin).
- SearchText : string - Texte libre à utiliser pour la recherche dans les factures.
- PartnerGuid : Guid? - Identifiant unique du partenaire lié aux factures.

Cette classe sert à transmettre plusieurs critères possibles pour une recherche avancée de factures dans l'API.

### D�claration TypeScript
```typescript
interface InvoiceSearchRequest {
  OnlyActive?: boolean | null;
  Origin?: string | null;
  CustomerId?: number | null;
  CustomerName?: string | null;
  PostalCode?: string | null;
  City?: string | null;
  Email?: string | null;
  MinDate?: string | null; // ISO 8601 string for DateTimeOffset
  MaxDate?: string | null; // ISO 8601 string for DateTimeOffset
  SearchText?: string | null;
  PartnerGuid?: string | null; // GUID in string format
}
```