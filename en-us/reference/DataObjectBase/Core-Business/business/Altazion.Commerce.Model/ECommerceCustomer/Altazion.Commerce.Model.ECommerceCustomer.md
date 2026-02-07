## ECommerceCustomer

The ECommerceCustomer class represents an e-commerce customer account including identifiers, status, and session information.

Public properties:
- CustomerAccountGuid: Unique identifier of the e-commerce account (Guid).
- SiteId: Identifier of the e-commerce site linked to the account (int).
- CustomerGuid: Identifier of the linked business customer, nullable (Guid?).
- Email: Email address used to log in (string).
- Password: Password hash or token, optional depending on authentication mode (string?).
- UserExperienceId: Technical user identifier (UXID), optional (Guid?).
- CustomerName: Display name of the customer (title or company name) (string).
- IsAnonymousCustomer: Indicates if the customer is anonymous (guest session) (bool?).
- AnonymousToken: Authentication token for anonymous accounts (string?).
- LastLoginDate: Date of last known login (DateTimeOffset?).

### TypeScript class
```typescript
interface ECommerceCustomer {
  CustomerAccountGuid: string; // GUID unique identifier
  SiteId: number;
  CustomerGuid?: string | null;
  Email: string;
  Password?: string | null;
  UserExperienceId?: string | null;
  CustomerName: string;
  IsAnonymousCustomer?: boolean | null;
  AnonymousToken?: string | null;
  LastLoginDate?: string | null; // ISO datetime string
}
```