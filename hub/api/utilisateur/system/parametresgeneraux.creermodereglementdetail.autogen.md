## <span id='creermodereglementdetail'>Créer un mode de réglement détail</span>

Créer un mode de réglement détail

Url :`[POST] api/financier/reglements/modes/details`

Paramètres : 

- en tant que body, un objet ModeReglementDetail

Type de retour : `Guid`

Type(s) de données :

```csharp
class ModeReglementDetail
{
	System.Guid Guid { get; set; }
	System.Guid ModeReglementGuid { get; set; }
	string Libelle { get; set; }
	string CompteCompta { get; set; }
}

```
