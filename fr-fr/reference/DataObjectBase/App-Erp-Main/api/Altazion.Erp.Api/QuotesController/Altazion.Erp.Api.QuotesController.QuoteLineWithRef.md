## QuoteLineWithRef

La classe QuoteLineWithRef représente une ligne de devis avec une référence produit. Elle hérite de la classe QuoteLine.

Propriétés publiques :
- ProductReference : chaîne de caractères représentant la référence du produit associée à la ligne du devis.

Cette propriété est chargée depuis une ligne de données, notamment à partir de la colonne 'art_ref' dans un DataRow.

### D�claration TypeScript
```typescript
interface QuoteLineWithRef {
  ProductReference: string | null;
}
```