## <span id='details'>Détail d'une commande</span>

Récupère le détail d'une commande

Url :`[GET] app/crosscanal/commandes/{siteId:int}/{numero}`

Paramètres : 

- **siteId** (int) : L'identifiant du catalogue
- **numero** (string) : Le numéro de la commande

Url :`[GET] app/crosscanal/commandes/{siteId:int}/{orderGuid:guid}`

Paramètres : 

- **siteId** (int) : L'identifiant du catalogue
- **orderGuid** (System.Guid) : L'identifiant interne de la commande

Type de retour : `BonCommandeDetails`

Type(s) de données :

```csharp
class BonCommandeDetails
{
	System.Guid Guid { get; set; }
	DateTime Date { get; set; }
	string Etat { get; set; }
	string EtatDetaille { get; set; }
	string Numero { get; set; }
	decimal MontantCommande { get; set; }
	decimal? MontantExpedie { get; set; }
	string EmailClient { get; set; }
	string NomClient { get; set; }
	string TelClient { get; set; }
	string Tel2Client { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+AdresseClientProcess AdresseLivraison { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+PointLivraisonProcess PointDeLivraison { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+BonCommandeLigne[] Lignes { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+BonCommandeColis[] Colis { get; set; }
}

class AdresseClientProcess
{
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Prenom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string CP { get; set; }
	string PayPk { get; set; }
	string Email { get; set; }
}

class PointLivraisonProcess
{
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string CP { get; set; }
	string Email { get; set; }
	string Indication { get; set; }
	System.String[] Services { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+GeoLocalisationPointLivraisonProcess Localisation { get; set; }
	bool EstActif { get; set; }
}

class GeoLocalisationPointLivraisonProcess
{
	decimal Lattitude { get; set; }
	decimal Longitude { get; set; }
}

class BonCommandeLigne
{
	System.Guid Guid { get; set; }
	System.Guid ArticleGuid { get; set; }
	string Reference { get; set; }
	string Libelle { get; set; }
	decimal Quantite { get; set; }
	decimal QuantiteExpediee { get; set; }
	decimal PuTtc { get; set; }
}

class BonCommandeColis
{
	System.Guid Guid { get; set; }
	string Transporteur { get; set; }
	DateTime DateEnvoi { get; set; }
	bool EstLivre { get; set; }
}

```
