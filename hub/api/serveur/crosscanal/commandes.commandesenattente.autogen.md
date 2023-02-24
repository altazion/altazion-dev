## <span id='commandesenattente'>Commandes en attente</span>

Récupère la liste des 50 dernières commandes 'magasin'

Url :`[GET] app/crosscanal/commandes/enattente/{siteId:int}/instore/local`

Paramètres : 

- **siteId** (int) : L'identifiant du catalogue

Url :`[GET] app/crosscanal/commandes/enattente/{siteId:int}/instore/{magasinGuid:guid}`

Paramètres : 

- **siteId** (int) : L'identifiant du catalogue
- **magasinGuid** (System.Guid) : L'identifiant du magasin

Type de retour : `CommandeEnAttente[]`

Type(s) de données :

```csharp
class CommandeEnAttente
{
	System.Guid Guid { get; set; }
	DateTime Date { get; set; }
	string Numero { get; set; }
	string NomLivraison { get; set; }
	string Tags { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+CommandeEtat Etat { get; set; }
	string DestinationLivraison { get; set; }
	string IdentifiantPreparation { get; set; }
	bool EstProcessComplet { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+EtatPreparation ResultatPreparation { get; set; }
}

enum CommandeEtat
{
	EnAttente, // =0
	EnTraitement, // =1
	Traite, // =2
	Termine, // =3
}

enum EtatPreparation
{
	Inconnu, // =0
	Annulee, // =1
	PrepareIntegralement, // =2
	PreparePartiellement, // =3
}

```
