## <span id='changermagpanier'>Changer le magasin du panier</span>

Change le magasin associer aux articles du panier

Url :`[GET] /api/cart/nui/?action=setmagasinpanier&magasinGuid={magasinGuid}`

Paramètres : 

- **magasinGuid** : Identifiant du magasin

Type(s) de données :

```csharp
class ElementPanier
{
	decimal RemiseTTC { get; set; }
	decimal RemiseHT { get; set; }
	decimal PuHorsRemiseTTC { get; set; }
	decimal PuHorsRemiseHT { get; set; }
	string TypePrepa { get; set; }
	bool ExclusCalculPort { get; set; }
	bool QuantiteFixe { get; set; }
	bool NonModifiable { get; set; }
	Guid LigneGuid { get; set; }
	int SiteId { get; set; }
	Guid? ParentItemLigneGuid { get; set; }
	Guid? AvantageGuid { get; set; }
	string Libelle { get; set; }
	string Reference { get; set; }
	string Erreur { get; set; }
	string IntermediateImage { get; set; }
	string TinyImage { get; set; }
	string InfosPreparation { get; set; }
	decimal? PuHTHorsPromo { get; set; }
	decimal? PuTTCHorsPromo { get; set; }
	Guid? MagasinGuid { get; set; }
	Guid? PartenaireGuid { get; set; }
	string Groupe { get; set; }
	bool EnErreur { get; }
	decimal MontantTTC { get; }
	decimal MontantHT { get; }
	String[] AttributsDifferentiants { get; set; }
	String[] DonneesPersonnalisees { get; set; }
	String[] DetailsFraisAnnexes { get; set; }
	string Commentaire { get; set; }
	Guid[] ModesLivraisonExclus { get; set; }
	MetaTypeArticle TypeArticle { get; set; }
	Guid ArticleGuid { get; set; }
	decimal Quantite { get; set; }
	decimal PuHT { get; set; }
	decimal PuTTC { get; set; }
}

```

