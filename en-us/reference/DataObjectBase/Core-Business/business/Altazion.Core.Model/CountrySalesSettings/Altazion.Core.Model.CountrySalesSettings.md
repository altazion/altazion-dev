## CountrySalesSettings

The CountrySalesSettings class represents sales settings specific to a country.

Public properties:
- Guid: Unique identifier for the sales settings.
- Iso3LettersCode: ISO 3-letter code of the country.
- IsForbidden: Indicates whether sales are forbidden in this country.
- SalesRequiresValidation: Indicates whether sales require validation.
- UsePricesWithoutTaxes: Indicates whether prices are shown without taxes.
- VatGroup: VAT group associated with the country.
- VatThreshold: VAT threshold applicable in the country.
- VatThresholdCurrency: Currency used for the VAT threshold.
- UseDestinationVatRates: Indicates if VAT rates of the destination country should be used.

### TypeScript class
```typescript
interface CountrySalesSettings {
  Guid: string; // Unique identifier (GUID)
  Iso3LettersCode: string; // ISO 3-letter code of the country
  IsForbidden: boolean; // Whether sales are forbidden in the country
  SalesRequiresValidation: boolean; // Whether sales require validation
  UsePricesWithoutTaxes: boolean; // Whether prices are shown without taxes
  VatGroup: string | null; // VAT group associated with the country
  VatThreshold: number | null; // VAT threshold applicable in the country
  VatThresholdCurrency: string | null; // Currency code for the VAT threshold
  UseDestinationVatRates: boolean; // Whether to use destination country's VAT rates
}
```