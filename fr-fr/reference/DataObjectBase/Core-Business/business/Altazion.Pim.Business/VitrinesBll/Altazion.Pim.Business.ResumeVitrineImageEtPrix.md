## ResumeVitrineImageEtPrix

La classe ResumeVitrineImageEtPrix représente un résumé associant une image et un prix pour une sélection de produits. Cette classe est marquée comme obsolète.

Propriétés publiques :
- ImageBig : chaîne de caractères représentant l'URL ou le chemin vers la grande image du produit.
- ImageSmall : chaîne de caractères représentant l'URL ou le chemin vers une petite image du produit.
- Imagette : chaîne de caractères représentant l'URL ou le chemin vers une imagette (miniature) du produit.
- ImageTiny : chaîne de caractères représentant l'URL ou le chemin vers une toute petite image du produit.
- Prix : valeur décimale représentant le prix minimum TTC du produit.

Cette classe hérite de ResumeVitrine, qui contient un identifiant Guid.

### D�claration TypeScript
```typescript
interface ResumeVitrineImageEtPrix {
  ImageBig: string | null;
  ImageSmall: string | null;
  Imagette: string | null;
  ImageTiny: string | null;
  Prix: number;
}
```