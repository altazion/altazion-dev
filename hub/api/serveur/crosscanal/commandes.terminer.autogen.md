## <span id='terminer'>Terminer</span>

Marque une commande comme terminée

Url :`[POST] app/crosscanal/commandes/{siteId:int}/{orderGuid:guid}/terminer`

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

```
