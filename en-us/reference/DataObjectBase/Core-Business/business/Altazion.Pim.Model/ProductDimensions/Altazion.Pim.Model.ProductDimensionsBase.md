## ProductDimensionsBase

The ProductDimensionsBase class represents product dimensions, including both net (optional) and gross (mandatory) dimensions.

Public properties:
- NetHeight: Net height of the product (nullable decimal).
- NetWidth: Net width of the product (nullable decimal).
- NetLength: Net length of the product (nullable decimal).
- NetWeight: Net weight of the product (nullable decimal).
- NetVolume: Net volume of the product (nullable decimal).
- GrossHeight: Gross height of the product (decimal).
- GrossWidth: Gross width of the product (decimal).
- GrossLength: Gross length of the product (decimal).
- GrossWeight: Gross weight of the product (decimal).
- GrossVolume: Gross volume of the product (decimal).

This class inherits from DataObjectBase and provides a method to initialize its properties from a data row (DataRow). The unique key returned by default is an empty string.

### TypeScript class
```typescript
interface ProductDimensionsBase {
  NetHeight?: number;  // Hauteur nette du produit
  NetWidth?: number;   // Largeur nette du produit
  NetLength?: number;  // Longueur nette du produit
  NetWeight?: number;  // Poids net du produit
  NetVolume?: number;  // Volume net du produit
  GrossHeight: number; // Hauteur brute du produit
  GrossWidth: number;  // Largeur brute du produit
  GrossLength: number; // Longueur brute du produit
  GrossWeight: number; // Poids brut du produit
  GrossVolume: number; // Volume brut du produit
}
```