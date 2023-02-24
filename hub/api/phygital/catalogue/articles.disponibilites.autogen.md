## <span id='disponibilites'>Disponibilités</span>

Récupère les disponibilités d'un produit. Les différentes signatures permettent de choisir/limiter l'interrogation à certains types de stocks ou à certains emplacements (cf. remarques).

Url :`[GET] v2/catalogue/get/{guid:guid}/dispos`

Paramètres : 

- **guid** (System.Guid) : L'identifiant du produit

Url :`[GET] v2/catalogue/get/{guid:guid}/dispos/centrale`

Paramètres : 

- **guid** (System.Guid) : L'identifiant du produit

Url :`[GET] v2/catalogue/get/{guid:guid}/dispos/magasins`

Paramètres : 

- **guid** (System.Guid) : L'identifiant du produit

Url :`[GET] v2/catalogue/get/{guid:guid}/dispos/locale`

Paramètres : 

- **guid** (System.Guid) : L'identifiant du produit

Url :`[GET] v2/catalogue/get/{guid:guid}/dispos/{zonegeo}`

Paramètres : 

- **guid** (System.Guid) : L'identifiant du produit
- **zonegeo** (string) : La zone géographique des magasins dont vous souhaitez récupérer les stocks

Type de retour : `ArticleDispoDigiSign[]`

Type(s) de données :

```csharp
class ArticleDispoPhygitalDetail
{
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.TypeDisponibilite TypeDispo { get; set; }
	Guid? MagasinGuid { get; set; }
	string MagasinLibelle { get; set; }
	System.Guid ArticleGuid { get; set; }
	string ArticleReference { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.NiveauDisponibilite Disponibilite { get; set; }
	string Commentaire { get; set; }
	decimal? Stock { get; set; }
	string CodeStatus { get; set; }
}

enum TypeDisponibilite
{
	Centrale, // =0
	Magasin, // =1
	Locale, // =2
}

enum NiveauDisponibilite
{
	NonDisponible, // =0
	Disponible, // =1
	DernierePieces, // =2
}

class ArticleDispoDigiSign
{
	Guid? MagasinGuid { get; set; }
	string Libelle { get; set; }
	bool EstDisponible { get; set; }
	string Commentaire { get; set; }
	decimal? Stock { get; set; }
}

```
