## <span id='modifieremplacement'>Modifier un emplacement</span>

Modifie un emplacement

Url :`[PUT] api/stocks/emplacements`

Paramètres : 

- en tant que body, un objet UpdateEmplacement : Les informations sur l'emplacement à modifier

Type de retour : `Emplacement`

Type(s) de données :

```csharp
class Emplacement
{
	bool EstArchive { get; set; }
	Guid? ZonePreparationGuid { get; set; }
	System.Guid ID { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	System.Guid IdDepot { get; set; }
}

class UpdateEmplacement
{
	System.Guid ID { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	System.Guid IdDepot { get; set; }
}

```

