## <span id='obtenirdetailsmodesreglements'>Obtenir la liste des détails des modes de réglements</span>

Récupère la liste des détails des modes réglements

Url :`[GET] api/financier/reglements/modes/details?guid={guid:Guid?}`

Paramètres : 

- **guid** (Guid?) : L'id du site à rechercher

Type de retour : `ModeReglementDetail[]`

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
