The CustomerType class represents a customer type with its specifications and metadata.

- Id: Unique identifier of the customer type (int).
- Label: Label of the customer type (string).
- MetaType: Metadata indicating the type of customer (string). For example, "I" for consumer, "E" for business, "N" for undefined.
- IsActive: Indicates if the customer type is active (bool).
- CanUseInvoicableElements: Indicates if the customer type can use invoicable elements (bool).
- EUSpecifics: EUSpecifications object containing specifications specific to the European Union.

Constants defined in the class:
- MetaUndefined: "N", indicates an undefined customer type.
- MetaTypeConsumer: "I", indicates a consumer customer type.
- MetaTypeEntreprise: "E", indicates a business customer type.

Nested class EUSpecifications:
- SalesAccountId: Identifier of the associated sales account (string).