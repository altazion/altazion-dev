## <span id='detailparref'>Obtient le détail d'un produit par sa référence</span>

Obtient le détail d'un produit

Url :`[GET] /api/catalog/nui/product?ref={reference}`

Paramètres : 

- **reference** : La référence (ou EAN13) du produit

Type(s) de données :

```csharp
class ArticlePhygitalDetail
{
	ArticleReference[] AutresReferences { get; set; }
	EmplacementMagasin EmplacementStockMagasin { get; set; }
	ArticlePhygitalDimensions Dimensions { get; set; }
	ArticlePhygitalTaxe[] Taxes { get; set; }
	ArticlePhygitalBase Parent { get; set; }
	ArticleDispoDigiSign[] Disponibilites { get; set; }
	ArticlePhygitalVersion[] Instances { get; set; }
	String[] Documents { get; set; }
	String[] Videos { get; set; }
	ArticleImage[] MoreImages { get; set; }
	String[] Labels { get; set; }
	Dictionary<String,String> Attributs { get; set; }
	Dictionary<String,String> AttributsPrives { get; set; }
	String[] LogosUrls { get; set; }
	Dictionary<String,ArticlePhygitalAssocie[]> ArticlesAssocies { get; set; }
	ArticlePhygitalBase[] SuggestionsAuto { get; set; }
	ServicesComplementaires[] Services { get; set; }
	AvisClient[] Avis { get; set; }
	string Url { get; set; }
	string OriginalImageUrl { get; set; }
	ArticlePhygitalLogistiqueSpecificites LogistiqueSpecificites { get; set; }
	InfosMarketPlace MarketPlace { get; set; }
	bool EstEnPromo { get; set; }
	decimal? PctRemise { get; set; }
	Guid[] AllTags { get; set; }
	string IntermediateImage { get; set; }
	string Marque { get; set; }
	decimal? SegmentationPrincipalePk { get; set; }
	string MainImage { get; set; }
	string SmallImage { get; set; }
	Object MainImageObject { get; set; }
	string Tag { get; set; }
	bool DisponibleCommande { get; set; }
	bool DisponibleCentrale { get; set; }
	bool DisponibleMagasin { get; set; }
	TypeStock TypeStockage { get; set; }
	bool EstImmateriel { get; }
	bool EstArchive { get; set; }
	bool EstLivrable { get; set; }
	long ID { get; set; }
	Guid Guid { get; set; }
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
	int? SousFamilleId { get; set; }
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
	MetaTypeArticle MetaType { get; set; }
	bool PromoDefinie { get; }
	int ScoreRisque { get; set; }
}

class ArticleReference
{
	string Reference { get; set; }
	string Type { get; set; }
	bool EstPrincipale { get; set; }
}

enum EmplacementMagasin
{
	Inconnu, // =0
	EnSurface, // =1
	EnReserve, // =2
}

class ArticlePhygitalDimensions
{
	decimal PoidsBrut { get; set; }
	decimal HauteurBrut { get; set; }
	decimal LargeurBrut { get; set; }
	decimal ProfondeurBrut { get; set; }
	decimal? PoidsNet { get; set; }
	decimal? HauteurNet { get; set; }
	decimal? LargeurNet { get; set; }
	decimal? ProfondeurNet { get; set; }
}

class ArticlePhygitalTaxe
{
	string Libelle { get; set; }
	string Code { get; set; }
	decimal Montant { get; set; }
	bool EstInclusDansPrix { get; set; }
}

class ArticlePhygitalBase
{
	bool EstEnPromo { get; set; }
	decimal? PctRemise { get; set; }
	Guid[] AllTags { get; set; }
	string IntermediateImage { get; set; }
	string Marque { get; set; }
	decimal? SegmentationPrincipalePk { get; set; }
	string MainImage { get; set; }
	string SmallImage { get; set; }
	Object MainImageObject { get; set; }
	string Tag { get; set; }
	bool DisponibleCommande { get; set; }
	bool DisponibleCentrale { get; set; }
	bool DisponibleMagasin { get; set; }
	TypeStock TypeStockage { get; set; }
	bool EstImmateriel { get; }
	bool EstArchive { get; set; }
	bool EstLivrable { get; set; }
	long ID { get; set; }
	Guid Guid { get; set; }
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
	int? SousFamilleId { get; set; }
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
	MetaTypeArticle MetaType { get; set; }
	bool PromoDefinie { get; }
	int ScoreRisque { get; set; }
}

class ArticleDispoDigiSign
{
	Guid? MagasinGuid { get; set; }
	string Libelle { get; set; }
	bool EstDisponible { get; set; }
	string Commentaire { get; set; }
	decimal? Stock { get; set; }
}

class ArticlePhygitalVersion
{
	Dictionary<String,String> Attributs { get; set; }
	Dictionary<String,String> AttributsPrives { get; set; }
	int Importance { get; set; }
	bool EstEnPromo { get; set; }
	decimal? PctRemise { get; set; }
	Guid[] AllTags { get; set; }
	string IntermediateImage { get; set; }
	string Marque { get; set; }
	decimal? SegmentationPrincipalePk { get; set; }
	string MainImage { get; set; }
	string SmallImage { get; set; }
	Object MainImageObject { get; set; }
	string Tag { get; set; }
	bool DisponibleCommande { get; set; }
	bool DisponibleCentrale { get; set; }
	bool DisponibleMagasin { get; set; }
	TypeStock TypeStockage { get; set; }
	bool EstImmateriel { get; }
	bool EstArchive { get; set; }
	bool EstLivrable { get; set; }
	long ID { get; set; }
	Guid Guid { get; set; }
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
	int? SousFamilleId { get; set; }
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
	MetaTypeArticle MetaType { get; set; }
	bool PromoDefinie { get; }
	int ScoreRisque { get; set; }
}

enum TypeStock
{
	NonStocke, // =0
	Immateriel, // =1
	StockeFifo, // =2
	StockePump, // =3
}

enum MetaTypeArticle
{
	Produit, // =0
	FraisDePort, // =1
	Avantages, // =2
	Services, // =3
	Loyers, // =4
	Lot, // =5
	Financier, // =6
	Taxe, // =7
	LicenceEtBrevet, // =8
}

class ArticleImage
{
	string UrlSmall { get; set; }
	string UrlBig { get; set; }
}

class ArticlePhygitalAssocie
{
	decimal QteParParent { get; set; }
	string Raison { get; set; }
	int Importance { get; set; }
	bool EstEnPromo { get; set; }
	decimal? PctRemise { get; set; }
	Guid[] AllTags { get; set; }
	string IntermediateImage { get; set; }
	string Marque { get; set; }
	decimal? SegmentationPrincipalePk { get; set; }
	string MainImage { get; set; }
	string SmallImage { get; set; }
	Object MainImageObject { get; set; }
	string Tag { get; set; }
	bool DisponibleCommande { get; set; }
	bool DisponibleCentrale { get; set; }
	bool DisponibleMagasin { get; set; }
	TypeStock TypeStockage { get; set; }
	bool EstImmateriel { get; }
	bool EstArchive { get; set; }
	bool EstLivrable { get; set; }
	long ID { get; set; }
	Guid Guid { get; set; }
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
	int? SousFamilleId { get; set; }
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
	MetaTypeArticle MetaType { get; set; }
	bool PromoDefinie { get; }
	int ScoreRisque { get; set; }
}

class ServicesComplementaires
{
	bool SelectionneParDefaut { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	decimal PuHT { get; set; }
	decimal PuTTC { get; set; }
}

class AvisClient
{
	Guid Guid { get; set; }
	Guid ArticleGuid { get; set; }
	string Nom { get; set; }
	string Message { get; set; }
	Guid? ClientGuid { get; set; }
	string Email { get; set; }
	bool EstValide { get; set; }
	DateTime Date { get; set; }
	decimal Note { get; set; }
}

class ArticlePhygitalLogistiqueSpecificites
{
	string TypePreparation { get; set; }
	bool MatiereDangereuse { get; set; }
	bool RestrictionsExport { get; set; }
}

class InfosMarketPlace
{
	ArticleMarketPlace VendeurPrincipal { get; set; }
	ArticleMarketPlace[] VendeursSecondaires { get; set; }
}

class ArticleMarketPlace
{
	string NomVendeur { get; set; }
	decimal Prix { get; set; }
	decimal? PrixPromotionnel { get; set; }
	DateTime? DateDebutPromotion { get; set; }
	DateTime? DateFinPromotion { get; set; }
}

```

