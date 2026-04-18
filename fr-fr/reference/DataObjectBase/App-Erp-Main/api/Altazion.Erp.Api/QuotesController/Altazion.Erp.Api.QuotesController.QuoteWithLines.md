## QuoteWithLines

La classe QuoteWithLines hérite de Quote et représente un devis enrichi avec ses lignes associées.

Propriétés :
- Lines : Liste de QuoteLineWithRef représentant les lignes du devis. Chaque ligne contient des détails sur les produits associés au devis, incluant une référence produit.

### D�claration TypeScript
```typescript
interface QuoteWithLines extends Quote {
    Lines: QuoteLineWithRef[];
}
```