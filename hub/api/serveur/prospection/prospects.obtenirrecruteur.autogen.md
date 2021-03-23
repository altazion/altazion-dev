## <span id='obtenirrecruteur'>Recruteurs (obtenir)</span>

Récupère un recruteur de prospects

Url :`[GET] app/prospection/recruteurs/{guid:Guid}`

Paramètres : 

- **guid** (Guid) : L'identifiant du recruteur

Type de retour : `Recruteur`

Type(s) de données :

```csharp
class Recruteur
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	bool EstRectruteurInterne { get; set; }
}

```
