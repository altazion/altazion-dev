## ProductLogisticsInfoBase

The ProductLogisticsInfoBase class represents the basic logistics information of a product.

Public properties:
- FulfillmentTypeCode (string): Code of the logistics fulfillment type.
- FulFillmentMandatoryZoneGuid (Guid?): Unique identifier of the mandatory logistics zone.
- IsHighDemand (bool): Indicates if the product is high demand (e.g., Pokémon cards, game consoles, limited editions, etc.).

### TypeScript class
```typescript
interface ProductLogisticsInfoBase {
  FulfillmentTypeCode: string | null;
  FulFillmentMandatoryZoneGuid: string | null; // Guid represented as string or null
  IsHighDemand: boolean;
}
```