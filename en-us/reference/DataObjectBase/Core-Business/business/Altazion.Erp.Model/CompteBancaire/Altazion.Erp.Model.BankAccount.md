## BankAccount

Represents a bank account with its essential information.

Public properties:
- Id: Unique identifier of the bank account.
- Label: Name or label of the bank account.
- AccountNumber: Bank account number.
- AccountingAccount: Accounting account associated with the bank account.
- BankCode: Code identifying the bank.
- AgencyCode: Code identifying the bank agency.
- RibKey: RIB key for account verification.
- Iban: International IBAN number of the account.
- IsCurrent: Indicates if the account is a current account.
- IsPrimary: Indicates if this is the primary account.
- AccountType: Type of the bank account, as a byte.

Nested enumeration: BankAccountType
- Current: Current account (value 0).
- CreditCard: Deferred payment credit card account (1).
- Savings: Savings account (2).
- Pledge: Pledge account (3).
- Shares: Shares account (4).
- Others: Other account types (100).

### TypeScript class
```typescript
interface BankAccount {
  Id: number;
  Label: string | null;
  AccountNumber: string | null;
  AccountingAccount: string | null;
  BankCode: string | null;
  AgencyCode: string | null;
  RibKey: string | null;
  Iban: string | null;
  IsCurrent: boolean;
  IsPrimary: boolean;
  AccountType: number;
}

enum BankAccountType {
  Current = 0,
  CreditCard = 1,
  Savings = 2,
  Pledge = 3,
  Shares = 4,
  Others = 100
}
```