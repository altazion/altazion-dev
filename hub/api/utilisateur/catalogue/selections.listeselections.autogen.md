## <span id='listeselections'>Obtenir la liste des sélections</span>

Récupère la liste des sélections.

Url :`[GET] api/catalogue/selections`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `VitrineData[]`

Type(s) de données :

```csharp
class VitrineData
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string Groupe { get; set; }
	bool EstAutomatique { get; set; }
	Guid? CampagneAssocieeGuid { get; set; }
}

```

