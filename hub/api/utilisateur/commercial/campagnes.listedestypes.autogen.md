## <span id='listedestypes'>Obtenir la liste des types d'opérations</span>

Récupère la liste des types d'opérations possibles

Url :`[GET] api/commercial/typesope?destination={destination:Guid?}`

Paramètres : 

- **destination** (Guid?) : Si non renseigné, tous les types d'opérations seront retournés, quelque soit la destinatio associée

Type de retour : `TypeOpeComm[]`

Type(s) de données :

```csharp
class TypeOpeComm
{
	GestomWebApi.Commercial.OpeCommController+MetaTypeOperation MetaType { get; set; }
	System.Guid Guid { get; set; }
	string Code { get; set; }
	string Namespace { get; set; }
	string Libelle { get; set; }
	System.Guid DestinationGuid { get; set; }
	string DestinationLibelle { get; set; }
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
