## ECommerceListRealization

This class represents the realization of an e-commerce list, meaning a purchase made by a third party to fulfill all or part of a list (such as a wedding list, a birth list, etc.).

Public properties:

- Guid: Unique identifier of the realization.
- ListGuid: Unique identifier of the associated e-commerce list.
- Title: Title of the realization (e.g., the buyer's name or occasion).
- CustomerGuid: Unique identifier of the customer who made the realization. Nullable if the buyer is not an identified customer.
- Message: Personalized message left by the buyer during the realization.
- PurchaseOrderGuid: Unique identifier of the purchase order associated with the realization.
- TicketGuid: Unique identifier of the receipt ticket associated with the realization.
- InvoiceId: Identifier of the invoice associated with the realization.
- NotificationState: State of the notification sent to the list owner. It's a single-character string, for example 'N' for not sent and 'E' for sent.

### TypeScript class
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