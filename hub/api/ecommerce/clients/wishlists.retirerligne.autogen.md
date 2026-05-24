## <span id='retirerligne'>Retire un article d'un wishlist</span>

Retire un article de la wishlist

Url :`[GET] /api/wishlist/nui/remove?id={liste_guid}&ligne={ligne_guid}`

Paramètres : 

- **liste_guid** : L'identifiant de la wishlist
- **ligne_guid** : Identifiant de la ligne à retirer

Type(s) de données :

```csharp
class WishlistDetails
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	WishlistLigne[] Lignes { get; set; }
}

class WishlistLigne
{
	Guid Guid { get; set; }
	Guid ArticleGuid { get; set; }
	ArticlePhygitalBase Article { get; set; }
	int Quantite { get; set; }
	Guid? RealisationGuid { get; set; }
	string RealisationLibelle { get; set; }
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

```

