## Currency

The `Currency` class represents a currency within the Altazion system. It includes the following properties:

- `Guid`: Unique identifier of the currency.
- `Code`: Currency code (e.g., EUR, USD, GBP).
- `Symbol`: Currency symbol (e.g., €, $, £).
- `Format`: Display format of the currency.
- `Label`: Descriptive label of the currency.
- `IsPrimaryCurrency`: Indicates if this currency is the system's primary currency.
- `PurchaseExchangeRate`: Purchase exchange rate relative to the primary currency.
- `SaleExchangeRate`: Sale exchange rate relative to the primary currency.
- `PurchaseFees`: Purchase fees expressed in primary currency.
- `SaleFees`: Sale fees expressed in primary currency.
- `LastExchangeRateUpdate`: Date of the last exchange rate update (optional).

This class models essential currency properties used for conversions and display purposes in the system.

### TypeScript class
```typescript
interface Currency {
  Guid: string; // Unique identifier of the currency (GUID format)
  Code: string; // Currency code like EUR, USD, GBP
  Symbol: string; // Currency symbol like €, $, £
  Format: string; // Display format of the currency
  Label: string; // Descriptive label of the currency
  IsPrimaryCurrency: boolean; // True if this is the primary system currency
  PurchaseExchangeRate: number; // Purchase rate relative to primary currency
  SaleExchangeRate: number; // Sale rate relative to primary currency
  PurchaseFees: number; // Purchase fees in primary currency
  SaleFees: number; // Sale fees in primary currency
  LastExchangeRateUpdate?: string; // Optional ISO string of the last exchange rate update
}
```