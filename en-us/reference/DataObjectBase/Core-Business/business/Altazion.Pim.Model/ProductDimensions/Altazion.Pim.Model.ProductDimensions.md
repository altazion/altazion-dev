## ProductDimensions

The `ProductDimensions` class represents the dimensions of a product with a unique identifier. It inherits from `ProductDimensionsBase`, which contains properties related to gross and net dimensions.

### Public properties:

- `ProductGuid`: Unique identifier of the product of type `Guid`.

- Inherits from `ProductDimensionsBase` which includes:
  - `NetHeight` (decimal?) : Net height of the product, nullable.
  - `NetWidth` (decimal?) : Net width of the product, nullable.
  - `NetLength` (decimal?) : Net length of the product, nullable.
  - `NetWeight` (decimal?) : Net weight of the product, nullable.
  - `NetVolume` (decimal?) : Net volume of the product, nullable.
  - `GrossHeight` (decimal) : Gross height of the product.
  - `GrossWidth` (decimal) : Gross width of the product.
  - `GrossLength` (decimal) : Gross length of the product.
  - `GrossWeight` (decimal) : Gross weight of the product.
  - `GrossVolume` (decimal) : Gross volume of the product.

### Description:

This class validates that all gross dimensions are non-negative as these are mandatory values, and net dimensions, if provided, must also be non-negative. The unique key of the object is the `ProductGuid`. The `FromDataRow` method initializes the property values from a data row, first retrieving the `ProductGuid` then calling the base method to fill in the dimension properties.

### TypeScript class
```typescript
interface ProductDimensions {
  ProductGuid: string; // Guid represented as string
  NetHeight?: number | null;
  NetWidth?: number | null;
  NetLength?: number | null;
  NetWeight?: number | null;
  NetVolume?: number | null;
  GrossHeight: number;
  GrossWidth: number;
  GrossLength: number;
  GrossWeight: number;
  GrossVolume: number;
}
```