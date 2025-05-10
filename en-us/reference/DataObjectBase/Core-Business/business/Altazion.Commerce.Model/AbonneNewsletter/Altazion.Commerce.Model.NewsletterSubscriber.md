## NewsletterSubscriber

The NewsletterSubscriber class represents a subscriber to a newsletter with associated information.

Public properties:

- Guid: Unique identifier of the newsletter subscriber of type Guid.
- Email: Subscriber's email address, of type string.
- NewsletterId: Identifier of the newsletter to which the subscriber is subscribed, of type int.
- IsSubscribed: Indicates whether the subscriber is currently subscribed to the newsletter, of type bool.
- ClientGuid: Unique identifier of the client associated with the subscriber, of type Guid.

This class inherits from DataObjectBase and manages loading its properties from a data row (DataRow).


### TypeScript class
```typescript
interface NewsletterSubscriber {
  Guid: string; // Unique identifier of the subscriber
  Email: string | null; // Email address of the subscriber
  NewsletterId: number; // ID of the newsletter
  IsSubscribed: boolean; // Subscription status
  ClientGuid: string; // Unique identifier of the associated client
}
```