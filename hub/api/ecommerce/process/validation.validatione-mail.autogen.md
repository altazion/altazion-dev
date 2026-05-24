## <span id='validatione-mail'>Validation d'une adresse e-mail</span>

Valide une adresse e-mail

Url :`[GET] /api/process/nui/?action=checkemail&email={email}`

Paramètres : 

- **email** : l'e-mail à valider

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

