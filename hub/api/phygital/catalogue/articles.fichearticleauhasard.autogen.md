## <span id='fichearticleauhasard'>Obtenir un article au hasard</span>

Récupère une fiche produit, choisie au hasard, ou une liste de fiches produits

Url :`[GET] v2/catalogue/get/random-product?uniquementdispo={uniquementdispo:bool}`

Paramètres : 

- **uniquementdispo** (bool) : true pour ne récupérer que des produits disponibles

Url :`[GET] v2/catalogue/get/random-product/{count:int}?uniquementdispo={uniquementdispo:bool}`

Paramètres : 

- **uniquementdispo** (bool) : true pour ne récupérer que des produits disponibles
- **count** (int) : Le nombre de produits à récupérer

Type de retour : `ArticlePhygitalDetail[]`

Type(s) de données :

```csharp
class ArticlePhygitalDetail
{
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticleReference[] AutresReferences { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.EmplacementMagasin EmplacementStockMagasin { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalLot[] Lots { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalDimensions Dimensions { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalTaxe[] Taxes { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalBase Parent { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticleDispoDigiSign[] Disponibilites { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalVersion[] Instances { get; set; }
	System.String[] Documents { get; set; }
	System.String[] Videos { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticleImage[] MoreImages { get; set; }
	System.String[] Labels { get; set; }
	Dictionary<System.String,System.String> Attributs { get; set; }
	Dictionary<System.String,System.String> AttributsPrives { get; set; }
	System.String[] LogosUrls { get; set; }
	Dictionary<System.String,CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalAssocie[]> ArticlesAssocies { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalBase[] SuggestionsAuto { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ServicesComplementaires[] Services { get; set; }
	CPointSoftware.Equihira.Common.AvisClient[] Avis { get; set; }
	string Url { get; set; }
	string OriginalImageUrl { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalLogistiqueSpecificites LogistiqueSpecificites { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.InfosMarketPlace MarketPlace { get; set; }
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

