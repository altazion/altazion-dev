## ECommerceListItem

La classe ECommerceListItem représente une ligne d'une liste e-commerce, correspondant à un article ajouté à la liste avec une quantité souhaitée et une quantité réalisée.

Propriétés publiques :
- Guid : Identifiant unique de la ligne de liste.
- ListGuid : Identifiant unique de la liste à laquelle appartient cette ligne.
- ProductGuid : Identifiant unique de l'article associé à cette ligne.
- Quantity : Quantité souhaitée pour cet article (décimal).
- QuantityRealized : Quantité déjà réalisée (achetée ou offerte) pour cet article (décimal).
- IsArchived : Indique si la ligne est archivée (booléen).

Cette classe inclut une validation des données pour s'assurer que les identifiants ne sont pas vides, que les quantités ne sont pas négatives, et que la quantité réalisée ne dépasse pas la quantité souhaitée.

### D�claration TypeScript
```typescript
interface ECommerceListItem {
  Guid: string; // Unique identifier of the list line
  ListGuid: string; // Unique identifier of the list
  ProductGuid: string; // Unique identifier of the product
  Quantity: number; // Desired quantity for the product
  QuantityRealized: number; // Realized quantity for the product
  IsArchived: boolean; // Whether the line is archived
}
```