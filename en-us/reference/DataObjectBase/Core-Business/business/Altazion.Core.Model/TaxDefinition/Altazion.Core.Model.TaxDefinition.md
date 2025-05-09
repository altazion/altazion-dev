## TaxDefinition

The TaxDefinition class represents a tax definition. It is used to define the properties of a tax such as whether it is a fixed amount, its rate, and whether it is included in the price.

Public properties:
- Guid: Unique identifier of the tax of type Guid.
- Label: Label or name of the tax of type string.
- IsFixedAmount: Indicates if the tax is a fixed amount (true) or a percentage (false).
- Rate: Rate or amount of the tax of type decimal.
- IsIncludedInPrice: Indicates whether the tax is included in the price (true) or not.

### TypeScript class
```json
interface TaxDefinition {
  Guid: string; // GUID as string
  Label: string;
  IsFixedAmount: boolean;
  Rate: number;
  IsIncludedInPrice: boolean;
}
```