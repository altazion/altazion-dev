## ProductLogisticsInfo

The ProductLogisticsInfo class represents the detailed logistics information of a product within the Altazion system.

Public Properties:

- ProductGuid: Unique identifier of the product linked to the logistics information.
- FulfillmentTypeCode: Code representing the type of logistics preparation (optional, maximum 3 characters).
- FulFillmentMandatoryZoneGuid: Optional unique identifier of a mandatory logistics zone.

Description:
This class inherits from ProductLogisticsInfoBase, which already contains FulfillmentTypeCode and FulFillmentMandatoryZoneGuid. ProductLogisticsInfo adds the ProductGuid property, used as the unique key of the object. Internal validation ensures FulfillmentTypeCode does not exceed 3 characters. The GetKey() method returns ProductGuid to identify the instance.

It is decorated with the SqlDataConcept attribute indicating the related database table and concept.

### TypeScript class
```typescript
interface ProductLogisticsInfo {
  /** Unique identifier of the product associated with logistics info. */
  ProductGuid: string; // GUID represented as string
  /** Code representing the type of logistics preparation (optional, max length 3). */
  FulfillmentTypeCode?: string | null;
  /** Optional unique identifier of a mandatory logistics zone. */
  FulFillmentMandatoryZoneGuid?: string | null; // GUID as string or null
}
```