## DeliveryMode

The DeliveryMode class represents a delivery mode linked to a provider. It includes the following properties:

- Guid: Unique identifier of the delivery mode.
- ProviderId: Identifier of the associated provider.
- Order: Order or ranking of the delivery mode.
- ProductGuid: Optional identifier of the related product.
- MaxVolume: Maximum allowed volume for delivery.
- MaxWeight: Maximum allowed weight.
- MaxValue: Maximum allowed parcel value.
- MaxHeight: Maximum allowed height.
- MaxWidth: Maximum allowed width.
- MaxDepth: Maximum allowed depth.
- AllowsMultiplePackages: Indicates if multiple packages are allowed.
- IsExceptional: Indicates if this mode is exceptional.
- IsActive: Indicates if this mode is active.
- VolumeMargin: Allowed volume margin.
- MaxDeveloped: Maximum allowed developed length.
- AverageDelay: Average delivery delay in days.
- IsDeliveryPoints: Indicates if it is a delivery point.
- MinWeight: Minimum accepted weight.
- MaxNumberPerPeriod: Maximum allowed number of deliveries per period.
- PeriodType: Type of period (e.g., day, week).
- PeriodDuration: Duration of the associated period.
- SiteId: Identifier of the related site.
- SiteValidationUrl: Validation URL related to the site.
- MinValue: Minimum accepted value.
- Label: Delivery mode label.
- AverageCostTtc: Average cost including tax.
- AverageCostHt: Average cost excluding tax.
- IsAvailableEcommerce: Availability for e-commerce.
- IsAvailablePos: Availability at point of sale.
- IsAvailableClickAndMortar: Availability for the "click and mortar" model.
- Priority: Priority level of the delivery mode.
- DeliveryType: Delivery type (e.g., DOMI, PTRL) as string.
- IsArchived: Indicates if this mode is archived.
- PublicHtml: Public HTML content associated.

Defined constants:
- DeliveryTypeHome: "DOMI"
- DeliveryTypeRelayPoint: "PTRL"
- DeliveryTypeStoreDelivery: "LMAG"
- DeliveryTypePickup: "RETR"

### TypeScript class
```typescript
interface DeliveryMode {
  Guid: string;
  ProviderId: number;
  Order: number;
  ProductGuid?: string;
  MaxVolume?: number;
  MaxWeight?: number;
  MaxValue?: number;
  MaxHeight?: number;
  MaxWidth?: number;
  MaxDepth?: number;
  AllowsMultiplePackages: boolean;
  IsExceptional: boolean;
  IsActive: boolean;
  VolumeMargin?: number;
  MaxDeveloped?: number;
  AverageDelay?: number;
  IsDeliveryPoints: boolean;
  MinWeight: number;
  MaxNumberPerPeriod?: number;
  PeriodType?: string;
  PeriodDuration?: number;
  SiteId?: number;
  SiteValidationUrl?: string;
  MinValue: number;
  Label?: string;
  AverageCostTtc?: number;
  AverageCostHt?: number;
  IsAvailableEcommerce: boolean;
  IsAvailablePos: boolean;
  IsAvailableClickAndMortar: boolean;
  Priority: number;
  DeliveryType?: string;
  IsArchived: boolean;
  PublicHtml?: string;
}

const DeliveryTypeHome = "DOMI";
const DeliveryTypeRelayPoint = "PTRL";
const DeliveryTypeStoreDelivery = "LMAG";
const DeliveryTypePickup = "RETR";
```