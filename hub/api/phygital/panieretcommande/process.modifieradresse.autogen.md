## <span id='modifieradresse'>Modifier une adresse</span>

Modifie une adresse

Url :`[POST] v2/process/client/adresses/{guid:guid}`

Paramètres : 

- en tant que body, un objet AdresseClientProcess
- **guid** (Guid)

Type de retour : `ResumeProcess`

Type(s) de données :

```csharp
class ResumeProcess
{
	Guid ClientGuid { get; set; }
	decimal MontantTTC { get; set; }
	string MontantTTCFormate { get; set; }
	decimal MontantTTCRestant { get; set; }
	string MontantTTCRestantFormate { get; set; }
	Guid ModeLivraisonGuid { get; set; }
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
	Guid GuidCommande { get; set; }
	String[] Tags { get; set; }
	AdresseClientProcess AdresseLivraison { get; set; }
	AdresseClientProcess AdresseFacturation { get; set; }
	PointLivraisonDetailProcess PointLivraisonAdresse { get; set; }
	ReglementProcess[] Reglements { get; set; }
}

class AdresseClientProcess
{
	Guid Guid { get; set; }
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

```
