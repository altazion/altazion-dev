## <span id='verifier'>Vérifier les opt-ins d'un e-mail</span>

Récupère le détails des opt-ins associés à un email.

Url :`[GET] v2/newsletters/opt-in/status?email={email:string}`

Paramètres : 

- **email** (string) : L'email à vérifier

Type de retour : `NewsletterInfo[]`

Type(s) de données :

```csharp
class NewsletterInfo
{
	string Libelle { get; set; }
	int Id { get; set; }
	bool EstAbonne { get; set; }
	DateTime? DerniereModif { get; set; }
}

```

