## ProductTaxBase

Class representing a tax associated with a product with its basic information.

Public properties :

- Guid : Unique identifier of the tax.
- TaxeDefinitionGuid : Unique identifier of the tax definition.
- Amount : Amount of the tax.

Description : This class holds the essential information of a tax linked to a product, such as its unique ID, reference to the tax definition, and the amount of tax applied.

### TypeScript class
```typescript
interface ProductTaxBase {
  /** Unique identifier of the tax. */
  Guid: string;
  /** Unique identifier of the tax definition. */
  TaxeDefinitionGuid: string;
  /** Amount of the tax. */
  Amount: number;
}
```