The FulfillmentType class represents a type of processing or fulfillment of orders.

Public properties:
- Id: Unique identifier of the fulfillment type.
- Code: Code of the fulfillment type.
- Label: Name or label of the fulfillment type.
- IsInternal: Indicates if the fulfillment type is internal.
- IsArchived: Indicates if the fulfillment type is archived.
- Kind: Type or category of the fulfillment (meta data).
- Priority: Priority of the fulfillment type.
- Description: Detailed description of the fulfillment type.
- FulfillmentDelayInDays: Standard fulfillment delay in days.
- DescriptionForCustomers: Public description intended for customers.

Main methods (not detailed here) provide the unique key (Id) and initialize properties from a data row.