## <span id='obtenirrecruteurs'>Recruteurs (liste)</span>

Récupère la liste des recruteurs de prospects

Url :`[GET] api/prospection/recruteurs`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `Recruteur[]`

Type(s) de données :

```csharp
class Recruteur
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	bool EstRectruteurInterne { get; set; }
}

```
