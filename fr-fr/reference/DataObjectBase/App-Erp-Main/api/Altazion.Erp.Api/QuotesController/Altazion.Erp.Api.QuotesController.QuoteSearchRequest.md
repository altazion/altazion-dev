## QuoteSearchRequest

La classe QuoteSearchRequest représente les critères de recherche pour filtrer les devis (quotes) dans le système ERP. Elle contient les propriétés publiques suivantes :

- OnlyActive : booléen nullable indiquant si la recherche doit se limiter uniquement aux devis actifs.
- Origin : chaîne de caractères représentant l'origine ou la source du devis.
- CustomerId : entier nullable identifiant unique du client lié au devis.
- CustomerName : chaîne de caractères indiquant le nom du client.
- PostalCode : chaîne de caractères représentant le code postal du client ou du lieu.
- City : chaîne de caractères pour la ville concernée.
- Email : chaîne de caractères contenant l'email associé au client ou devis.
- MinDate : DateTimeOffset nullable spécifiant la date minimale pour filtrer les devis.
- MaxDate : DateTimeOffset nullable spécifiant la date maximale pour filtrer les devis.
- SearchText : chaîne de caractères pour une recherche libre ou texte général.
- PartnerGuid : Guid nullable pour identifier un partenaire spécifique lié au devis.

### D�claration TypeScript
```typescript
interface QuoteSearchRequest {
  OnlyActive?: boolean | null;
  Origin?: string | null;
  CustomerId?: number | null;
  CustomerName?: string | null;
  PostalCode?: string | null;
  City?: string | null;
  Email?: string | null;
  MinDate?: string | null; // ISO 8601 string format
  MaxDate?: string | null; // ISO 8601 string format
  SearchText?: string | null;
  PartnerGuid?: string | null; // GUID string format
}
```