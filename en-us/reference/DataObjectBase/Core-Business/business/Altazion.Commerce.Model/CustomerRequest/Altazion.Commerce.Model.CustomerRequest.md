## CustomerRequest

The CustomerRequest class represents a customer request or contact within the system.

Public properties:

- Guid: Unique identifier of the contact.
- SessionId: Unique identifier of the session associated.
- CustomerGuid: Unique identifier of the customer.
- Email: Email address of the contact.
- PhoneNumber: Phone number of the contact.
- Name: Name of the contact.
- Message: Message associated with the contact.
- IsClosed: Indicates if the request is closed (boolean).
- IsSuccess: Indicates if the request was successfully handled (boolean).
- UpdateDate: Date and time of the last update of the request.

### TypeScript class
```typescript
interface CustomerRequest {
  Guid: string; // Unique identifier of the contact (GUID)
  SessionId: string; // Unique identifier of the session (GUID)
  CustomerGuid: string; // Unique identifier of the customer (GUID)
  Email: string; // Email address of the contact
  PhoneNumber: string; // Phone number of the contact
  Name: string; // Name of the contact
  Message: string; // Message associated with the contact
  IsClosed: boolean; // Indicates if the contact request is closed
  IsSuccess: boolean; // Indicates if the contact request was successful
  UpdateDate: string; // Date and time of the last update (ISO 8601 string)
}
```