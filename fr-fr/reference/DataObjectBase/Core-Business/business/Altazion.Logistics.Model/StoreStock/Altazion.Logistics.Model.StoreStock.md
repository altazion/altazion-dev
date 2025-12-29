## StoreStock

La classe StoreStock représente le stock d'un article dans un magasin spécifique. Elle contient les propriétés suivantes :

- Guid : Identifiant unique du stock.
- StoreGuid : Identifiant du magasin.
- ProductGuid : Identifiant de l'article.
- ProductVariantGuid : Identifiant optionnel de la variante de l'article.
- LastUpdateDate : Date de la dernière mise à jour du stock.
- Quantity : Quantité disponible (stock réel moins quantités retirées).
- UnitPrice : Prix unitaire de l'article dans ce magasin.
- IsAvailable : Indique si le stock est disponible à la vente.
- IsInStore : Indique si le stock est physiquement présent dans le magasin.
- ReservedQuantity : Quantité réservée pour des commandes en cours.
- AvailabilityThreshold : Seuil minimal déterminant la disponibilité du stock.
- ActualQuantity : Quantité réelle en stock (avant retrait).
- WithdrawnQuantity : Quantité retirée du stock (réservations, endommagés, etc.).
- AvailabilityCode : Code personnalisé indiquant la disponibilité (optionnel).

Chaque propriété correspond à une colonne dans la base de données et la classe assure la validation de cohérence simple (ex: non négativité des quantités et prix).

### D�claration TypeScript
```typescript
interface StoreStock {
  Guid: string; // Unique identifier of the stock (GUID format)
  StoreGuid: string; // Store identifier (GUID format)
  ProductGuid: string; // Product identifier (GUID format)
  ProductVariantGuid?: string | null; // Optional product variant identifier (GUID format)
  LastUpdateDate: string; // DateTime string representing last update date
  Quantity?: number | null; // Available quantity
  UnitPrice?: number | null; // Unit price in store
  IsAvailable: boolean; // Stock availability flag
  IsInStore: boolean; // Physical presence flag
  ReservedQuantity?: number | null; // Reserved quantity
  AvailabilityThreshold?: number | null; // Minimum quantity threshold
  ActualQuantity?: number | null; // Actual stock quantity
  WithdrawnQuantity?: number | null; // Withdrawn quantity
  AvailabilityCode?: string | null; // Custom availability code
}
```