## <span id='disponibilites'>Obtenir les disponibilités d'un produit</span>

Récupère la disponibilité d'un produit.

Url :`[POST] app/catalogue/articles/dispos/centrale`

Paramètres : 

- en tant que body, un objet Guid[] : Les identifiants Guids des produits à obtenir

Type de retour : `ArticleDispo[]`

Type(s) de données :

```csharp
class ArticleDispo
{
	System.Guid ArticleGuid { get; set; }
	Guid? MagasinGuid { get; set; }
	string Libelle { get; set; }
	bool EstDisponible { get; set; }
	string Commentaire { get; set; }
	decimal? Stock { get; set; }
}

```

