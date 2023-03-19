## <span id='connexionguest'>Lance un process de commande guest</span>

Démarre un process via un guest-checkout

Url :`[POST] v2/process/login/guest?username={username:string}&mode={mode:string}`

Paramètres : 

- **username** (string) : L'email de connexion
- en tant que body, un objet CompteEtAdresseClientProcess : Les informations du client
- **mode** (string) : Le mode de connexion. Seule la valeur 'silent' est autorisé actuellement

Type de retour : `ResumeProcess`

Type(s) de données :

```csharp
class ResumeProcess
{
	System.Guid ClientGuid { get; set; }
	decimal MontantTTC { get; set; }
	string MontantTTCFormate { get; set; }
	decimal MontantTTCRestant { get; set; }
	string MontantTTCRestantFormate { get; set; }
	System.Guid ModeLivraisonGuid { get; set; }
	string ModeLivraison { get; set; }
	decimal ModeLivraisonMontantTTC { get; set; }
	DateTime DateLivraisonPrevue { get; set; }
	bool DemandeAdresseLivraison { get; set; }
	bool DemandePointLivraison { get; set; }
	bool EstLivraisonMagasin { get; set; }
	string NomDestinataire { get; set; }
	bool EstValidable { get; set; }
	bool EstTerminee { get; set; }
	string NumeroCommande { get; set; }
	System.Guid GuidCommande { get; set; }
	System.String[] Tags { get; set; }
	CreoIgnem.Phygital.Tools.AdresseClientProcess AdresseLivraison { get; set; }
	CreoIgnem.Phygital.Tools.AdresseClientProcess AdresseFacturation { get; set; }
	CreoIgnem.Phygital.Tools.PointLivraisonDetailProcess PointLivraisonAdresse { get; set; }
	CreoIgnem.Phygital.Tools.ReglementProcess[] Reglements { get; set; }
}

class CompteEtAdresseClientProcess
{
	string Password { get; set; }
	CreoIgnem.Phygital.Tools.CompteEtAdresseClientProcessLoyalty Fidelite { get; set; }
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Prenom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string CP { get; set; }
	string PayPk { get; set; }
	string Region { get; set; }
	string Email { get; set; }
}

class CompteEtAdresseClientProcessLoyalty
{
	System.Guid[] ProgrammesAActiver { get; set; }
	CreoIgnem.Phygital.Tools.CompteEtAdresseClientProcessAccount[] IdentifiantsExistants { get; set; }
}

class CompteEtAdresseClientProcessAccount
{
	System.Guid ProgrammeGuid { get; set; }
	string Identifiant { get; set; }
}

```

