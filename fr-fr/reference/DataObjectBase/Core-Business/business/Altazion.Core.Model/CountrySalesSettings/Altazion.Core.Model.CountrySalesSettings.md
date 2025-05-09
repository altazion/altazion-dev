## CountrySalesSettings

La classe CountrySalesSettings représente les paramètres de vente spécifiques à un pays.

Propriétés publiques :
- Guid : Identifiant unique des paramètres de vente.
- Iso3LettersCode : Code ISO à 3 lettres du pays.
- IsForbidden : Indique si les ventes sont interdites dans ce pays.
- SalesRequiresValidation : Indique si les ventes nécessitent une validation.
- UsePricesWithoutTaxes : Indique si les prix sont affichés hors taxes.
- VatGroup : Groupe de TVA associé au pays.
- VatThreshold : Seuil de TVA applicable dans le pays.
- VatThresholdCurrency : Devise utilisée pour le seuil de TVA.
- UseDestinationVatRates : Indique si les taux de TVA du pays de destination doivent être utilisés.

### D�claration TypeScript
```json
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