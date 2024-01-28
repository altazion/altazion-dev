## <span id='disponibilites'>Obtenir les disponibilités d'un produit</span>

Récupère la disponibilité d'un produit.

Url :`[POST] api/catalogue/articles/dispos/centrale?inclureDispoExterne={inclureDispoExterne:bool}&zprGuid={zprGuid:Guid?}`

Paramètres : 

- en tant que body, un objet Guid[] : Les identifiants Guids des produits à obtenir
- **inclureDispoExterne** (bool) : true pour calculer la disponibilité chez les fournisseurs, 
                false (valeur par défaut) pour considérer les articles immatériel/non stockés comme toujours dispo 
- **zprGuid** (Guid?) : L'identifiant de la zone de préparation concernée

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

