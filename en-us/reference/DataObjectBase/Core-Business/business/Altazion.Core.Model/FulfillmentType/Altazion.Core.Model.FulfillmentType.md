## FulfillmentType

Represents a fulfillment or order processing type.

Public properties:

- Id : Unique identifier of the fulfillment type.
- Code : Code of the fulfillment type.
- Label : Label or name of the fulfillment type.
- IsInternal : Indicates if the fulfillment type is internal.
- IsArchived : Indicates if the fulfillment type is archived.
- Kind : Type or category of fulfillment (metadata).
- Priority : Priority level of the fulfillment type.
- Description : Description of the fulfillment type.
- FulfillmentDelayInDays : Standard fulfillment delay in days.
- DescriptionForCustomers : Public description of the fulfillment type, intended for customers.

### TypeScript class
```typescript
interface FulfillmentType {
  Id: number;
  Code: string;
  Label: string;
  IsInternal: boolean;
  IsArchived: boolean;
  Kind: string;
  Priority: number;
  Description: string;
  FulfillmentDelayInDays: number;
  DescriptionForCustomers: string;
}
```