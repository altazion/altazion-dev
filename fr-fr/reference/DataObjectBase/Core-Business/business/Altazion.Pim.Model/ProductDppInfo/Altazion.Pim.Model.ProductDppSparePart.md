## ProductDppSparePart

Cette classe représente une pièce détachée disponible pour un produit, associée à un snapshot DPP (Digital Product Passport). Elle est conforme aux exigences ESPR pour les catégories de produits soumises à l'obligation de réparabilité.

- PartNumber : Référence fabricant de la pièce.
- Name : Nom de la pièce détachée.
- Gtin : GTIN (Global Trade Item Number) de la pièce détachée, si elle est commercialisée indépendamment.
- AvailabilityYears : Durée de disponibilité garantie de la pièce après la mise sur le marché, exprimée en années.
- OrderUrl : URL vers la fiche produit ou le point de commande de la pièce détachée.

### D�claration TypeScript
```typescript
interface ProductDppSparePart {
  PartNumber: string;
  Name: string;
  Gtin: string;
  AvailabilityYears?: number | null;
  OrderUrl: string;
}
```