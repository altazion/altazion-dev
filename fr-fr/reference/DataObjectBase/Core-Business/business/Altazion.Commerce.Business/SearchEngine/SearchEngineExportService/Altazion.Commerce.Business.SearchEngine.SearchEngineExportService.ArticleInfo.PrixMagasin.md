## PrixMagasin

Cette classe représente les informations de prix d'un article dans un magasin spécifique.

Propriétés publiques :

- ppm_mag_guid : Guid identifiant unique du magasin.
- ppm_pu_ttc : decimal, prix unitaire toutes taxes comprises dans ce magasin.
- ppm_pu_reference_ttc : nullable decimal, prix unitaire TTC de référence dans ce magasin (peut être différent du prix unitaire courant).

La classe sert à stocker le prix du produit pour chaque magasin, avec la possibilité d'avoir un prix référencé distinct du prix courant.

### D�claration TypeScript
```typescript
interface PrixMagasin {
  ppm_mag_guid: string; // Guid identifying the store
  ppm_pu_ttc: number;  // Unit price including tax
  ppm_pu_reference_ttc?: number | null; // Reference unit price including tax (optional)
}
```