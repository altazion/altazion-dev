## CreditNoteLine

La classe CreditNoteLine représente une ligne d'avoir détaillant un produit et ses montants associés.

Propriétés publiques :
- Id : Guid, identifiant unique de la ligne d'avoir.
- CreditNoteId : Guid, identifiant de l'avoir auquel appartient cette ligne.
- InvoiceLineId : long?, identifiant de la ligne de facture d'origine (optionnel).
- ProductId : long?, identifiant de l'article (optionnel).
- ProductLabel : string, libellé de l'article, obligatoire.
- Quantity : decimal, quantité retournée, doit être supérieure à zéro.
- UnitPriceWOTax : decimal, prix unitaire hors taxes, obligatoire.
- UnitPrice : decimal, prix unitaire toutes taxes comprises, obligatoire et supérieur ou égal au prix unitaire HT.
- Comment : string, commentaire éventuel sur la ligne.
- ProjectId : long?, identifiant du projet associé (optionnel).
- StockMovementId : long?, identifiant du mouvement de stock (optionnel).
- LineType : string, type de ligne (exemples : 'P' pour produit, 'C' pour commentaire), obligatoire.

Cette classe dérive de DataObjectBase et utilise un attribut SqlDataConcept pour le mapping SQL avec la table "gestcom_lignesavoirs".

### D�claration TypeScript
```typescript
interface CreditNoteLine {
  Id: string; // Unique identifier (GUID) of the credit note line
  CreditNoteId: string; // Identifier (GUID) of the credit note this line belongs to
  InvoiceLineId?: number | null; // Optional identifier of the original invoice line
  ProductId?: number | null; // Optional product identifier
  ProductLabel: string; // Product label
  Quantity: number; // Quantity, must be > 0
  UnitPriceWOTax: number; // Unit price without tax
  UnitPrice: number; // Unit price including tax, >= UnitPriceWOTax
  Comment?: string | null; // Optional comment
  ProjectId?: number | null; // Optional project identifier
  StockMovementId?: number | null; // Optional stock movement identifier
  LineType: string; // Line type (e.g., 'P' for Product, 'C' for Comment)
}
```