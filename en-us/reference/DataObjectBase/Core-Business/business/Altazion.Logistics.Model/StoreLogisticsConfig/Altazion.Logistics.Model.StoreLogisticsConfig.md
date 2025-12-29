## StoreLogisticsConfig

The StoreLogisticsConfig class represents the logistics configuration of a store, particularly for the Ship-From-Store functionality.

It includes the following public properties:

- StoreGuid: Unique identifier of the store (GUID).
- IsActiveForShipFromStore: Indicates whether the store is active for Ship-From-Store (boolean).
- ShipFromStorePreparationRate: Preparation rate related to Ship-From-Store, expressed as a percentage between 0 and 100 (nullable decimal).
- ShipFromStorePoints: Points assigned for Ship-From-Store, used in the selection algorithm or capacity (nullable integer).
- ShipFromStorePriority: Store's priority for Ship-From-Store; a higher number indicates higher priority (nullable integer).
- WarehouseRackingTemplateGuid: Identifier for the warehouse racking template associated (nullable GUID), used to aid picking operations.

This class allows configuring logistics parameters specific to each store concerning Ship-From-Store order processing.

### TypeScript class
```typescript
interface StoreLogisticsConfig {
  StoreGuid: string; // GUID of the store
  IsActiveForShipFromStore: boolean;
  ShipFromStorePreparationRate?: number | null; // Preparation rate percentage (0-100)
  ShipFromStorePoints?: number | null; // Points for selection/capacity
  ShipFromStorePriority?: number | null; // Priority of the store
  WarehouseRackingTemplateGuid?: string | null; // GUID of warehouse racking template
}
```