## ServiceInStore

The ServiceInStore class represents a service available in a store (ClicknMortar). It contains the following properties:

- StoreGuid: Unique identifier of the store (type Guid).
- ServiceId: Unique identifier of the service (type int).
- Phone: Phone number of the service in the store (type string).
- Email: Email address of the service in the store (type string).

### TypeScript class
```typescript
interface ServiceInStore {
  StoreGuid: string; // Guid as string
  ServiceId: number;
  Phone: string | null;
  Email: string | null;
}
```