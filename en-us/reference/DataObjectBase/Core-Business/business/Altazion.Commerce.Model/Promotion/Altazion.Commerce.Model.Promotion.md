## Promotion

The Promotion class represents a commercial promotion in the system.

Public properties:
- Guid: Unique identifier (GUID) of the promotion.
- Libelle: Label or name of the promotion.
- CampagneGuid: Unique identifier (GUID) of the campaign associated with the promotion.
- DateDebut: Start date and time when the promotion becomes valid.
- DateFin: End date and time of the promotion's validity.
- SiteId: Optional identifier of the site (store) concerned by the promotion.
- ArticleGuidAvantage: Unique identifier (GUID) of the article linked to the promotional advantage.
- TypePromotion: Type or category of the promotion as a string.
- EstArchive: Indicates whether the promotion is archived (boolean).

This class inherits from DataObjectBase and overrides the ToString() method to provide a simple string representation. It also implements the GetKey() method returning the primary key, which is the Guid.

Data loading from a data row (DataRow) occurs via the protected FromDataRow method.

### TypeScript class
```typescript
interface Promotion {
  Guid: string; // GUID unique identifier of the promotion
  Libelle: string; // Label or name of the promotion
  CampagneGuid: string; // GUID of the associated campaign
  DateDebut: string; // Start date with timezone (ISO 8601 string)
  DateFin: string; // End date with timezone (ISO 8601 string)
  SiteId?: number | null; // Optional site (store) identifier
  ArticleGuidAvantage: string; // GUID of the promotional article
  TypePromotion: string; // Type/category of promotion
  EstArchive: boolean; // Whether the promotion is archived
}
```