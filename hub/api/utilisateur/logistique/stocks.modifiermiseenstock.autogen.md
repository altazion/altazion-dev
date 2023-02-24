## <span id='modifiermiseenstock'>Modifier une mise en stock</span>

Modifie une mise en stock

Url :`[PATCH] api/stocks/misesenstock/{IDMiseEnStock}`

Paramètres : 

- **IDMiseEnStock** (System.Guid) : L'ID de la mise en stock à modifier
- en tant que body, un objet MiseEnStock : Un objet de type MiseEnStock

Type de retour : `bool`

Type(s) de données :

```csharp
class MiseEnStock
{
	string Libelle { get; set; }
	CPointSoftware.Equihira.Business.Logistique.TypeMiseEnStock TypeMiseEnStock { get; set; }
	Guid? IDSource { get; set; }
	Guid? IDUtilisateur { get; set; }
	string Commentaire { get; set; }
	CPointSoftware.Equihira.Business.Logistique.ArticleAMettreEnStock[] Articles { get; set; }
}

```
