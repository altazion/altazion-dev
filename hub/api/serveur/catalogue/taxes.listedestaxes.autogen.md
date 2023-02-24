## <span id='listedestaxes'>Obtenir toutes les taxes</span>

Récupère la liste de toute les Taxes

Url :`[GET] app/catalogue/taxes/all`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `TaxeData[]`

Type(s) de données :

```csharp
class TaxeData
{
	System.Guid Id { get; set; }
	string Libelle { get; set; }
	bool EstFixe { get; set; }
	decimal Taux { get; set; }
	bool EstInclue { get; set; }
	string CodeCompta { get; set; }
}

```
