## <span id='verife-mail'>Vérification d'un e-mail</span>

Vérifie l'état d'inscription d'un e-mail

Url :`[GET] v2/process/checkemail?email={email:string}`

Paramètres : 

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

