## <span id='connexionparguid'>Connecter un utilisateur par son identifiant interne</span>

Connecte un utilisateur et l'associe à la commande

Url :`[GET] v2/process/login/byguid/{clientGuid:guid}?mode={mode:string}`

Paramètres : 

- **clientGuid** (System.Guid)
- **mode** (string)

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

```

