## QuoteLine

La classe QuoteLine représente une ligne d'un devis dans le système ERP.

Propriétés publiques :
- Id : Identifiant unique de la ligne de devis (type decimal).
- QuoteId : Identifiant du devis auquel cette ligne appartient (type decimal).
- ProductId : Identifiant du produit associé à cette ligne (type long).
- Label : Libellé du produit ou de la ligne (type string).
- Description : Description optionnelle complémentaire de la ligne (type string).
- Quantity : Quantité de produit commandée sur cette ligne (type decimal).
- Price : Prix unitaire TTC (toutes taxes comprises) du produit (type decimal).
- PriceWOTax : Prix unitaire HT (hors taxes) du produit (type decimal).
- Discount : Remise TTC appliquée sur cette ligne (type decimal?, nullable).
- DiscountWOTax : Remise HT appliquée sur cette ligne (type decimal?, nullable).
- LineType : Type de la ligne (type string), par défaut "N" indiquant un produit (constante LineTypeProduct).
- InvoiceLineId : Identifiant facultatif de la ligne de facture associée à cette ligne de devis (type decimal?, nullable).

Constante définie :
- LineTypeProduct : valeur constante "N" indiquant que la ligne est de type produit.

Cette classe hérite de DataObjectBase et fournit une méthode redéfinie GetKey retournant l'identifiant Id, ainsi qu'une méthode protégée FromDataRow pour initialiser la ligne à partir d'une DataRow.


### D�claration TypeScript
```typescript
export interface QuoteLine {
  Id: number; // Unique identifier of the quote line
  QuoteId: number; // Identifier of the quote
  ProductId: number; // Identifier of the product
  Label: string; // Label of the product or line
  Description?: string | null; // Optional description
  Quantity: number; // Quantity ordered
  Price: number; // Unit price including tax
  PriceWOTax: number; // Unit price excluding tax
  Discount?: number | null; // Discount including tax (optional)
  DiscountWOTax?: number | null; // Discount excluding tax (optional)
  LineType: string; // Type of line, e.g. "N" for product
  InvoiceLineId?: number | null; // Optional linked invoice line ID
}

export const LineTypeProduct = "N";

```