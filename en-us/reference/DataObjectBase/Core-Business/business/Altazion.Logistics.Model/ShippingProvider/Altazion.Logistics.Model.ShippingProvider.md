## ShippingProvider

The ShippingProvider class represents a shipping service provider with its associated information.

Public properties:

- Id: Unique identifier of the shipping provider.
- Label: Label/name of the shipping provider.
- ManagerClass: Management class associated with the provider.
- FixedDeliveryDate: Fixed delivery date, if applicable.
- ManifestType: Type of manifest associated with the provider.
- IsArchived: Indicates whether the provider is archived.
- PickupDays: Pickup days associated with the provider.
- TransitDays: Transit days associated with the provider.
- DeliveryDays: Delivery days associated with the provider.
- FixedPreparationDays: Number of fixed preparation days, if applicable.
- TrackingUrl: URL to track deliveries.
- IsExceptional: Indicates if the provider is exceptional.
- FulfillmentTypeCode: Code of the logistic fulfillment type associated with the provider.
- Info: Additional information on the shipping provider (object of type ShippingProviderInfo).

### TypeScript class
```typescript
interface ShippingProvider {
  Id: number;
  Label: string | null;
  ManagerClass: string | null;
  FixedDeliveryDate: Date | null;
  ManifestType: string; // single character
  IsArchived: boolean;
  PickupDays: string | null;
  TransitDays: string | null;
  DeliveryDays: string | null;
  FixedPreparationDays: number | null;
  TrackingUrl: string | null;
  IsExceptional: boolean;
  FulfillmentTypeCode: string | null;
  Info?: ShippingProviderInfo | null;
}
```