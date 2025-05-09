## FulfillmentType

The FulfillmentType class represents a type of processing or fulfillment of orders in the system.

Public properties:

- Id (int): Unique identifier of the fulfillment type.
- Code (string): Code of the fulfillment type.
- Label (string): Label of the fulfillment type.
- IsInternal (bool): Indicates whether the fulfillment type is internal.
- IsArchived (bool): Indicates whether the fulfillment type is archived.
- Kind (string): Type or category of the fulfillment (metadata).
- Priority (int): Priority of the fulfillment type.
- Description (string): Description of the fulfillment type.
- FulfillmentDelayInDays (int): Standard completion delay in days.
- DescriptionForCustomers (string): Public description of the fulfillment type, intended for customers.

### TypeScript class
```json
export interface FulfillmentType {
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