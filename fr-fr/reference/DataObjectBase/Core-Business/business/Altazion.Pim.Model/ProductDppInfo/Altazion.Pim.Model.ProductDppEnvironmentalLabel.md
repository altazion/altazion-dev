## ProductDppEnvironmentalLabel

Cette classe représente un label environnemental ou une certification écologique associée à un produit. Elle contient les propriétés suivantes :
- LabelCode : le code du label (par exemple "EU_ECOLABEL", "ENERGY_STAR", "FSC", "BLAUER_ENGEL").
- CertificationBody : l'organisme certificateur ayant délivré le label.
- ValidUntil : la date de validité du label, ou null s'il n'y a pas de date limite définie.

### D�claration TypeScript
```typescript
interface ProductDppEnvironmentalLabel {
  LabelCode: string;
  CertificationBody: string;
  ValidUntil?: string | null; // Date in ISO format or null
}
```