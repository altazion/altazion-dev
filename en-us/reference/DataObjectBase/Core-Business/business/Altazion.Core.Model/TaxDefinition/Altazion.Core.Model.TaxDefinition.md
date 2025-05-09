The TaxDefinition class represents a tax definition. It defines the properties of a tax such as its unique identifier, label, whether it is a fixed amount, its rate, and whether it is included in the price.

Public properties:
- Guid: Unique identifier of the tax.
- Label: The displayed name or label of the tax.
- IsFixedAmount: Indicates if the tax is a fixed amount (true) or not (false).
- Rate: The tax rate, expressed as a decimal.
- IsIncludedInPrice: Indicates if the tax is included in the price (true) or added on top (false).