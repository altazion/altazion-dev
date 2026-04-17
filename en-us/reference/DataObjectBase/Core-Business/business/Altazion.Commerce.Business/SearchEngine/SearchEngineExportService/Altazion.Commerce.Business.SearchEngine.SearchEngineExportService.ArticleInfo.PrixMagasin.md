## PrixMagasin

This class represents the pricing information of an article in a specific store.

Public properties:

- ppm_mag_guid: Guid unique identifier of the store.
- ppm_pu_ttc: decimal, unit price including all taxes in this store.
- ppm_pu_reference_ttc: nullable decimal, reference unit price including all taxes in this store (which may differ from the current unit price).

The class is used to store product price per store, with the option to have a reference price different from the current price.

### TypeScript class
```typescript
interface PrixMagasin {
  ppm_mag_guid: string; // Guid identifying the store
  ppm_pu_ttc: number;  // Unit price including tax
  ppm_pu_reference_ttc?: number | null; // Reference unit price including tax (optional)
}
```