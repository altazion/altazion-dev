## <span id='etatprocess'>Obtenir l'état</span>

Récupère l'état/le résumé du process

Url :`[GET] v2/process`

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

class AdresseClientProcess
{
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

class PointLivraisonDetailProcess
{
	CreoIgnem.Phygital.Tools.PointLivraisonHoraireProcess[] Horaires { get; set; }
	string Commentaires { get; set; }
	System.Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string CP { get; set; }
	string Email { get; set; }
	string Indication { get; set; }
	System.String[] Services { get; set; }
	CreoIgnem.Phygital.Tools.GeoLocalisationPointLivraisonProcess Localisation { get; set; }
	bool EstActif { get; set; }
}

class PointLivraisonHoraireProcess
{
	string Jour { get; set; }
	string DebutPeriode1 { get; set; }
	string DebutPeriode2 { get; set; }
	string FinPeriode1 { get; set; }
	string FinPeriode2 { get; set; }
}

class GeoLocalisationPointLivraisonProcess
{
	decimal Lattitude { get; set; }
	decimal Longitude { get; set; }
}

class ReglementProcess
{
	System.Guid Guid { get; set; }
	string Reference { get; set; }
	System.Guid ModeReglementGuid { get; set; }
	decimal Montant { get; set; }
	bool EstValide { get; set; }
}

```
