## <span id='listeenattente'>Obtenir la liste des commandes en attente</span>

Récupère la liste des commandes en attente (par magasin, en précisant son guid, pour le magasin local, ou pour toute l'enseigne)

Url :`[GET] v2/orders/waiting?nbMaxHours={nbMaxHours:int}&uniquementLocal={uniquementLocal:bool}`

Paramètres : 

- **nbMaxHours** (int)
- **uniquementLocal** (bool)

Url :`[GET] v2/orders/waiting/mystore?nbMaxHours={nbMaxHours:int}&uniquementLocal={uniquementLocal:bool}`

Paramètres : 

- **nbMaxHours** (int)
- **uniquementLocal** (bool)

Url :`[GET] v2/orders/waiting/{codeMagasin}?nbMaxHours={nbMaxHours:int}&uniquementLocal={uniquementLocal:bool}`

Paramètres : 

- **nbMaxHours** (int)
- **uniquementLocal** (bool)
- **codeMagasin** (string) : Identifiant du magasin

Url :`[GET] v2/orders/waiting/{guidMagasin:guid}?nbMaxHours={nbMaxHours:int}&uniquementLocal={uniquementLocal:bool}`

Paramètres : 

- **nbMaxHours** (int)
- **uniquementLocal** (bool)
- **guidMagasin** (System.Guid) : Identifiant du magasin

Type de retour : `EbcCommandeEnAttente[]`

Type(s) de données :

```csharp
class EbcCommandeEnAttente
{
	System.Guid Guid { get; set; }
	DateTime Date { get; set; }
	string Numero { get; set; }
	string NomLivraison { get; set; }
	string Tags { get; set; }
	PhygitalSite.Clients.EbcEtatCommande Etat { get; set; }
	string DestinationLivraison { get; set; }
	string IdentifiantPreparation { get; set; }
	bool EstProcessComplet { get; set; }
	PhygitalSite.Clients.EbcEtatPreparation ResultatPreparation { get; set; }
}

enum EbcEtatCommande
{
	EnAttente, // =0
	EnTraitement, // =1
	Traite, // =2
}

enum EbcEtatPreparation
{
	Inconnu, // =0
	Annulee, // =1
	PrepareIntegralement, // =2
	PreparePartiellement, // =3
}

```

