## ProductTax

The ProductTax class represents a tax associated with a product within the PIM (Product Information Management) system. It inherits from ProductTaxBase and adds one key property:

- ProductGuid: The unique identifier (GUID) of the product associated with the tax.

Inherited properties from ProductTaxBase include:

- Guid: The unique identifier of the tax object.
- TaxeDefinitionGuid: The unique identifier of the tax definition.
- Amount: The tax amount (decimal value).

The class also includes a validation method (OnValidate) that ensures the ProductGuid and TaxeDefinitionGuid are not empty GUIDs, validating the link to a product and a tax definition.

When initialized from a data row (DataRow), the ProductGuid is set as well.

In summary, ProductTax is a business object modeling a tax applied to a specific product with its amount, useful for tax management related to product catalog items.

### TypeScript class
```typescript
interface ProductTax {
  /** Unique identifier of the tax object */
  Guid: string;
  /** Unique identifier of the tax definition */
  TaxeDefinitionGuid: string;
  /** Amount of the tax */
  Amount: number;
  /** Unique identifier of the product associated with the tax */
  ProductGuid: string;
}
```