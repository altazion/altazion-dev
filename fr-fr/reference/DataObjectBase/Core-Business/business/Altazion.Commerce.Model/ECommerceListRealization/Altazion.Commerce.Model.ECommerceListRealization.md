## ECommerceListRealization

Cette classe représente la réalisation d'une liste e-commerce, c'est-à-dire un achat effectué par un tiers pour honorer tout ou partie d'une liste (comme une liste de mariage, une liste de naissance, etc.).

Propriétés publiques :

- Guid : Identifiant unique de la réalisation.
- ListGuid : Identifiant unique de la liste e-commerce associée à cette réalisation.
- Title : Titre de la réalisation (exemple : nom de l'acheteur ou occasion).
- CustomerGuid : Identifiant unique du client ayant effectué la réalisation. Peut être nul si l'acheteur n'est pas un client identifié.
- Message : Message personnalisé laissé par l'acheteur lors de la réalisation.
- PurchaseOrderGuid : Identifiant unique du bon de commande associé à cette réalisation.
- TicketGuid : Identifiant unique du ticket de caisse associé à cette réalisation.
- InvoiceId : Identifiant de la facture associée à cette réalisation.
- NotificationState : État de la notification envoyée au propriétaire de la liste. C'est une chaîne d'un seul caractère, par exemple 'N' pour non envoyée et 'E' pour envoyée.

### D�claration TypeScript
```typescript
interface ECommerceListRealization {
  Guid: string; // Unique identifier of the realization (GUID format)
  ListGuid: string; // Unique identifier of the associated e-commerce list (GUID format)
  Title?: string; // Title of the realization (buyer’s name or occasion)
  CustomerGuid?: string; // Unique identifier of the customer (nullable GUID)
  Message?: string; // Personalized message left by the buyer
  PurchaseOrderGuid?: string; // Unique identifier of the purchase order (nullable GUID)
  TicketGuid?: string; // Unique identifier of the receipt ticket (nullable GUID)
  InvoiceId?: number; // Identifier of the invoice (nullable decimal)
  NotificationState: string; // Notification status (single character string)
}
```