## WithdrawnStoreStock

Représente du stock retiré de la disponibilité dans un magasin pour diverses raisons (produit en démonstration, défectueux, erreur d'inventaire, etc.).

Propriétés :
- Guid : Identifiant unique du retrait de stock.
- ProductGuid : Identifiant de l'article retiré.
- StoreGuid : Identifiant du magasin concerné.
- UserGuid : Identifiant de l'utilisateur ayant effectué le retrait.
- LastUpdateDate : Date de dernière mise à jour du retrait.
- Quantity : Quantité retirée du stock disponible.
- Label : Libellé ou raison du retrait (ex : "Produit en démonstration", "Article défectueux").
- StartDate : Date de début du retrait (optionnelle, notamment pour les retraits temporaires).
- EndDate : Date de fin du retrait (optionnelle, après cette date le stock redevient disponible).

Cette classe permet de tracer et gérer les stocks retirés de la disponibilité dans un magasin.

### D�claration TypeScript
```typescript
interface WithdrawnStoreStock {
  Guid: string; // Unique identifier of the stock withdrawal (GUID)
  ProductGuid: string; // Identifier of the withdrawn product (GUID)
  StoreGuid: string; // Identifier of the concerned store (GUID)
  UserGuid: string; // Identifier of the user who performed the withdrawal (GUID)
  LastUpdateDate: string; // Date of last update of the withdrawal (ISO 8601 string)
  Quantity: number; // Quantity withdrawn from available stock
  Label: string; // Label or reason for the withdrawal
  StartDate?: string | null; // Optional start date of the withdrawal (ISO 8601 string or null)
  EndDate?: string | null; // Optional end date of the withdrawal (ISO 8601 string or null)
}
```