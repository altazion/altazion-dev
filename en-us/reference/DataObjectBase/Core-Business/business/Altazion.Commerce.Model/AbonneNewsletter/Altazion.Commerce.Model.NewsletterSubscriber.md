## NewsletterSubscriber

The NewsletterSubscriber class represents a subscriber to a newsletter with its associated information within an e-commerce context.

Public properties:
- Guid: The unique identifier for the subscriber (type Guid).
- Email: The subscriber's email address (type string).
- NewsletterId: The identifier of the newsletter the subscriber is subscribed to (type int).
- IsSubscribed: Indicates whether the subscriber is currently subscribed to the newsletter (type bool).
- ClientGuid: Unique identifier of the client associated with the subscriber (type Guid).

This class inherits from DataObjectBase and includes a protected method FromDataRow to initialize its properties from a data row.
It also provides a GetKey method which returns the unique key of the object, the subscriber's Guid.

### TypeScript class
```typescript
interface NewsletterSubscriber {
  Guid: string; // unique identifier
  Email: string | null;
  NewsletterId: number;
  IsSubscribed: boolean;
  ClientGuid: string; // client unique identifier
}
```