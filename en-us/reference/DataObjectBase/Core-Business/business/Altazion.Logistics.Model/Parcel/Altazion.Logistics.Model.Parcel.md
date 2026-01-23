## Parcel

The Parcel class represents a package within the logistics system with all its associated information. Public properties include:

- Id: Unique identifier of the parcel (Guid).
- CreationDate: Parcel creation date (DateTimeOffset).
- ParcelNumber: Parcel number (string).
- Barcode: Parcel barcode (string).
- CarrierId: Carrier identifier (legacy primary key), nullable (int?).
- FulfillmentOrderGuid: Unique ID of the associated fulfillment order, nullable (Guid?).
- AfterSalesServiceGuid: Unique ID of the associated after-sales service case, nullable (Guid?).
- PickupDate: Date the carrier picked up the parcel, nullable (DateTimeOffset?).
- CarrierPickupBatchGuid: Unique ID of the associated pickup batch, nullable (Guid?).
- WeightInGrams: Weight of the parcel in grams (decimal).
- IsInError: Indicates if the parcel is in error state (bool).
- IsAcknowledged: Indicates if the parcel has been acknowledged by the carrier (bool).
- IsInDelivery: Indicates if the parcel is currently in delivery (bool).
- IsDelivered: Indicates if the parcel has been delivered (bool).
- IsReturning: Indicates if the parcel is being returned (bool).
- InformativeValue: Informative value of the parcel, nullable (decimal?).
- InsuredValue: Insured value of the parcel, nullable (decimal?).
- CashOnDeliveryAmount: Cash on delivery amount, nullable (decimal?).
- RecipientTitle: Recipient's title (string).
- RecipientName: Recipient's name (string).
- RecipientAddress: Recipient's address (string).
- RecipientZipCode: Recipient's postal code (string).
- RecipientCity: Recipient's city (string).
- RecipientCountryCode: Recipient's country code (ISO3, string).
- PickupPointGuid: Unique ID of the pickup point, nullable (Guid?).
- PreparationZoneGuid: Unique ID of the preparation zone, nullable (Guid?).
- LogisticsSessionGuid: Unique ID of the logistics session, nullable (Guid?).
- ShippingCost: Total cost of shipping including tax, nullable (decimal?).
- ShippingCostWOTax: Shipping cost without tax, nullable (decimal?).
- ReceptionDate: Date of parcel reception, nullable (DateTimeOffset?).
- ReceptionGuid: Unique ID of the associated reception, nullable (Guid?).
- TrackingUrl: URL to track the parcel (string).
- LabelUrl: URL of the parcel's label (string).
- ParcelTypeGuid: Unique ID of the parcel type, nullable (Guid?).
- LastVerificationDate: Date of last status verification, nullable (DateTimeOffset?).
- CarrierStatus: Status of the parcel according to the carrier (string).
- LastStatusMessage: Last status message from the carrier (string).
- AnomalyType: Type of anomaly detected (string).
- DeliveryDate: Actual delivery date, nullable (DateTimeOffset?).

This class models a full parcel record with tracking details, pricing info, delivery statuses and recipient information.

### TypeScript class
```typescript
interface Parcel {
  Id: string; // Guid
  CreationDate: string; // DateTimeOffset ISO string
  ParcelNumber: string | null;
  Barcode: string | null;
  CarrierId?: number;
  FulfillmentOrderGuid?: string;
  AfterSalesServiceGuid?: string;
  PickupDate?: string;
  CarrierPickupBatchGuid?: string;
  WeightInGrams: number;
  IsInError: boolean;
  IsAcknowledged: boolean;
  IsInDelivery: boolean;
  IsDelivered: boolean;
  IsReturning: boolean;
  InformativeValue?: number;
  InsuredValue?: number;
  CashOnDeliveryAmount?: number;
  RecipientTitle: string | null;
  RecipientName: string | null;
  RecipientAddress: string | null;
  RecipientZipCode: string | null;
  RecipientCity: string | null;
  RecipientCountryCode: string | null;
  PickupPointGuid?: string;
  PreparationZoneGuid?: string;
  LogisticsSessionGuid?: string;
  ShippingCost?: number;
  ShippingCostWOTax?: number;
  ReceptionDate?: string;
  ReceptionGuid?: string;
  TrackingUrl: string | null;
  LabelUrl: string | null;
  ParcelTypeGuid?: string;
  LastVerificationDate?: string;
  CarrierStatus: string | null;
  LastStatusMessage: string | null;
  AnomalyType: string | null;
  DeliveryDate?: string;
}
```