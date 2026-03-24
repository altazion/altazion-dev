## Currency

La classe `Currency` représente une devise (monnaie) dans le système Altazion. Elle contient les propriétés suivantes :

- `Guid` : Identifiant unique de la devise.
- `Code` : Code de la devise (par exemple EUR, USD, GBP).
- `Symbol` : Symbole de la devise (par exemple €, $, £).
- `Format` : Format d'affichage de la devise.
- `Label` : Libellé descriptif de la devise.
- `IsPrimaryCurrency` : Indique si cette devise est la monnaie principale du système.
- `PurchaseExchangeRate` : Taux d'achat par rapport à la devise principale.
- `SaleExchangeRate` : Taux de vente par rapport à la devise principale.
- `PurchaseFees` : Frais d'achat en devise principale.
- `SaleFees` : Frais de vente en devise principale.
- `LastExchangeRateUpdate` : Date de la dernière mise à jour des taux de change (optionnelle).

Cette classe permet de modéliser les caractéristiques essentielles d'une devise utilisées pour les conversions et les affichages dans le système.

### D�claration TypeScript
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