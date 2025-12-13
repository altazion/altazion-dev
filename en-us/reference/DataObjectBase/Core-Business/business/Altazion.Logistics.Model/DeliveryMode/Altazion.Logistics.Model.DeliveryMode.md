## DeliveryMode

The DeliveryMode class represents a delivery method in the logistics system. It includes various properties defining its characteristics, constraints, and availability.

Public properties:

- Guid: Unique identifier of the delivery mode.
- ProviderId: Identifier of the associated provider.
- Order: Order or priority number.
- ProductGuid: Optional product identifier related to this mode.
- MaxVolume: Maximum volume allowed for the delivery.
- MaxWeight: Maximum weight allowed.
- MaxValue: Maximum monetary value allowed for the delivery.
- MaxHeight, MaxWidth, MaxDepth: Maximum allowed dimensions (height, width, depth).
- AllowsMultiplePackages: Indicates if multiple packages are allowed.
- IsExceptional: Indicates if the mode is exceptional.
- IsActive: Indicates if the mode is currently active.
- VolumeMargin: Margin to consider on volume.
- MaxDeveloped: Maximum developed dimension permitted.
- AverageDelay: Average delivery delay in days.
- IsDeliveryPoints: Indicates if this mode relates to delivery points.
- MinWeight: Minimum weight accepted.
- MaxNumberPerPeriod: Maximum number of deliveries allowed per period.
- PeriodType: Type of period (e.g., day, week) for the limitation.
- PeriodDuration: Duration of the period.
- SiteId: Associated site identifier.
- SiteValidationUrl: URL for validation on the site.
- MinValue: Minimum value required to use this mode.
- Label: Display label for this delivery mode.
- AverageCostTtc: Average cost including tax.
- AverageCostHt: Average cost excluding tax.
- IsAvailableEcommerce: Availability in e-commerce channels.
- IsAvailablePos: Availability at physical points of sale.
- IsAvailableClickAndMortar: Availability in click and mortar sales.
- Priority: Numerical priority.
- DeliveryType: Delivery type as string, replacing the enum TypeLivraison.
- IsArchived: Indicates if the mode is archived.
- PublicHtml: Public HTML content associated with this mode.

Constants defined (delivery type identifiers):
- DeliveryTypeHome = "DOMI" (home delivery)
- DeliveryTypeRelayPoint = "PTRL" (relay point delivery)
- DeliveryTypeStoreDelivery = "LMAG" (store delivery)
- DeliveryTypePickup = "RETR" (pickup)

The related enum TypeLivraison mirrors the constants with values:
DOMI, PTRL, LMAG, RETR.

### TypeScript class
```typescript
interface DeliveryMode {
    Guid: string;
    ProviderId: number;
    Order: number;
    ProductGuid?: string | null;
    MaxVolume?: number | null;
    MaxWeight?: number | null;
    MaxValue?: number | null;
    MaxHeight?: number | null;
    MaxWidth?: number | null;
    MaxDepth?: number | null;
    AllowsMultiplePackages: boolean;
    IsExceptional: boolean;
    IsActive: boolean;
    VolumeMargin?: number | null;
    MaxDeveloped?: number | null;
    AverageDelay?: number | null;
    IsDeliveryPoints: boolean;
    MinWeight: number;
    MaxNumberPerPeriod?: number | null;
    PeriodType?: string | null;
    PeriodDuration?: number | null;
    SiteId?: number | null;
    SiteValidationUrl?: string | null;
    MinValue: number;
    Label?: string | null;
    AverageCostTtc?: number | null;
    AverageCostHt?: number | null;
    IsAvailableEcommerce: boolean;
    IsAvailablePos: boolean;
    IsAvailableClickAndMortar: boolean;
    Priority: number;
    DeliveryType?: string | null;
    IsArchived: boolean;
    PublicHtml?: string | null;
}

// Constants for DeliveryType
const DeliveryTypeHome = "DOMI";
const DeliveryTypeRelayPoint = "PTRL";
const DeliveryTypeStoreDelivery = "LMAG";
const DeliveryTypePickup = "RETR";

// Enum equivalent in TypeScript
enum TypeLivraison {
    DOMI = "DOMI",
    PTRL = "PTRL",
    LMAG = "LMAG",
    RETR = "RETR"
}
```