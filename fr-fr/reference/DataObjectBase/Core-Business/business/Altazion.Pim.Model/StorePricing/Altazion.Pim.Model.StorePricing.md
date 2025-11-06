## StorePricing

La classe StorePricing représente une tarification de produit en magasin avec un identifiant unique.

Propriétés publiques:
- Guid: Identifiant unique de la tarification.
- ProductGuid: Identifiant unique du produit.
- StartDate: Date de début de validité du prix.
- EndDate: Date de fin de validité du prix.
- PriceExcludingTax: Prix unitaire hors taxes.
- PriceIncludingTax: Prix unitaire toutes taxes comprises.
- ReferencePriceIncludingTax: Prix de référence TTC (prix barré), optionnel.
- ReferencePriceExcludingTax: Prix de référence HT (prix barré), optionnel.
- IsPromotion: Indique si le prix est une promotion.
- IsLocalOverride: Indique si le prix est un forçage local (spécifique au magasin).
- Timestamp: Timestamp de dernière modification pour gestion concurrente.
- StoreGuid: Identifiant unique du magasin, optionnel (null pour prix global).

La classe hérite de StorePricingBase qui contient les propriétés liées aux dates, prix, promotions et magasin.

Méthodes importantes:
- GetKey(): retourne l'identifiant unique Guid de la tarification.
- FromDataRow(DataRow dr): initialise les propriétés à partir d'une ligne de données.
- Validation: contrôle que la période de validité est cohérente (EndDate >= StartDate).

### D�claration TypeScript
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