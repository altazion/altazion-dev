## <span id='programmesliste'>Obtenir les programmes de fidélité</span>

Récupère les programmes de fidélités actifs pour un pays

Url :`[GET] v2/fidelite/programmes/{pay_pk}?enseigneGuid={enseigneGuid:Guid?}`

Paramètres : 

- **pay_pk** (string) : Code pays pour obtenir les programmes de fidélité
- **enseigneGuid** (Guid?) : Guid de l'enseigne

Type de retour : `LoyaltyProgram[]`

Type(s) de données :

```csharp
class LoyaltyProgram
{
	System.Guid Guid { get; set; }
	PhygitalSite.Crm.LoyaltyController+LoyaltyKind Kind { get; set; }
	string Label { get; set; }
}

enum LoyaltyKind
{
	Cagnottage, // =0
	Points, // =1
}

```

