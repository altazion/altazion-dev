## InvoiceLineWithRef

Cette classe représente une ligne détaillée d'une facture avec des références supplémentaires sur le produit.

Propriétés publiques :
- ProductSku : chaîne de caractères, la référence (SKU) du produit lié à la ligne de facture.
- ProductTypeId : entier court (short), identifiant du type de produit ou de la tarification.
- VatId : octet (byte), identifiant du taux de TVA appliqué au produit.

La classe hérite de InvoiceLine et surcharge la méthode FromDataRow pour initialiser ces propriétés depuis une ligne de données, en ajoutant la récupération des informations spécifiques au produit (type, référence SKU, TVA).

### D�claration TypeScript
```typescript
interface InvoiceLineWithRef {
  ProductSku: string | null;
  ProductTypeId: number;
  VatId: number;
}
```