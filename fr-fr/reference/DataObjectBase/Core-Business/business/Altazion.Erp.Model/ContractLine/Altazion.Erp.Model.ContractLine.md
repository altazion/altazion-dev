## ContractLine

Représente une ligne de contrat avec les informations suivantes :

- Guid : Identifiant unique de la ligne de contrat.
- Phase : Phase ou étape du contrat (pour les contrats multi-phases).
- QuoteId : Identifiant du devis associé à cette ligne de contrat (nullable).
- ContractGuid : Identifiant unique du contrat auquel appartient cette ligne.
- ProductGuid : Identifiant unique du produit ou article associé à cette ligne.
- Quantity : Quantité totale prévue dans le contrat pour cet article.
- QuantityConsumed : Quantité déjà consommée ou utilisée de cet article.
- QuantityInvoiced : Quantité déjà facturée de cet article.
- QuantityReimbursed : Quantité remboursée de cet article (pour les avoirs).
- InvoiceId : Identifiant de la facture associée à cette ligne (nullable).

Cette classe dérive de DataObjectBase et correspond à une entité de données SQL représentant la table "gestcom_lignescontrats" dans la base "Erp".

### D�claration TypeScript
```typescript
interface ContractLine {
  Guid: string; // Unique identifier of the contract line
  Phase: number; // Phase or stage of the contract
  QuoteId?: number | null; // Associated quote identifier (nullable)
  ContractGuid: string; // Identifier of the contract
  ProductGuid: string; // Identifier of the product or item
  Quantity: number; // Total planned quantity
  QuantityConsumed: number; // Quantity consumed
  QuantityInvoiced: number; // Quantity invoiced
  QuantityReimbursed: number; // Quantity reimbursed
  InvoiceId?: number | null; // Associated invoice identifier (nullable)
}
```