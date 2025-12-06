## SupplyRule

La classe SupplyRule représente une règle d'approvisionnement qui définit les critères de sélection des stocks.

Propriétés publiques :
- Id (Guid) : Identifiant unique de la règle.
- SupplySourceId (Guid) : Identifiant unique de la source d'approvisionnement parente.
- Label (string) : Libellé de la règle.
- PreparationType (string) : Type de préparation associé à cette règle.
- AvailabilityPriority (int) : Priorité de disponibilité (rang de priorité).
- AvailabilityThreshold (decimal?) : Quantité seuil de disponibilité.
- IsOrderReserved (bool) : Indique si la commande est réservée automatiquement.
- StoreZoneGuid (Guid?) : Identifiant unique de la zone magasin.
- StoreType (string) : Type de magasin concerné.
- WarehouseGuid (Guid?) : Identifiant unique du dépôt.
- LinkType (string) : Type de liaison (mode de connexion entre sources).
- TopSupplierRank (int?) : Rang maximum des fournisseurs à considérer.
- Rank (int) : Rang d'évaluation de cette règle.
- CountryCode (string) : Code pays (ISO 3) pour filtrage géographique.
- MinimumElementsCount (int?) : Nombre minimum d'éléments requis.
- BrandGuid (Guid?) : Identifiant unique de l'enseigne associée.

### D�claration TypeScript
```typescript
interface SupplyRule {
  Id: string;  // Guid
  SupplySourceId: string;  // Guid
  Label: string;
  PreparationType: string;
  AvailabilityPriority: number;
  AvailabilityThreshold?: number;
  IsOrderReserved: boolean;
  StoreZoneGuid?: string;  // Guid or null
  StoreType: string;
  WarehouseGuid?: string;  // Guid or null
  LinkType: string;
  TopSupplierRank?: number;
  Rank: number;
  CountryCode: string;
  MinimumElementsCount?: number;
  BrandGuid?: string;  // Guid or null
}
```