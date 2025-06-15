## <span id='obtenirdepotsetemplacements'>Obtenir tous les dépôts et leur emplacements</span>

Récupère tous les dépots avec la liste de leurs emplacements

Url :`[GET] api/stocks/depots/emplacements`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `Depot[]`

Type(s) de données :

```csharp
class Depot
{
	bool EstArchive { get; set; }
	GestomWebApi.Logistique.StockController+Emplacement[] Emplacements { get; set; }
	System.Guid ID { get; set; }
	string Nom { get; set; }
}

```

