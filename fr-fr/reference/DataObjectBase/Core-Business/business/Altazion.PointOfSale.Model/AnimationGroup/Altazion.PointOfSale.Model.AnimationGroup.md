## AnimationGroup

La classe AnimationGroup représente un groupe d'animation utilisé pour organiser les gammes de produits dans les magasins.

Propriétés publiques :
- Id : Guid - Identifiant unique du groupe d'animation.
- Label : string - Libellé du groupe d'animation. Ce champ est obligatoire et limité à 250 caractères.

### D�claration TypeScript
```typescript
interface AnimationGroup {
  /** Unique identifier of the animation group */
  Id: string; // Guid represented as string
  /** Label of the animation group, required, max 250 characters */
  Label: string | null;
}
```