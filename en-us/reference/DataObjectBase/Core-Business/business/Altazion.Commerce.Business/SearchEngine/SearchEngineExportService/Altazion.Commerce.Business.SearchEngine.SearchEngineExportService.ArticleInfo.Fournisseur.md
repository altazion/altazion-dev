## Fournisseur

The Fournisseur class represents a supplier associated with an article in the context of the search engine export service.

Public properties:
- far_guid: Unique identifier (GUID) of the supplier.
- far_pu_ttc: Unit price including all taxes offered by the supplier for the article.

### TypeScript class
```typescript
interface Fournisseur {
  /** Unique identifier (GUID) of the supplier */
  far_guid: string;
  /** Unit price including all taxes offered by the supplier for the article */
  far_pu_ttc: number;
}
```