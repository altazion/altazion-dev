## <span id='articlesparsegmentation'>Obtenir les articles d'une segmentation</span>

Récupère tous les articles d'une segmentation.

Url :`[GET] api/catalogue/articles/parsegmentation/{seg_pk}?sit_pk={sit_pk:int}`

Paramètres : 

- **seg_pk** (int) : Identifiant de la segmentation voulue
- **sit_pk** (int) : Identifiant du site

Type de retour : `ArticlePhygitalBase[]`

Type(s) de données :

```csharp
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
