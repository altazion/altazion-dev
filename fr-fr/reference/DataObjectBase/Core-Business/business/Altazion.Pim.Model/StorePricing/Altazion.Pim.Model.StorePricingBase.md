## StorePricingBase

La classe StorePricingBase représente une tarification de produit en magasin, incluant les prix et les périodes de validité.

Propriétés publiques :
- StartDate : DateTime - Date de début de validité du prix.
- EndDate : DateTime - Date de fin de validité du prix.
- PriceExcludingTax : decimal - Prix unitaire hors taxes.
- PriceIncludingTax : decimal - Prix unitaire toutes taxes comprises.
- ReferencePriceIncludingTax : decimal? - Prix de référence toutes taxes comprises (prix barré), optionnel.
- ReferencePriceExcludingTax : decimal? - Prix de référence hors taxes (prix barré), optionnel.
- IsPromotion : bool - Indique si ce prix correspond à une promotion.
- IsLocalOverride : bool - Indique si ce prix est un forçage local (spécifique au magasin).
- Timestamp : byte[] - Timestamp de dernière modification (optimistic concurrency).
- StoreGuid : Guid? - Identifiant unique du magasin (optionnel, null pour prix global).


### D�claration TypeScript
```typescript
interface StorePricingBase {
  StartDate: Date;
  EndDate: Date;
  PriceExcludingTax: number;
  PriceIncludingTax: number;
  ReferencePriceIncludingTax?: number | null;
  ReferencePriceExcludingTax?: number | null;
  IsPromotion: boolean;
  IsLocalOverride: boolean;
  Timestamp: Uint8Array | null;
  StoreGuid?: string | null;
}
```