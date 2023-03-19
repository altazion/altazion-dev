## <span id='listestatscommande'>Obtenir la liste des statistiques de commandes</span>

Récupère la liste de statistique de commandes du magasin

Url :`[GET] v2/stores/statistiques/commandes?dateMin={dateMin:DateTime?}&dateMax={dateMax:DateTime?}`

Paramètres : 

- **dateMin** (DateTime?)
- **dateMax** (DateTime?)

Type de retour : `StatistiquesCommande[]`

Type(s) de données :

```csharp
class StatistiquesCommande
{
	PhygitalSite.Clients.ModeCommande ModeCommande { get; set; }
	int Count { get; set; }
}

class ModeCommande
{
	string Code { get; set; }
	string Libelle { get; set; }
}

```

