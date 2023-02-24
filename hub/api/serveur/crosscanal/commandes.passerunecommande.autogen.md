## <span id='passerunecommande'>Créer une nouvelle commande et la valider</span>

Crée une nouvelle commande destinée à un magasin.

Url :`[PUT] app/crosscanal/commandes/{siteId:int}/instore/{magasinGuid:guid}`

Paramètres : 

- **siteId** (int) : L'identifiant du catalogue
- **magasinGuid** (System.Guid) : L'identifiant du magasin dans lequel sera envoyée la commande
- en tant que body, un objet Commande : Le contenu de la commande

Type de retour : `Guid`

Type(s) de données :

```csharp
class Commande
{
	string NomLivraison { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+ArticleQuantite[] Produits { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+TypeCommande TypeCommande { get; set; }
	Guid? ClientGuid { get; set; }
	Guid? AdresseLivraisonGuid { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+Reglement[] Reglements { get; set; }
}

class ArticleQuantite
{
	System.Guid ArticleGuid { get; set; }
	decimal Quantite { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+ArticleQuantiteDependant[] ArticlesDependant { get; set; }
}

class ArticleQuantiteDependant
{
	System.Guid ArticleGuid { get; set; }
	decimal Quantite { get; set; }
}

enum TypeCommande
{
	ReservationClient, // =0
	ReservationPrestataire, // =1
	CommandeClient, // =2
}

class Reglement
{
	decimal Montant { get; set; }
	System.Guid ModeReglementGuid { get; set; }
	string NumeroTransaction { get; set; }
	string CodeEtat { get; set; }
}

```
