## PurchaseOrderLine

Cette classe représente une ligne de bon de commande avec les informations détaillées sur l'article, le prix, et les quantités associées.

Propriétés publiques :
- Id : Identifiant unique de la ligne de commande.
- OrderId : Identifiant unique du bon de commande parent.
- LineNumber : Numéro de la ligne dans la commande.
- LineType : Type de la ligne (exemples : N = Normal, A = Accessoire, P = Port, etc.).
- ProductGuid : Identifiant unique de l'article.
- VariantGuid : Identifiant unique de la variante article (optionnel).
- UnitPriceWOTax : Prix unitaire hors taxes.
- UnitPrice : Prix unitaire toutes taxes comprises.
- UnitPriceWOTaxBeforeDiscount : Prix unitaire hors taxe avant remise.
- UnitPriceBeforeDiscount : Prix unitaire TTC avant remise.
- UnitDiscountWOTax : Remise unitaire hors taxes.
- UnitDiscount : Remise unitaire TTC.
- Quantity : Quantité commandée.
- QuantityInPreparation : Quantité en cours de préparation.
- QuantityMissing : Quantité manquante lors de la préparation.
- QuantityReadyToShip : Quantité prête à expédier.
- QuantityShipped : Quantité expédiée.
- QuantityInvoiced : Quantité déjà facturée.
- QuantityToInvoice : Quantité à facturer.
- QuantityToRefund : Quantité à rembourser.
- QuantityRefunded : Quantité déjà remboursée.
- QuantityCancelled : Quantité annulée commercialement.
- CustomerComment : Commentaire du client sur la ligne.
- RecipientInfo : Informations sur le destinataire.
- IsGiftWrapped : Indique si la ligne est préparée en mode cadeau.
- PartnerGuid : Identifiant unique du partenaire associé (optionnel).
- PreparationMode : Mode de préparation de la ligne.
- PreparationCode : Code de préparation de la ligne.
- PreparationActorGuid : Identifiant unique de l'acteur de préparation (optionnel).

### D�claration TypeScript
```typescript
interface PurchaseOrderLine {
  Id: string; // Unique identifier of the order line (GUID)
  OrderId: string; // Unique identifier of the parent purchase order (GUID)
  LineNumber: number; // Line number in the purchase order
  LineType: string; // Line type (e.g., 'N', 'A', 'P')
  ProductGuid: string; // Unique identifier of the product (GUID)
  VariantGuid?: string | null; // Optional unique identifier of the product variant (GUID)
  UnitPriceWOTax: number; // Unit price without tax
  UnitPrice: number; // Unit price with tax
  UnitPriceWOTaxBeforeDiscount: number; // Unit price without tax before discount
  UnitPriceBeforeDiscount: number; // Unit price with tax before discount
  UnitDiscountWOTax: number; // Unit discount without tax
  UnitDiscount: number; // Unit discount with tax
  Quantity: number; // Quantity ordered
  QuantityInPreparation: number; // Quantity currently being prepared
  QuantityMissing: number; // Quantity missing during preparation
  QuantityReadyToShip: number; // Quantity ready to ship
  QuantityShipped: number; // Quantity shipped
  QuantityInvoiced: number; // Quantity already invoiced
  QuantityToInvoice: number; // Quantity to invoice
  QuantityToRefund: number; // Quantity to refund
  QuantityRefunded: number; // Quantity already refunded
  QuantityCancelled: number; // Quantity commercially cancelled
  CustomerComment: string | null; // Comment from the customer
  RecipientInfo: string | null; // Information about the recipient
  IsGiftWrapped: boolean; // Indicates if the line is gift wrapped
  PartnerGuid?: string | null; // Optional unique identifier of the associated partner (GUID)
  PreparationMode: string | null; // Preparation mode
  PreparationCode: string | null; // Preparation code
  PreparationActorGuid?: string | null; // Optional unique identifier of the preparation actor (GUID)
}
```