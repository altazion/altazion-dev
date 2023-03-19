## <span id='details'>Détail d'une commande</span>

Récupère le détail d'une commande

Url :`[GET] v2/orders/{bcdGuid:guid}`

Paramètres : 

- **bcdGuid** (System.Guid) : L'identifiant de la commande

Url :`[GET] v2/orders/{bcd_numero}?numero={numero:string}`

Paramètres : 

- **numero** (string) : Le numéro de la commande

Type de retour : `BonCommandeDetails`

Type(s) de données :

```csharp
class BonCommandeDetails
{
	string OrigineLibelle { get; set; }
	CreoIgnem.Phygital.Tools.AdresseClientProcess AdresseLivraison { get; set; }
	CreoIgnem.Phygital.Tools.PointLivraisonProcess PointDeLivraison { get; set; }
	PhygitalSite.Clients.BonCommandeLigne[] Lignes { get; set; }
	PhygitalSite.Clients.BonCommandeColis[] Colis { get; set; }
	string MetaType { get; set; }
	string ModeCommande { get; set; }
	System.Guid Guid { get; set; }
	DateTime Date { get; set; }
	string Origine { get; set; }
	string Etat { get; set; }
	string EtatDetaille { get; set; }
	string Numero { get; set; }
	decimal MontantCommande { get; set; }
	decimal? MontantExpedie { get; set; }
	string EmailClient { get; set; }
	string NomClient { get; set; }
	string TelClient { get; set; }
	string Tel2Client { get; set; }
	string NomDestinataire { get; set; }
}

```

