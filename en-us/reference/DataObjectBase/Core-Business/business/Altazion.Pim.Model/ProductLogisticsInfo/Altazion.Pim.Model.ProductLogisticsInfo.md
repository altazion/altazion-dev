## ProductLogisticsInfo

The ProductLogisticsInfo class represents the logistics information specific to a product, including the unique identifier of the product.

Public Properties:
- ProductGuid: Unique identifier (Guid) for the product associated with the logistics information.
- FulfillmentTypeCode: Optional string code for the type of logistics preparation, limited to 3 characters.
- FulFillmentMandatoryZoneGuid: Optional unique identifier (Guid?) of the mandatory logistics zone.
- IsHighDemand: Boolean indicating if the product is in high demand (examples: Pokémon cards, game consoles, limited editions).

This class inherits from ProductLogisticsInfoBase and adds product unique identifier management. It validates mainly that the FulfillmentTypeCode does not exceed 3 characters if provided, and provides a unique key based on ProductGuid.

Key methods and comments:
- GetKey(): returns the unique key of the product (ProductGuid).
- OnValidate(): validates that FulfillmentTypeCode, if set, is not longer than 3 characters.
- FromDataRow(DataRow dr): initializes properties from a data row, particularly ProductGuid, then calls the base method.

Inheritance:
- Inherits from ProductLogisticsInfoBase, which contains FulfillmentTypeCode, FulFillmentMandatoryZoneGuid, and IsHighDemand.

### TypeScript class
```typescript
interface ProductLogisticsInfo {
  ProductGuid: string; // GUID identifying the product uniquely
  FulfillmentTypeCode?: string | null; // Optional logistic preparation type code, max 3 chars
  FulFillmentMandatoryZoneGuid?: string | null; // Optional GUID for mandatory logistic zone
  IsHighDemand: boolean; // Whether the product is in high demand
}
```