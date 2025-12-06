## ParcelLine

La classe ParcelLine représente une ligne de détail dans un colis, contenant des informations sur les articles et leurs quantités associées.

Propriétés publiques :

- Id : Identifiant unique de la ligne de colis (Guid).
- ParcelId : Identifiant unique du colis parent (Guid).
- ProductGuid : Identifiant unique optionnel de l'article (Guid?).
- Quantity : Quantité optionnelle de l'article dans le colis (decimal?).
- Remarks : Remarques éventuelles sur la ligne (string).
- Status : État actuel de la ligne, sous forme de code (string).
- FulfillmentOrderLineGuid : Identifiant unique optionnel de la ligne de bon de préparation associée (Guid?).
- OrderLineGuid : Identifiant unique optionnel de la ligne de bon de commande associée (Guid?).
- ReplenishmentRequestLineGuid : Identifiant unique optionnel de la ligne de demande de réapprovisionnement associée (Guid?).
- AfterSalesServiceLineGuid : Identifiant unique optionnel de la ligne de service après-vente associée (Guid?).

### D�claration TypeScript
```typescript
interface ParcelLine {
  Id: string; // Guid
  ParcelId: string; // Guid
  ProductGuid?: string | null; // Guid optional
  Quantity?: number | null;
  Remarks?: string | null;
  Status?: string | null;
  FulfillmentOrderLineGuid?: string | null;
  OrderLineGuid?: string | null;
  ReplenishmentRequestLineGuid?: string | null;
  AfterSalesServiceLineGuid?: string | null;
}
```