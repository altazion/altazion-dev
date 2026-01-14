## StorePricingBase

La classe StorePricingBase représente une tarification de produit en magasin, incluant les prix et les périodes de validité.

Propriétés publiques :
- StartDate : DateTimeOffset - Date de début de validité du prix.
- EndDate : DateTimeOffset - Date de fin de validité du prix.
- PriceExcludingTax : decimal - Prix unitaire hors taxes.
- PriceIncludingTax : decimal - Prix unitaire toutes taxes comprises.
- ReferencePriceIncludingTax : decimal? - Prix de référence toutes taxes comprises (prix barré), optionnel.
- ReferencePriceExcludingTax : decimal? - Prix de référence hors taxes (prix barré), optionnel.
- IsPromotion : bool - Indique si ce prix correspond à une promotion.
- IsLocalOverride : bool - Indique si ce prix est un forçage local (spécifique au magasin).
- Timestamp : byte[] - Timestamp de dernière modification pour gestion de concurrence optimiste.
- StoreGuid : Guid? - Identifiant unique du magasin (optionnel, null pour prix global).

Cette classe contient également des méthodes protégées pour initialiser les propriétés à partir d'une ligne DataRow et pour valider les données de tarification (par ex. vérification que EndDate n'est pas antérieure à StartDate).

### D�claration TypeScript
```typescript
interface StorePricingBase {
  StartDate: string; // DateTimeOffset represented as ISO string
  EndDate: string;
  PriceExcludingTax: number;
  PriceIncludingTax: number;
  ReferencePriceIncludingTax?: number | null;
  ReferencePriceExcludingTax?: number | null;
  IsPromotion: boolean;
  IsLocalOverride: boolean;
  Timestamp?: Uint8Array | null;
  StoreGuid?: string | null; // GUID as string
}
```