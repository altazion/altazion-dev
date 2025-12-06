## Parcel

The Parcel class represents a package including its delivery information, tracking, and recipient address.

Public properties:
- Id: Unique identifier of the parcel, Guid type.
- CreationDate: The creation date of the parcel, DateTimeOffset type.
- ParcelNumber: Package number, string type.
- Barcode: Barcode of the parcel, string type.
- CarrierId: Carrier identifier (legacy primary key), nullable int.
- FulfillmentOrderGuid: Unique identifier for the associated fulfillment order, nullable Guid.
- AfterSalesServiceGuid: Unique identifier for the associated after-sales service case, nullable Guid.
- PickupDate: Date of pickup by the carrier, nullable DateTimeOffset.
- CarrierPickupBatchGuid: Unique identifier for the associated carrier pickup batch, nullable Guid.
- WeightInGrams: Weight of the parcel in grams, decimal type.
- IsInError: Indicates if the parcel is in an error state, bool.
- IsAcknowledged: Indicates if the parcel has been acknowledged by the carrier, bool.
- IsInDelivery: Indicates if the parcel is currently in delivery, bool.
- IsDelivered: Indicates if the parcel has been delivered, bool.
- IsReturning: Indicates if the parcel is being returned, bool.
- InformativeValue: Informative value of the parcel, nullable decimal.
- InsuredValue: Insured value of the parcel, nullable decimal.
- CashOnDeliveryAmount: Amount for cash on delivery, nullable decimal.
- RecipientTitle: Recipient's title (string).
- RecipientName: Recipient's name (string).
- RecipientAddress: Recipient's address (string).
- RecipientZipCode: Recipient's postal code (string).
- RecipientCity: Recipient's city (string).
- RecipientCountryCode: Recipient's country code (ISO 3), string.
- PickupPointGuid: Unique identifier of the pickup point, nullable Guid.
- PreparationZoneGuid: Unique identifier of the preparation zone, nullable Guid.
- LogisticsSessionGuid: Unique identifier of the logistics session, nullable Guid.
- ShippingCost: Total cost including tax of shipping, nullable decimal.
- ShippingCostWOTax: Shipping cost excluding tax, nullable decimal.
- ReceptionDate: Date of parcel reception, nullable DateTimeOffset.
- ReceptionGuid: Unique identifier of the reception, nullable Guid.
- TrackingUrl: Tracking URL of the parcel, string.
- LabelUrl: URL for the parcel label, string.
- ParcelTypeGuid: Unique identifier of the parcel type, nullable Guid.
- LastVerificationDate: Date of the last status verification, nullable DateTimeOffset.
- CarrierStatus: Status of the parcel according to the carrier, string.
- LastStatusMessage: Last status message from the carrier, string.
- AnomalyType: Type of anomaly detected, string.

### TypeScript class
```typescript
interface Parcel {
  Id: string;
  CreationDate: string;
  ParcelNumber: string | null;
  Barcode: string | null;
  CarrierId?: number | null;
  FulfillmentOrderGuid?: string | null;
  AfterSalesServiceGuid?: string | null;
  PickupDate?: string | null;
  CarrierPickupBatchGuid?: string | null;
  WeightInGrams: number;
  IsInError: boolean;
  IsAcknowledged: boolean;
  IsInDelivery: boolean;
  IsDelivered: boolean;
  IsReturning: boolean;
  InformativeValue?: number | null;
  InsuredValue?: number | null;
  CashOnDeliveryAmount?: number | null;
  RecipientTitle: string | null;
  RecipientName: string | null;
  RecipientAddress: string | null;
  RecipientZipCode: string | null;
  RecipientCity: string | null;
  RecipientCountryCode: string | null;
  PickupPointGuid?: string | null;
  PreparationZoneGuid?: string | null;
  LogisticsSessionGuid?: string | null;
  ShippingCost?: number | null;
  ShippingCostWOTax?: number | null;
  ReceptionDate?: string | null;
  ReceptionGuid?: string | null;
  TrackingUrl: string | null;
  LabelUrl: string | null;
  ParcelTypeGuid?: string | null;
  LastVerificationDate?: string | null;
  CarrierStatus: string | null;
  LastStatusMessage: string | null;
  AnomalyType: string | null;
}
```