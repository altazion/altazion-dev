The CountrySalesSettings class represents sales settings specific to a given country. It has the following public properties:

- Guid: unique identifier of the sales settings.
- Iso3LettersCode: 3-letter ISO code of the country.
- IsForbidden: indicates whether sales are forbidden in this country.
- SalesRequiresValidation: indicates whether sales require validation.
- UsePricesWithoutTaxes: indicates if prices should be displayed excluding taxes.
- VatGroup: VAT group associated with the country.
- VatThreshold: VAT threshold applicable in the country, optional decimal value.
- VatThresholdCurrency: currency used for the VAT threshold.
- UseDestinationVatRates: indicates if the VAT rates of the destination country should be used.

This class inherits from DataObjectBase and is marked with the DataConcept("Settings", "Sales") attribute. It can initialize its properties from a DataRow using the FromDataRow method.