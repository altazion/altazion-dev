## <span id='nomlivraisondefinir'>Définir le nom de la personne retirant le colis</span>

Définit le nom de la personne qui retirera le colis

Url :`[GET] v2/process/livraison/nom/{nom}`

Paramètres : 

- **nom** (string) : Le nom de la personne qui retirera le colis

Url :`[POST] v2/process/livraison/nom`

Paramètres : 

- Cette url n'accepte aucun paramètre

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
