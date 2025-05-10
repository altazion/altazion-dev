## ProductLogisticsInfo

This class represents the logistics information of a product, including a unique identifier for the product.

Properties:
- ProductGuid: Unique identifier (GUID) of the product associated with the logistics information.
- FulfillmentTypeCode: Code of the type of logistics preparation.
- FulFillmentMandatoryZoneGuid: Unique identifier (GUID) of the mandatory logistics zone.

### TypeScript class
```typescript
interface ProductLogisticsInfo {
  ProductGuid: string; // GUID
  FulfillmentTypeCode: string | null;
  FulFillmentMandatoryZoneGuid: string | null; // GUID
}
```