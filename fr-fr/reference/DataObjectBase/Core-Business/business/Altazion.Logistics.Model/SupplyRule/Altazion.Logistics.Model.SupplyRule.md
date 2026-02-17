## SupplyRule

La classe SupplyRule représente une règle d'approvisionnement définissant les critères de sélection des stocks. Elle contient les propriétés suivantes :

- Id : Identifiant unique de la règle.
- SupplySourceId : Identifiant unique de la source d'approvisionnement parente.
- Label : Libellé de la règle.
- PreparationType : Type de préparation associé à cette règle.
- AvailabilityPercentage : Priorité de disponibilité (rang de priorité).
- AvailabilityThreshold : Quantité seuil de disponibilité (optionnelle).
- IsOrderReserved : Indique si la commande est réservée automatiquement.
- StoreZoneGuid : Identifiant unique de la zone magasin (optionnel).
- StoreType : Type de magasin concerné.
- WarehouseGuid : Identifiant unique du dépôt (optionnel).
- LinkType : Type de liaison (mode de connexion entre sources).
- TopSupplierRank : Rang maximum des fournisseurs à considérer (optionnel).
- Rank : Rang d'évaluation de cette règle.
- CountryCode : Code pays (ISO 3) pour filtrage géographique.
- MinimumElementsCount : Nombre minimum d'éléments requis (optionnel).
- StoreChainGuid : Identifiant unique de l'enseigne associée (optionnel).

Cette classe instancie une règle permettant de structurer l'approvisionnement selon divers critères tels que la source, la disponibilité, la localisation, le type de magasin ou encore la hiérarchie des fournisseurs.

### D�claration TypeScript
```typescript
interface SupplyRule {
  Id: string; // Unique identifier of the rule (GUID)
  SupplySourceId: string; // Unique identifier of the parent supply source (GUID)
  Label: string; // Label of the rule
  PreparationType: string; // Preparation type associated with this rule
  AvailabilityPercentage: number; // Priority rank for availability
  AvailabilityThreshold?: number | null; // Optional threshold quantity for availability
  IsOrderReserved: boolean; // Whether the order is automatically reserved
  StoreZoneGuid?: string | null; // Optional unique identifier of the store zone (GUID)
  StoreType: string; // Type of store concerned
  WarehouseGuid?: string | null; // Optional unique identifier of the warehouse (GUID)
  LinkType: string; // Type of connection/link between sources
  TopSupplierRank?: number | null; // Optional max rank of suppliers to consider
  Rank: number; // Evaluation rank of this rule
  CountryCode: string; // ISO 3 country code for geographic filtering
  MinimumElementsCount?: number | null; // Optional minimum number of items required
  StoreChainGuid?: string | null; // Optional unique identifier of the associated store chain (GUID)
}
```