## BankAccount

Class representing a bank account with the following properties:

- Id: Unique identifier for the bank account.
- Label: The label or name of the bank account.
- AccountNumber: The bank account number.
- AccountingAccount: The accounting account associated with the bank account.
- BankCode: The bank code.
- AgencyCode: The bank agency code.
- RibKey: The RIB key (Relevé d'Identité Bancaire) of the bank account.
- Iban: The IBAN (International Bank Account Number) of the bank account.
- IsCurrent: Indicates if the account is a current account (boolean).
- IsPrimary: Indicates if the account is the primary account (boolean).
- AccountType: The type of bank account represented as a byte.

The class includes an internal enumeration "BankAccountType" defining possible bank account types:
  - Current: Current bank account,
  - CreditCard: Deferred payment credit card account,
  - Savings: Savings account,
  - Pledge: Pledge account,
  - Shares: Shares account,
  - Others: Other types of accounts.

Properties include validation to verify the correctness and format of RIB and IBAN values, checking the format of bank codes, agency codes, account numbers, and keys.

This class derives from DataObjectBase and overrides FromDataRow to populate properties from a DataRow.

### TypeScript class
```typescript
interface BankAccount {
  Id: number; // Identifiant du compte bancaire
  Label: string; // Libellé du compte bancaire
  AccountNumber: string; // Numéro du compte bancaire
  AccountingAccount: string; // Compte comptable associé
  BankCode: string; // Code de la banque
  AgencyCode: string; // Code de l'agence bancaire
  RibKey: string; // Clé RIB du compte bancaire
  Iban: string; // IBAN du compte bancaire
  IsCurrent: boolean; // Indique si le compte est courant
  IsPrimary: boolean; // Indique si le compte est principal
  AccountType: number; // Type du compte bancaire
}

// Enum for BankAccountType
enum BankAccountType {
  Current = 0,
  CreditCard = 1,
  Savings = 2,
  Pledge = 3,
  Shares = 4,
  Others = 100
}
```