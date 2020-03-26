## <span id='obtenirunetaxe'>Obtenir une taxe</span>

Obtient les informations de la taxe d'un article

Url :`[GET] app/catalogue/articles/taxes/{articleId:guid}`

Paramètres : 

- **articleId** (Guid)

Url :`[GET] app/catalogue/articles/taxes/{articleRef}`

Paramètres : 

- **articleRef** (string)

Type de retour : `TaxeData`

Type(s) de données :

```csharp
class TaxeData
{
	Guid Id { get; set; }
	string Libelle { get; set; }
	bool EstFixe { get; set; }
	decimal Taux { get; set; }
	bool EstInclue { get; set; }
	string CodeCompta { get; set; }
}

```
