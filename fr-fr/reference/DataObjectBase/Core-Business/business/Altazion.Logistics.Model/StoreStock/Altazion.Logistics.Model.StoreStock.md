## StoreStock

La classe StoreStock représente le stock d'un article dans un magasin spécifique.

Propriétés publiques :
- Guid : Identifiant unique du stock.
- StoreGuid : Identifiant du magasin où le stock est localisé.
- ProductGuid : Identifiant de l'article stocké.
- ProductVariantGuid : Identifiant optionnel de la variante de l'article.
- LastUpdateDate : Date de la dernière mise à jour du stock.
- Quantity : Quantité disponible (quantité réelle moins quantité retirée).
- UnitPrice : Prix unitaire de l'article dans ce magasin.
- IsAvailable : Indique si le stock est disponible à la vente.
- IsInStore : Indique si le stock est physiquement présent en magasin.
- ReservedQuantity : Quantité réservée pour des commandes en cours.
- AvailabilityThreshold : Seuil minimal de quantité avant que le stock soit considéré comme indisponible.
- ActualQuantity : Quantité réelle en stock avant retraits.
- WithdrawnQuantity : Quantité retirée du stock (articles réservés, endommagés, etc.).
- AvailabilityCode : Code personnalisé optionnel indiquant la disponibilité.

### D�claration TypeScript
```typescript
interface StoreStock {
  Guid: string; // Unique identifier of the stock
  StoreGuid: string; // Identifier of the store
  ProductGuid: string; // Identifier of the product
  ProductVariantGuid?: string | null; // Optional product variant identifier
  LastUpdateDate: string; // DateTimeOffset as ISO string
  Quantity?: number | null; // Available quantity
  UnitPrice?: number | null; // Unit price
  IsAvailable: boolean; // Availability status
  IsInStore: boolean; // Physical presence in store
  ReservedQuantity?: number | null; // Reserved quantity
  AvailabilityThreshold?: number | null; // Minimum availability threshold
  ActualQuantity?: number | null; // Actual stock quantity
  WithdrawnQuantity?: number | null; // Withdrawn quantity
  AvailabilityCode?: string | null; // Custom availability code
}
```