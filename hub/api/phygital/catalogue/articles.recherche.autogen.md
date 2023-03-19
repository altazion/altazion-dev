## <span id='recherche'>Recherche</span>

Effectue une recherche / descente produit et retourne les produits correspondants

Url :`[GET] v2/catalogue/search/{startIndex:int}/{pageSize:int?}`

Paramètres : 

- **startIndex** (int) : Index de début de la recherche, commence à 0
- **pageSize** (System.Int32?) : Nombre d'éléments à retourner

Url :`[GET] v2/catalogue/search/{facets}/{startIndex:int}/{pageSize:int?}`

Paramètres : 

- **startIndex** (int) : Index de début de la recherche, commence à 0
- **pageSize** (System.Int32?) : Nombre d'éléments à retourner
- **facets** (CPointSoftware.Equihira.Extensibility.ContexteRechercheValeur) : les critères (voir remarques)

Url :`[POST] v2/catalogue/search/{sort?}/{startIndex:int?}/{pageSize:int?}`

Paramètres : 

- **startIndex** (int) : Index de début de la recherche, commence à 0
- **pageSize** (System.Int32?) : Nombre d'éléments à retourner
- **sort** (string) : Code du tri à appliquer

Url :`[POST] v2/catalogue/search/{startIndex:int?}/{pageSize:int?}`

Paramètres : 

- **startIndex** (int) : Index de début de la recherche, commence à 0
- **pageSize** (System.Int32?) : Nombre d'éléments à retourner

Url :`[GET] v2/catalogue/search/{facets}/{sort?}/{startIndex:int?}/{pageSize:int?}`

Paramètres : 

- **startIndex** (int) : Index de début de la recherche, commence à 0
- **pageSize** (System.Int32?) : Nombre d'éléments à retourner
- **facets** (CPointSoftware.Equihira.Extensibility.ContexteRechercheValeur) : les critères (voir remarques)
- **sort** (string) : Code du tri à appliquer

Type de retour : `SimplementEResultat`

Type(s) de données :

```csharp
class SimplementEResultat
{
	CPointSoftware.Equihira.Extensibility.ContexteRechercheValeur Recherche { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.CritereRechercheArticle[] Criteres { get; set; }
	string UrlRedirectionObligatoire { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.SimplementEResultatHint[] Suggestions { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalBase[] Articles { get; set; }
	int NombreTotalArticles { get; set; }
	int IndexDebutRecherche { get; set; }
}

class ContexteRechercheValeur
{
	CPointSoftware.Equihira.Extensibility.RechercheCritereValeur[] Criteres { get; set; }
	CPointSoftware.Equihira.Extensibility.RechercheSegmentation[] Segmentations { get; set; }
	CPointSoftware.Equihira.Extensibility.RechercheMarque[] Marques { get; set; }
	System.String[] Keywords { get; set; }
	Guid? VitrineGuid { get; set; }
	string OriginalRequest { get; set; }
}

class CritereRechercheArticle
{
	string Libelle { get; set; }
	string Code { get; set; }
	string CodeInterne { get; set; }
	bool AutoriseMultiValeur { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.CritereRechercheArticleType TypeCritere { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.CritereRechercheArticleValeurPossible[] ValeursEnumerees { get; set; }
}

enum CritereRechercheArticleType
{
	TexteLibre, // =0
	ValeurEnumeree, // =1
	Interval, // =2
	IntervalAvecValeurs, // =3
	Booleen, // =4
}

class CritereRechercheArticleValeurPossible
{
	string Groupe { get; set; }
	int Comptage { get; set; }
	string Libelle { get; set; }
	string CodeInterne { get; set; }
	string Critere { get; set; }
	string Valeur { get; set; }
	int Importance { get; set; }
	decimal? Min { get; set; }
	decimal? Max { get; set; }
}

class SimplementEResultatHint
{
	CPointSoftware.Equihira.Extensibility.TypeContenuRechercheHint Type { get; set; }
	string ValeurKeyword { get; set; }
	string ValeurUrl { get; set; }
	string Libelle { get; set; }
}

enum TypeContenuRechercheHint
{
	CorrectionOrthographique, // =0
	PlusDeChoix, // =1
}

class ArticlePhygitalBase
{
	decimal? AvisNote { get; set; }
	bool EstEnPromo { get; set; }
	decimal? PctRemise { get; set; }
	System.Guid[] AllTags { get; set; }
	string UrlExterne { get; set; }
	string IntermediateImage { get; set; }
	string Marque { get; set; }
	decimal? SegmentationPrincipalePk { get; set; }
	string MainImage { get; set; }
	string SmallImage { get; set; }
	System.Object MainImageObject { get; set; }
	string Tag { get; set; }
	bool DisponibleCommande { get; set; }
	bool DisponibleCentrale { get; set; }
	bool DisponibleMagasin { get; set; }
	CPointSoftware.Equihira.Common.TypeStock TypeStockage { get; set; }
	bool EstImmateriel { get; }
	bool EstArchive { get; set; }
	bool EstLivrable { get; set; }
	long ID { get; set; }
	System.Guid Guid { get; set; }
	decimal PuHT { get; set; }
	decimal PuTTC { get; set; }
	decimal PuTVA { get; }
	decimal? PuPromoHT { get; set; }
	decimal? PuPromoTTC { get; set; }
	DateTime? DateDebutPromo { get; set; }
	DateTime? DateFinPromo { get; set; }
	DateTime DateCreation { get; set; }
	string Libelle { get; set; }
	string Reference { get; set; }
	int FamilleID { get; set; }
	string Description { get; set; }
	System.Int32? SousFamilleId { get; set; }
	int MarqueId { get; set; }
	byte TauxTvaId { get; set; }
	short TypeArticleId { get; set; }
	bool EstUtilisableInternet { get; set; }
	bool EstPrefacturable { get; set; }
	bool EstMultiversion { get; set; }
	bool EstGenerique { get; set; }
	bool EstCompose { get; set; }
	bool EstPartenaire { get; set; }
	bool EstValide { get; set; }
	int EtatCreation { get; set; }
	decimal? PuConseilleHT { get; set; }
	decimal? PuConseilleTTC { get; set; }
	CPointSoftware.Equihira.Common.MetaTypeArticle MetaType { get; set; }
	bool PromoDefinie { get; }
	int ScoreRisque { get; set; }
}

```

