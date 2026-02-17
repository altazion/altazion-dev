## SupplyRule

The SupplyRule class represents a supply rule that defines the criteria for stock selection. It contains the following properties:

- Id: Unique identifier of the rule.
- SupplySourceId: Unique identifier of the parent supply source.
- Label: Label of the rule.
- PreparationType: Preparation type associated with this rule.
- AvailabilityPercentage: Availability priority (priority rank).
- AvailabilityThreshold: Availability threshold quantity (optional).
- IsOrderReserved: Indicates whether the order is automatically reserved.
- StoreZoneGuid: Unique identifier of the store zone (optional).
- StoreType: Type of store concerned.
- WarehouseGuid: Unique identifier of the warehouse (optional).
- LinkType: Type of link (connection mode between sources).
- TopSupplierRank: Maximum rank of suppliers to consider (optional).
- Rank: Evaluation rank of this rule.
- CountryCode: Country code (ISO 3) for geographic filtering.
- MinimumElementsCount: Minimum number of required elements (optional).
- StoreChainGuid: Unique identifier of the associated store chain (optional).

This class defines a rule that structures supply management based on various criteria such as source, availability, location, store type, and supplier hierarchy.

### TypeScript class
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