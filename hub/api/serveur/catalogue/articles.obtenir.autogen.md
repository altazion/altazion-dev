## <span id='obtenir'>Obtenir le détail d'un produit</span>

Récupère le détail d'un produit.

Url :`[GET] app/catalogue/articles/{reference}/data`

Paramètres : 

- **reference** (string) : La référence du produit à obtenir

Url :`[GET] app/catalogue/articles/all/data`

Paramètres : 

- Cette url n'accepte aucun paramètre

Url :`[GET] app/catalogue/articles/{guid:guid}/data`

Paramètres : 

- **guid** (System.Guid) : L'identifiant Guid du produit à obtenir

Url :`[POST] app/catalogue/articles/data`

Paramètres : 

- en tant que body, un objet Guid[] : Les identifiants Guids des produits à obtenir

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

class ArticlePhygitalLot
{
	decimal MontantTtc { get; set; }
	decimal MontantHT { get; set; }
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

class ArticleDispoDigiSign
{
	Guid? MagasinGuid { get; set; }
	string Libelle { get; set; }
	bool EstDisponible { get; set; }
	string Commentaire { get; set; }
	decimal? Stock { get; set; }
	System.Double? Distance { get; set; }
}

class ArticlePhygitalVersion
{
	Dictionary<System.String,System.String> Attributs { get; set; }
	Dictionary<System.String,System.String> AttributsPrives { get; set; }
	int Importance { get; set; }
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
	System.Guid Guid { get; set; }
	System.Guid ArticleGuid { get; set; }
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
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticleMarketPlace VendeurPrincipal { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticleMarketPlace[] VendeursSecondaires { get; set; }
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

