## FulfillmentOrderLine

La classe FulfillmentOrderLine représente une ligne de bon de préparation dans le module logistique, incluant les informations sur l'article et diverses quantités liées à la préparation de la commande.

Propriétés publiques :
- Id : Identifiant unique de la ligne de préparation.
- FulfillmentOrderId : Identifiant unique du bon de préparation parent.
- ProductId : Identifiant de l'article (clé primaire legacy).
- OrderLineId : Identifiant unique de la ligne de bon de commande associée.
- QuantityOrdered : Quantité commandée.
- QuantityAnnounced : Quantité annoncée disponible pour préparation.
- QuantityAnnouncedNotPreparable : Quantité annoncée non préparable.
- QuantityPrepared : Quantité effectivement préparée.
- QuantityNotPreparable : Quantité non préparable.
- QuantityPostponed : Quantité reportée à une date ultérieure.
- PostponedDate : Date de report de la quantité.
- FinalPackageLineGuid : Identifiant unique de la ligne de colis final associée (nullable).
- PreparationOrderLineGuid : Identifiant unique de la ligne d'ordre de préparation associée (nullable).
- FinalOrderLineGuid : Identifiant unique de la ligne d'ordre final associée (nullable).
- PreparationUnitPriceWOTax : Prix unitaire de préparation hors taxes (nullable).
- PreparationUnitPrice : Prix unitaire de préparation toutes taxes comprises (nullable).
- NotPreparedReason : Raison pour laquelle la ligne n'a pas été préparée (nullable).

### D�claration TypeScript
```typescript
interface FulfillmentOrderLine {
  Id: string; // Guid
  FulfillmentOrderId: string; // Guid
  ProductId: number;
  OrderLineId: string; // Guid
  QuantityOrdered: number;
  QuantityAnnounced: number;
  QuantityAnnouncedNotPreparable: number;
  QuantityPrepared: number;
  QuantityNotPreparable: number;
  QuantityPostponed: number;
  PostponedDate?: string | null; // DateTimeOffset nullable
  FinalPackageLineGuid?: string | null; // Guid nullable
  PreparationOrderLineGuid?: string | null; // Guid nullable
  FinalOrderLineGuid?: string | null; // Guid nullable
  PreparationUnitPriceWOTax?: number | null;
  PreparationUnitPrice?: number | null;
  NotPreparedReason?: string | null;
}
```