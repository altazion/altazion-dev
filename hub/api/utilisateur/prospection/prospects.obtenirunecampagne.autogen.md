## <span id='obtenirunecampagne'>Campagnes (obtenir)</span>

Récupère une campagne de prospection

Url :`[GET] api/prospection/campagnes/{guid:Guid}`

Paramètres : 

- **guid** (System.Guid) : L'identifiant de la campagne

Type de retour : `CampagneRecrutement`

Type(s) de données :

```csharp
class CampagneRecrutement
{
	System.Guid Guid { get; set; }
	System.Guid RecruteurGuid { get; set; }
	string Libelle { get; set; }
	string Type { get; set; }
	DateTime? Debut { get; set; }
	DateTime? Fin { get; set; }
	Guid? CampagneCommercialGuid { get; set; }
}

```
