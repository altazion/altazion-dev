## StorePricing

La classe StorePricing représente une tarification de produit en magasin avec un identifiant unique.

Propriétés publiques :

- Guid : Identifiant unique de la tarification.
- ProductGuid : Identifiant unique du produit.
- StoreGuid : Identifiant unique du magasin (optionnel, null signifie tarif global pour tous les magasins).
- StartDate : Date de début de validité du prix.
- EndDate : Date de fin de validité du prix.
- PriceExcludingTax : Prix unitaire hors taxes.
- PriceIncludingTax : Prix unitaire toutes taxes comprises.
- ReferencePriceIncludingTax : Prix de référence TTC (prix barré), optionnel.
- ReferencePriceExcludingTax : Prix de référence HT, optionnel.
- IsPromotion : Indique si ce prix est une promotion.
- IsLocalOverride : Indique si ce prix est un forçage local (spécifique au magasin).
- Timestamp : Timestamp de dernière modification pour gestion de concurrence optimiste.

La classe hérite de StorePricingBase, qui elle-même dérive de DataObjectBase. La validation assure que la période de validité est correcte (EndDate >= StartDate). L'identifiant unique de la tarification est la clé de l'objet.

Les données peuvent être initialisées depuis une DataRow pour faciliter la lecture depuis base de données.


### D�claration TypeScript
```typescript
interface StorePricing {
  Guid: string; // Unique identifier of the pricing (UUID string)
  ProductGuid: string; // Unique identifier of the product (UUID string)
  StoreGuid?: string | null; // Unique identifier of the store (UUID string), optional, null means global price
  StartDate: string; // Start date of the price validity period in ISO 8601 format
  EndDate: string; // End date of the price validity period in ISO 8601 format
  PriceExcludingTax: number; // Unit price excluding tax
  PriceIncludingTax: number; // Unit price including tax
  ReferencePriceIncludingTax?: number | null; // Reference price including tax (optional)
  ReferencePriceExcludingTax?: number | null; // Reference price excluding tax (optional)
  IsPromotion: boolean; // Whether price is promotional
  IsLocalOverride: boolean; // Whether price is a local override
  Timestamp?: Uint8Array | null; // Timestamp of last modification
}
```