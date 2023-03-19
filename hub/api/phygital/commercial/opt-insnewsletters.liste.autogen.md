## <span id='liste'>Obtenir la liste des opt-ins</span>

Récupère la liste des opt-ins (newsletters) existants

Url :`[GET] v2/newsletters/config`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `NewsletterData[]`

Type(s) de données :

```csharp
class NewsletterData
{
	int Id { get; set; }
	string Nom { get; set; }
	string Description { get; set; }
	bool EstDesabonnable { get; set; }
}

```

