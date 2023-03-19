## <span id='commandepreparee'>Commande Préparee</span>

Cet évènement est déclenché lorsqu'une commande est préparée (partiellement ou intégralement)

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : PréparationBcd
 - **Classe de données** : OmsCommandePreparationEventData

Type(s) de données :

```csharp
enum OmsCommandePoolActorKind
{
	VendeurMarketplace, // =0
	Partenaire, // =1
	Logisticien, // =2
	Magasin, // =3
}

class OmsCommandePreparationEventBprData
{
	Guid ZonePreparationGuid { get; set; }
	OmsCommandePoolActorKind PreparateurType { get; set; }
	Guid PreparateurGuid { get; set; }
	Guid PreparateurNom { get; set; }
	string Numero { get; set; }
	Guid BprGuid { get; set; }
	DateTime DateCreation { get; set; }
	int Etat { get; set; }
	bool EstDeclenche { get; set; }
	bool EstTraite { get; set; }
}

class MagasinBase
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string CodePostal { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string AdressesIP { get; set; }
	string Telephone { get; set; }
	string Fax { get; set; }
	string Email { get; set; }
	string Pays { get; set; }
	bool ActifPourCrossCanal { get; set; }
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

class ArticleBase
{
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
	MetaTypeArticle MetaType { get; set; }
	bool PromoDefinie { get; }
	int ScoreRisque { get; set; }
}

class LigneBonCommande
{
	ArticleBase Article { get; set; }
	Guid Guid { get; set; }
	int NumeroLigne { get; set; }
	Guid ArticleGuid { get; set; }
	decimal Quantite { get; set; }
	decimal PuHt { get; set; }
	decimal PuTtc { get; set; }
	decimal Montant { get; }
	decimal QuantiteExpediee { get; set; }
	decimal MontantExpedie { get; }
	decimal QuantiteAnnulee { get; set; }
	decimal QuantiteManquant { get; set; }
	decimal QuantiteEnPreparation { get; set; }
	Guid BonCommandeGuid { get; set; }
	MetaTypeArticle TypeDeLigne { get; set; }
}

class IntentionReglement
{
	Guid Guid { get; set; }
	Guid ModeReglementGuid { get; set; }
	Guid BonCommandeGuid { get; set; }
	decimal MontantOriginal { get; set; }
	decimal Montant { get; set; }
	DateTime DateEcheance { get; set; }
	string NumPiece { get; set; }
	bool EstRecu { get; set; }
	bool EstValide { get; set; }
	decimal? DepotBanqueId { get; set; }
	Guid? ModeReglementDetailGuid { get; set; }
}

class ClientBase
{
	int Id { get; set; }
	Guid Guid { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string CP { get; set; }
	string PaysPk { get; set; }
	string Ville { get; set; }
	string MainEMail { get; set; }
	short Importance { get; set; }
	bool EstArchive { get; set; }
	DateTime DateCreation { get; set; }
	short TypeClient { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string CompteCompta { get; set; }
	string NumeroTva { get; set; }
	string NomSeul { get; set; }
	string PrenomSeul { get; set; }
	string Civilite { get; set; }
}

class OmsCommandePreparationEventData
{
	bool EstMultiPrepa { get; set; }
	bool EstPrepaTerminee { get; set; }
	OmsCommandePreparationEventBprData BonsPreparation { get; set; }
	Guid BcdGuid { get; set; }
	string Numero { get; set; }
	Guid ClientGuid { get; set; }
	decimal MontantTtc { get; set; }
	decimal MontantHt { get; set; }
	string Origine { get; set; }
	string Type { get; set; }
	MagasinBase MagasinAssocie { get; set; }
	LigneBonCommande[] Lignes { get; set; }
	IntentionReglement[] IntentionsReglement { get; set; }
	ClientBase Client { get; set; }
}

```
