## ProductLogisticsInfoBase

The ProductLogisticsInfoBase class represents the basic logistics information of a product.

Public properties:
- FulfillmentTypeCode: code representing the type of logistic preparation, as a string.
- FulFillmentMandatoryZoneGuid: an optional unique identifier (GUID) for the mandatory logistics zone.

This class allows initializing its properties from a data row (DataRow), typically from a database, where the columns "log_type_prepa" and "log_zpr_guid_obligatoire" correspond to the fulfillment type code and the mandatory logistics zone respectively.

### TypeScript class
```typescript
interface ProductLogisticsInfoBase {
  /** Code of the logistic preparation type */
  FulfillmentTypeCode: string | null;
  /** Optional unique identifier (GUID) of the mandatory logistic zone */
  FulFillmentMandatoryZoneGuid: string | null; // GUID represented as string
}
```