## ShippingProvider

The ShippingProvider class represents a shipping provider with its associated information.

Public properties:
- Id (int) : Unique identifier of the shipping provider.
- Label (string) : Name/label of the shipping provider.
- ManagerClass (string) : Management class associated with the provider.
- FixedDeliveryDate (DateTimeOffset?) : Fixed delivery date if applicable.
- ManifestType (char) : Type of manifest associated with the provider.
- IsArchived (bool) : Indicates whether the provider is archived.
- PickupDays (string) : Pickup days associated with the provider.
- TransitDays (string) : Transit days associated with the provider.
- DeliveryDays (string) : Delivery days associated with the provider.
- FixedPreparationDays (int?) : Fixed number of preparation days if applicable.
- TrackingUrl (string) : Delivery tracking URL.
- IsExceptional (bool) : Indicates if the provider is exceptional.
- FulfillmentTypeCode (string) : Code for the type of logistics fulfillment associated.
- Info (ShippingProviderInfo) : Additional information about the shipping provider.

Important methods:
- FromDataRow(DataRow dr) : Initializes properties from a data row.
- GetKey() : Gets the unique key of the object, here the provider's Id.

### TypeScript class
```typescript
interface ShippingProvider {
  Id: number;
  Label: string | null;
  ManagerClass: string | null;
  FixedDeliveryDate?: string | null; // ISO date string or null
  ManifestType: string; // char as string
  IsArchived: boolean;
  PickupDays: string | null;
  TransitDays: string | null;
  DeliveryDays: string | null;
  FixedPreparationDays?: number | null;
  TrackingUrl: string | null;
  IsExceptional: boolean;
  FulfillmentTypeCode: string | null;
  Info?: ShippingProviderInfo | null;
}
```