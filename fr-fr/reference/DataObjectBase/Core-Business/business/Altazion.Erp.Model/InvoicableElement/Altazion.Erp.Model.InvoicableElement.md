## InvoicableElement

La classe InvoicableElement représente un élément facturable dans le système ERP.

Propriétés publiques :
- Guid : Identifiant unique de l'élément facturable.
- ProductGuid : Identifiant unique du produit associé.
- Label : Libellé descriptif de l'élément.
- Quantity : Quantité de l'élément facturable.
- Price : Prix TTC (toutes taxes comprises) de l'élément.
- PriceWOTax : Prix HT (hors taxes) de l'élément.
- CustomerGuid : Identifiant unique du client lié à cet élément.
- InvoicingDate : Date de facturation, pouvant être nulle.
- CustomerReference : Référence propre du client pour cet élément.

La méthode GetKey() retourne la clé principale de l'objet, qui est le Guid. La méthode FromDataRow permet de remplir les propriétés à partir d'une ligne de données (DataRow) en récupérant les valeurs dans les colonnes correspondantes.


### D�claration TypeScript
```typescript
interface InvoicableElement {
  Guid: string; // Unique identifier of the invoicable element
  ProductGuid: string; // Unique identifier of the associated product
  Label: string | null; // Descriptive label
  Quantity: number; // Quantity of the element
  Price: number; // Price including tax (TTC)
  PriceWOTax: number; // Price excluding tax (HT)
  CustomerGuid: string; // Unique identifier of the customer
  InvoicingDate?: string | null; // Optional invoicing date in ISO format
  CustomerReference: string | null; // Customer reference
}
```