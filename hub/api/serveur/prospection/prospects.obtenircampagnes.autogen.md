## <span id='obtenircampagnes'>Campagnes (liste)</span>

Créé une nouvelle campagne de prospection

Url :`[GET] app/prospection/campagnes`

Paramètres : 

- Cette url n'accepte aucun paramètre

Url :`[GET] app/prospection/recruteurs/{guidRecruteur:guid}/campagnes`

Paramètres : 

- **guidRecruteur** (System.Guid) : L'identifiant du recruteur

Url :`[PUT] app/prospection/recruteurs/{guidRecruteur:guid}/campagnes`

Paramètres : 

- **guidRecruteur** (System.Guid) : L'identifiant du recruteur
- en tant que body, un objet CampagneRecrutementCreationData

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

class CampagneRecrutementCreationData
{
	string Libelle { get; set; }
	string Type { get; set; }
	DateTime? Debut { get; set; }
	DateTime? Fin { get; set; }
	Guid? CampagneCommercialGuid { get; set; }
}

```
