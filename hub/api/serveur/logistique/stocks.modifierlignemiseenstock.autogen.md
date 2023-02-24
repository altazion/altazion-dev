## <span id='modifierlignemiseenstock'>Modifier une ligne de mise en stock</span>

Modifie une ligne de mise en stock

Url :`[PATCH] api/stocks/misesenstock/ligne/{IDLigneMiseEnStock}`

Paramètres : 

- **IDLigneMiseEnStock** (System.Guid) : L'ID de la ligne de mise en stock à modifier
- en tant que body, un objet ArticleAMettreEnStock : Un objet de type ArticleAMettreEnStock

Type de retour : `bool`

Type(s) de données :

```csharp
class ArticleAMettreEnStock
{
	System.Guid ArticleGuid { get; set; }
	CPointSoftware.Equihira.Business.Logistique.TypeMiseEnStock TypeMiseEnStock { get; set; }
	Guid? LigneSourceGuid { get; set; }
	decimal Quantite { get; set; }
	decimal PuHt { get; set; }
	System.Int32? EmplacementPrefere { get; set; }
	string TypeOperation { get; set; }
}

```
