## ResumeVitrineImageEtPrix

The ResumeVitrineImageEtPrix class represents a summary combining an image and a price for a product selection. This class is marked as obsolete.

Public properties:
- ImageBig: a string representing the URL or path to the large product image.
- ImageSmall: a string representing the URL or path to the small product image.
- Imagette: a string representing the URL or path to the thumbnail image of the product.
- ImageTiny: a string representing the URL or path to a very small product image.
- Prix: a decimal value representing the minimum VAT-included price of the product.

This class inherits from ResumeVitrine which contains a Guid identifier.

### TypeScript class
```typescript
interface ResumeVitrineImageEtPrix {
  ImageBig: string | null;
  ImageSmall: string | null;
  Imagette: string | null;
  ImageTiny: string | null;
  Prix: number;
}
```