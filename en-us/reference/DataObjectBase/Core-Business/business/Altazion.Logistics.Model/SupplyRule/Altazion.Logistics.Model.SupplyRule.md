## SupplyRule

The SupplyRule class represents a supply rule that defines stock selection criteria.

Public properties:
- Id (Guid): Unique identifier of the rule.
- SupplySourceId (Guid): Unique identifier of the parent supply source.
- Label (string): Label of the rule.
- PreparationType (string): Preparation type associated with this rule.
- AvailabilityPriority (int): Availability priority (priority rank).
- AvailabilityThreshold (decimal?): Availability threshold quantity.
- IsOrderReserved (bool): Indicates whether the order is automatically reserved.
- StoreZoneGuid (Guid?): Unique identifier of the store zone.
- StoreType (string): Type of the store concerned.
- WarehouseGuid (Guid?): Unique identifier of the warehouse.
- LinkType (string): Type of link (mode of connection between sources).
- TopSupplierRank (int?): Maximum rank of suppliers to consider.
- Rank (int): Evaluation rank of this rule.
- CountryCode (string): Country code (ISO 3) for geographic filtering.
- MinimumElementsCount (int?): Minimum number of required elements.
- BrandGuid (Guid?): Unique identifier of the associated brand.

### TypeScript class
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