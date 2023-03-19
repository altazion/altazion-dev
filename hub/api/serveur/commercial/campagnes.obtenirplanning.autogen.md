## <span id='obtenirplanning'>Obtenir le planning des opérations</span>

Récupère le planning des opérations commerciales

Url :`[GET] app/commercial/planning?min={min:DateTime?}&max={max:DateTime?}&campagneGuid={campagneGuid:Guid?}`

Paramètres : 

- **min** (DateTime?) : si null/non fourni : le planning commencera 7 jours avant la date courante
- **max** (DateTime?) : si null/non fourni : le planning s'étendra jusqu'à 21 jours après la date courante
- **campagneGuid** (Guid?) : Si vous précisez un guid de campagne, seules les opérations associées à celle-ci seront retournées

Type de retour : `OperationData[]`

Type(s) de données :

```csharp
class OperationData
{
	GestomWebApi.Commercial.OpeCommController+MetaTypeOperation MetaType { get; set; }
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string TypeOperation { get; set; }
	System.Guid DestinationGuid { get; set; }
	string Destination { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
	System.Guid CampagneGuid { get; set; }
	string CampagneLibelle { get; set; }
	bool Valide { get; set; }
}

enum MetaTypeOperation
{
	Operation, // =0
	Avantages, // =1
	GrilleTarif, // =2
	Promotion, // =3
	Newsletter, // =4
	Fidelite, // =5
	OperationWeb, // =6
	OperationDigisign, // =7
}

```

