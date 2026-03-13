## ProductDppEnvironmentalLabel

This class represents an environmental label or ecological certification associated with a product. It includes the following properties:
- LabelCode: the code of the label (e.g., "EU_ECOLABEL", "ENERGY_STAR", "FSC", "BLAUER_ENGEL").
- CertificationBody: the certifying organization that issued the label.
- ValidUntil: the expiration date of the label, or null if there is no defined expiration.

### TypeScript class
```typescript
interface ProductDppEnvironmentalLabel {
  LabelCode: string;
  CertificationBody: string;
  ValidUntil?: string | null; // Date in ISO format or null
}
```