## ProductLogisticsInfoBase

The `ProductLogisticsInfoBase` class represents the basic logistics information of a product.

Public properties:
- `FulfillmentTypeCode` (string): Code representing the type of logistics preparation.
- `FulFillmentMandatoryZoneGuid` (Guid?): Optional unique identifier for the mandatory logistics zone.

Important methods (not detailed here because inherited or overrides):
- `GetKey()` returns an empty string by default, representing the unique key of the object.
- `FromDataRow(DataRow dr)` initializes the object's properties from a data row, extracting "log_type_prepa" into `FulfillmentTypeCode` and "log_zpr_guid_obligatoire" into `FulFillmentMandatoryZoneGuid`.

### TypeScript class
```typescript
interface ProductLogisticsInfoBase {
  FulfillmentTypeCode?: string;
  FulFillmentMandatoryZoneGuid?: string; // GUID represented as string or null
}
```