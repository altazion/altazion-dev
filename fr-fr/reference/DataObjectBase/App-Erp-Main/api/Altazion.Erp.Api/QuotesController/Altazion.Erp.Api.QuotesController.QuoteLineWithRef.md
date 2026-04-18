## QuoteLineWithRef

La classe QuoteLineWithRef étend la classe QuoteLine et représente une ligne de devis avec une référence produit supplémentaire.

Propriétés publiques :
- ProductReference : string, la référence du produit associée à la ligne de devis.

Cette classe surcharge également la méthode FromDataRow pour initialiser la propriété ProductReference à partir d'une colonne "art_ref" dans une DataRow.

### D�claration TypeScript
```typescript
interface QuoteLineWithRef extends QuoteLine {
  ProductReference?: string;
}
```