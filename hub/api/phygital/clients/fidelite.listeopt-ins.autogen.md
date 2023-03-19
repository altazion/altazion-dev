## <span id='listeopt-ins'>Obtenir la liste des opt-ins d'un client</span>

Récupère l'état d'opt-in d'un e-mail

Url :`[GET] v2/customers/newsletter/status?email={email:string}`

Paramètres : 

- **email** (string) : l'e-mail à tester

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

