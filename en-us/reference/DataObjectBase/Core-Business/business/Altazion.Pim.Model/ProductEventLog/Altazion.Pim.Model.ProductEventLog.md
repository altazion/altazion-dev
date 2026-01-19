## ProductEventLog

The ProductEventLog class represents an event recorded in the history of a product (item). It includes the following properties:

- EventId: Unique identifier of the event, of type Guid.
- ProductId: Unique identifier of the product related to the event, of type Guid.
- EventDate: Date and time of the event, of type DateTimeOffset.
- EventType: Type or code of the event (e.g., "CREATION", "MODIFICATION", "VALIDATION"), of type string.
- Message: Message or detailed description of the event, of type string.
- UserId: Unique identifier of the user who triggered the event, of type Guid?, nullable.

### TypeScript class
```typescript
interface ProductEventLog {
  EventId: string; // Guid
  ProductId: string; // Guid
  EventDate: string; // DateTimeOffset as ISO string
  EventType: string;
  Message: string;
  UserId?: string; // Guid nullable
}
```