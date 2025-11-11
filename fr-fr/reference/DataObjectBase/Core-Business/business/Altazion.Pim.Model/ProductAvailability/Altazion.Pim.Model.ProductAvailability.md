## ProductAvailability

Représente les disponibilités consolidées d'un article. Cette classe regroupe les informations d'agrégation liées aux stocks, aux commandes fournisseurs et aux fabrications.

Propriétés publiques :
- ProductGuid : Identifiant unique de l'article (type Guid).
- InStock : Quantité actuellement disponible en stock (type decimal).
- ReservedStock : Quantité en stock qui est réservée (type decimal).
- IncomingStock : Quantité en cours d'entrée en stock (type decimal).
- InManufacturing : Quantité en cours de fabrication (type decimal).
- ManufacturingPossible : Quantité qui peut encore être fabriquée (type decimal).
- SupplierAvailable : Quantité disponible chez les fournisseurs (type decimal).
- SupplierReserved : Quantité réservée chez les fournisseurs (type decimal).
- SupplierUnder15Days : Quantité disponible chez les fournisseurs sous 15 jours (type decimal).
- SupplierUnder30Days : Quantité disponible chez les fournisseurs sous 30 jours (type decimal).
- StoreAvailable : Quantité disponible en magasin (type decimal).
- SupplySourceGuid : Identifiant optionnel de la source d'approvisionnement associée (type Guid?).

### D�claration TypeScript
```typescript
export interface ProductAvailability {
  ProductGuid: string; // Unique identifier of the product
  InStock: number; // Quantity currently available in stock
  ReservedStock: number; // Quantity in stock that is reserved
  IncomingStock: number; // Quantity currently incoming to stock
  InManufacturing: number; // Quantity currently in manufacturing
  ManufacturingPossible: number; // Quantity that can still be manufactured
  SupplierAvailable: number; // Quantity available from suppliers
  SupplierReserved: number; // Quantity reserved at suppliers
  SupplierUnder15Days: number; // Quantity available from suppliers within 15 days
  SupplierUnder30Days: number; // Quantity available from suppliers within 30 days
  StoreAvailable: number; // Quantity available in store
  SupplySourceGuid?: string | null; // Optional supply source identifier
}
```