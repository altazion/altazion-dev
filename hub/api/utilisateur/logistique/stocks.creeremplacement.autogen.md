## <span id='creeremplacement'>Créer un nouvel emplacement</span>

Créé un nouvel emplacement

Url :`[POST] api/stocks/emplacements`

Paramètres : 

- en tant que body, un objet NewEmplacement : Les informations sur l'emplacement à créer

Type de retour : `Emplacement`

Type(s) de données :

```csharp
class Emplacement
{
	bool EstArchive { get; set; }
	Guid? ZonePreparationGuid { get; set; }
	int ID { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	int IdDepot { get; set; }
}

class NewEmplacement
{
	string Libelle { get; set; }
	string Code { get; set; }
	int IdDepot { get; set; }
}

```

