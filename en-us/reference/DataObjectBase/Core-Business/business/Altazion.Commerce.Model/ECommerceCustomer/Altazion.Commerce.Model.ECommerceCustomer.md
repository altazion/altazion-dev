## ECommerceCustomer

The ECommerceCustomer class represents an e-commerce customer account, including identifiers, status, and session information.

Public Properties:
- CustomerAccountGuid: Unique identifier for the e-commerce account (Guid).
- SiteId: Identifier of the e-commerce site to which the account is linked (int).
- CustomerGuid: Identifier of the linked business customer, if available (Guid?).
- Email: Email address used for login (string).
- Password: Password hash or token, optional depending on authentication mode (string).
- AssociatedInternalUserGuid: Technical user identifier (UXID), if assigned (Guid?).
- CustomerName: Display name of the customer (civility or company name) (string).
- IsAnonymousCustomer: Indicates if the customer is anonymous (guest session), optional (bool?).
- AnonymousToken: Authentication token for anonymous accounts, optional (string?).
- LastLoginDate: Date of the last known login, optional (DateTimeOffset?).

No constants or enumerations are defined within this class.

### TypeScript class
```typescript
export interface ECommerceCustomer {
  CustomerAccountGuid: string; // Unique identifier of the e-commerce account (GUID in string format)
  SiteId: number;              // E-commerce site identifier
  CustomerGuid?: string | null; // Linked business customer identifier (optional)
  Email: string;              // Email used for connection
  Password?: string | null;  // Password hash or token (optional)
  AssociatedInternalUserGuid?: string | null; // Technical user ID (UXID), optional
  CustomerName: string;       // Displayed customer name
  IsAnonymousCustomer?: boolean | null;  // Indicates if customer is anonymous (optional)
  AnonymousToken?: string | null;        // Auth token for anonymous accounts (optional)
  LastLoginDate?: string | null;          // Last login date in ISO format (optional)
}
```