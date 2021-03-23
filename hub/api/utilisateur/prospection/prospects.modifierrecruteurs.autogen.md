## <span id='modifierrecruteurs'>Recruteurs (modifier)</span>

Modifier un recruteur de prospects

Url :`[PATCH] api/prospection/recruteurs`

Paramètres : 

- en tant que body, un objet Recruteur : Le recruteur à modifier

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
