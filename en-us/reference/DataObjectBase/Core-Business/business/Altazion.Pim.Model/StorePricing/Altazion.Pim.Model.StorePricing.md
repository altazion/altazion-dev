## StorePricing

The StorePricing class represents a store-specific product pricing with a unique identifier.

Public properties:
- Guid: Unique identifier of the pricing.
- ProductGuid: Unique identifier of the product.
- StartDate: Start date of the price validity.
- EndDate: End date of the price validity.
- PriceExcludingTax: Unit price excluding tax.
- PriceIncludingTax: Unit price including tax.
- ReferencePriceIncludingTax: Reference price including tax (strikethrough price), optional.
- ReferencePriceExcludingTax: Reference price excluding tax (strikethrough price), optional.
- IsPromotion: Indicates if the price is a promotion.
- IsLocalOverride: Indicates if the price is a local override (store specific).
- Timestamp: Last modification timestamp for optimistic concurrency.
- StoreGuid: Unique identifier of the store; optional (null means global price).

This class inherits from StorePricingBase which holds properties related to dates, price, promotions, and store.

Important methods:
- GetKey(): returns the unique identifier Guid of the pricing.
- FromDataRow(DataRow dr): initializes properties from a data row.
- Validation: ensures that the validity period is coherent (EndDate >= StartDate).

### TypeScript class
```typescript
interface StorePricing {
  Guid: string; // Identifiant unique de la tarification
  ProductGuid: string; // Identifiant unique du produit
  StartDate: Date; // Date de début de validité du prix
  EndDate: Date; // Date de fin de validité du prix
  PriceExcludingTax: number; // Prix unitaire hors taxes
  PriceIncludingTax: number; // Prix unitaire TTC
  ReferencePriceIncludingTax?: number; // Prix de référence TTC (optionnel)
  ReferencePriceExcludingTax?: number; // Prix de référence HT (optionnel)
  IsPromotion: boolean; // Indique si c'est une promotion
  IsLocalOverride: boolean; // Indique un forçage local
  Timestamp: Uint8Array | null; // Timestamp de dernière modification
  StoreGuid?: string | null; // Identifiant du magasin (optionnel)
}
```