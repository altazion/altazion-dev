## InvoiceLineWithRef

Classe représentant une ligne de facture étendue avec des références produit.

Propriétés publiques :
- ProductSku : chaîne de caractères représentant la référence (SKU) du produit.
- ProductTypeId : entier court (short) identifiant le type/prix du produit.
- VatId : octet (byte) représentant l'identifiant de la TVA applicable au produit.

Cette classe hérite de InvoiceLine et surcharge la méthode FromDataRow pour remplir les propriétés spécifiques depuis une ligne de données (DataRow).

### D�claration TypeScript
```typescript
interface InvoiceLineWithRef {
  ProductSku?: string | null;
  ProductTypeId: number;
  VatId: number;
}
```