## QuoteWithLines

Cette classe représente un devis avec ses lignes détaillées. Elle hérite de la classe Quote (non détaillée ici) et ajoute une propriété publique :

- Lines : une liste de QuoteLineWithRef, représentant les lignes du devis contenant des références produits.

Chaque élément de la liste Lines correspond à une ligne détaillée du devis, fournissant ainsi l'ensemble des détails du devis complet incluant ses lignes.

### D�claration TypeScript
```typescript
interface QuoteWithLines {
  Lines: QuoteLineWithRef[]; // List of detailed quote lines with product references
}
```