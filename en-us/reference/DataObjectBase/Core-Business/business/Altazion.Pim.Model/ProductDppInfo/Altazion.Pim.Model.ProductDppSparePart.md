## ProductDppSparePart

This class represents a spare part available for a product, associated with a DPP (Digital Product Passport) snapshot. It complies with ESPR requirements for product categories subject to reparability obligations.

- PartNumber: Manufacturer's reference number for the spare part.
- Name: Name of the spare part.
- Gtin: GTIN (Global Trade Item Number) of the spare part if sold separately.
- AvailabilityYears: Guaranteed availability duration after market release, in years.
- OrderUrl: URL to the product sheet or ordering point for the spare part.

### TypeScript class
```typescript
interface ProductDppSparePart {
  PartNumber: string;
  Name: string;
  Gtin: string;
  AvailabilityYears?: number | null;
  OrderUrl: string;
}
```