## <span id='modifiermodereglementdetail'>Modifie un mode de réglement détail</span>

Modifier un mode de réglement détail

Url :`[PUT] api/financier/reglements/modes/details`

Paramètres : 

- en tant que body, un objet ModeReglementDetail

Type de retour : `bool`

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

