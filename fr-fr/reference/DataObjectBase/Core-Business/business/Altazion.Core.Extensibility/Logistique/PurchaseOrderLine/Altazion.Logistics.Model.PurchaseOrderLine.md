## PurchaseOrderLine

La classe PurchaseOrderLine représente une ligne de bon de commande contenant des informations détaillées sur l'article commandé, les prix unitaires, les quantités sous différents statuts, ainsi que les informations de préparation et de livraison.

Propriétés publiques :

- Id : Identifiant unique de la ligne de commande (GUID).
- OrderId : Identifiant unique du bon de commande parent (GUID).
- LineNumber : Numéro de la ligne dans la commande (décimal).
- LineType : Type de la ligne (ex: N = Normal, A = Accessoire, P = Port, etc.) (string).
- ProductGuid : Identifiant unique de l'article (GUID).
- VariantGuid : Identifiant unique de la variante article (disponibilité) (GUID nullable).
- UnitPriceWOTax : Prix unitaire hors taxes (décimal).
- UnitPrice : Prix unitaire toutes taxes comprises (décimal).
- UnitPriceWOTaxBeforeDiscount : Prix unitaire hors taxe avant remise (décimal).
- UnitPriceBeforeDiscount : Prix unitaire TTC avant remise (décimal).
- UnitDiscountWOTax : Remise unitaire hors taxe (décimal).
- UnitDiscount : Remise unitaire TTC (décimal).
- Quantity : Quantité commandée (décimal).
- QuantityInPreparation : Quantité en cours de préparation (décimal).
- QuantityMissing : Quantité manquante lors de la préparation (décimal).
- QuantityReadyToShip : Quantité prête à expédier (décimal).
- QuantityShipped : Quantité expédiée (décimal).
- QuantityInvoiced : Quantité déjà facturée (décimal).
- QuantityToInvoice : Quantité devant être facturée (décimal).
- QuantityToRefund : Quantité à rembourser (décimal).
- QuantityRefunded : Quantité déjà remboursée (décimal).
- QuantityCancelled : Quantité annulée commercialement (décimal).
- CustomerComment : Commentaire du client sur la ligne (string).
- RecipientInfo : Informations sur le destinataire (string).
- IsGiftWrapped : Indique si la ligne est préparée en mode cadeau (booléen).
- PartnerGuid : Identifiant unique du partenaire associé (GUID nullable).
- PreparationMode : Mode de préparation de la ligne (string).
- PreparationCode : Code de préparation de la ligne (string).
- PreparationActorGuid : Identifiant unique de l'acteur de préparation (GUID nullable).

### D�claration TypeScript
```typescript
export interface PurchaseOrderLine {
    Id: string; // Unique identifier of the order line (GUID)
    OrderId: string; // Unique identifier of the parent order (GUID)
    LineNumber: number; // Line number in the order
    LineType: string; // Type of line (e.g., N=Normal, A=Accessory, P=Shipping)
    ProductGuid: string; // Unique identifier of the product
    VariantGuid?: string | null; // Unique identifier of the product variant (nullable)
    UnitPriceWOTax: number; // Unit price excluding tax
    UnitPrice: number; // Unit price including tax
    UnitPriceWOTaxBeforeDiscount: number; // Unit price excluding tax before discount
    UnitPriceBeforeDiscount: number; // Unit price including tax before discount
    UnitDiscountWOTax: number; // Unit discount excluding tax
    UnitDiscount: number; // Unit discount including tax
    Quantity: number; // Quantity ordered
    QuantityInPreparation: number; // Quantity currently being prepared
    QuantityMissing: number; // Quantity missing during preparation
    QuantityReadyToShip: number; // Quantity ready to ship
    QuantityShipped: number; // Quantity shipped
    QuantityInvoiced: number; // Quantity invoiced
    QuantityToInvoice: number; // Quantity to invoice
    QuantityToRefund: number; // Quantity to refund
    QuantityRefunded: number; // Quantity refunded
    QuantityCancelled: number; // Quantity commercially cancelled
    CustomerComment?: string | null; // Customer comment on the line
    RecipientInfo?: string | null; // Recipient information
    IsGiftWrapped: boolean; // Is gift wrapped
    PartnerGuid?: string | null; // Unique identifier of the partner
    PreparationMode?: string | null; // Preparation mode
    PreparationCode?: string | null; // Preparation code
    PreparationActorGuid?: string | null; // Unique identifier of the preparation actor
}
```