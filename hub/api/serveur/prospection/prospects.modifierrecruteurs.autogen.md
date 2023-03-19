## <span id='modifierrecruteurs'>Recruteurs (modifier)</span>

Modifier un recruteur de prospects

Url :`[PATCH] app/prospection/recruteurs`

Paramètres : 

- en tant que body, un objet Recruteur : Le recruteur à modifier

Type de retour : `Recruteur`

Type(s) de données :

```csharp
class Recruteur
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	bool EstRectruteurInterne { get; set; }
}

```

