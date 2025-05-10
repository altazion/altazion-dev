## CustomerRequest

The CustomerRequest class represents a customer request or contact in the system.

Properties:
- Guid: Unique identifier of the contact.
- SessionId: Identifier of the session associated with the request.
- CustomerGuid: Unique identifier of the customer linked to the request.
- Email: Email address of the contact.
- PhoneNumber: Phone number of the contact.
- Name: Name of the contact.
- Message: Message or content of the customer's request.
- IsClosed: Indicates if the request is closed (boolean).
- IsSuccess: Indicates if the request was successfully processed (boolean).
- UpdateDate: Date of the last update of the request.

### TypeScript class
```typescript
interface CustomerRequest {
  Guid: string; // Unique identifier (UUID)
  SessionId: string; // Session identifier (UUID)
  CustomerGuid: string; // Customer identifier (UUID)
  Email: string; // Contact email address
  PhoneNumber: string; // Contact phone number
  Name: string; // Contact name
  Message: string; // Request or message content
  IsClosed: boolean; // Whether the request is closed
  IsSuccess: boolean; // Whether the request was successful
  UpdateDate: Date; // Date of last update
}
```