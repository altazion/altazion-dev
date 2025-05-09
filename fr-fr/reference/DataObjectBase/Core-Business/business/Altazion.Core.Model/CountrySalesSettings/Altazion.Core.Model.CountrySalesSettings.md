La classe CountrySalesSettings représente les paramètres spécifiques concernant les ventes dans un pays donné. Elle contient les propriétés publiques suivantes :

- Guid : identifiant unique des paramètres de vente.
- Iso3LettersCode : code ISO à 3 lettres du pays.
- IsForbidden : indique si les ventes sont interdites dans ce pays.
- SalesRequiresValidation : indique si les ventes nécessitent une validation préalable.
- UsePricesWithoutTaxes : indique si les prix doivent être affichés hors taxes.
- VatGroup : groupe de TVA associé au pays.
- VatThreshold : seuil de TVA applicable dans le pays, en valeur décimale facultative.
- VatThresholdCurrency : la devise utilisée pour le seuil de TVA.
- UseDestinationVatRates : indique si les taux de TVA du pays de destination doivent être appliqués.

Cette classe dérive de DataObjectBase et est annotée avec l'attribut DataConcept("Settings", "Sales"). Elle permet notamment de charger ses données depuis une DataRow via la méthode FromDataRow.
