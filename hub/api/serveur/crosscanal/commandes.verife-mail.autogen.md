## <span id='verife-mail'>Vérification d'un e-mail</span>

Connecte un client sur le site.

Url :`[GET] app/crosscanal/commandes/{siteId:int}/clients/checkemail?email={email:string}`

Paramètres : 

- **siteId** (int) : L'identifiant du site
- **email** (string) : L'e-mail à vérifier

Type de retour : `MailCheckResult`

Type(s) de données :

```csharp
class MailCheckResult
{
	bool EstDejaExistante { get; set; }
	string Suggestion { get; set; }
	bool AvantagesFideliteDisponibles { get; set; }
	string Source { get; set; }
	bool EstInvalide { get; set; }
	bool EstAvecCompteClient { get; set; }
	bool EstGuest { get; set; }
}

```

