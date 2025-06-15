## <span id='creermiseenstock'>Créer une mise en stock</span>

Créé une mise en stock

Url :`[POST] api/stocks/misesenstock/creer`

Paramètres : 

- en tant que body, un objet MiseEnStock : Un objet de type MiseEnStock

Type de retour : `Guid[]`

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

enum TypeMiseEnStock
{
	Manuelle, // =0
	Commande, // =1
	Inventaire, // =2
	Autre, // =3
}

class ArticleAMettreEnStock
{
	System.Guid ArticleGuid { get; set; }
	CPointSoftware.Equihira.Business.Logistique.TypeMiseEnStock TypeMiseEnStock { get; set; }
	Guid? LigneSourceGuid { get; set; }
	decimal Quantite { get; set; }
	decimal PuHt { get; set; }
	Guid? EmplacementPrefere { get; set; }
	string TypeOperation { get; set; }
}

```

