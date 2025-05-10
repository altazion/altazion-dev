## ProductTax

The ProductTax class represents a tax linked to a specific product. It inherits from ProductTaxBase, which holds the basic tax information.

Public properties:
- ProductGuid: Unique identifier of the product associated with the tax.
- Guid: Unique identifier of the tax (inherited from ProductTaxBase).
- TaxeDefinitionGuid: Unique identifier of the tax definition (inherited from ProductTaxBase).
- Amount: Amount of the tax (inherited from ProductTaxBase).

### TypeScript class
```typescript
interface ProductTax {
  ProductGuid: string; // Unique identifier of the associated product
  Guid: string; // Unique identifier of the tax
  TaxeDefinitionGuid: string; // Unique identifier of the tax definition
  Amount: number; // Amount of the tax
}
```