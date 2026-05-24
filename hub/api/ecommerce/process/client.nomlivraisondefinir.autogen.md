## <span id='nomlivraisondefinir'>Définir nom livraison</span>

Définit le nom de la personne qui ira chercher le colis

Url :`[GET] /api/process/nui/?action=setnomdestinataire?nom={nom}`

Paramètres : 

- **nom** : Le nom du destinatire

Type(s) de données :

```csharp
class ResumeProcess
{
	Guid ClientGuid { get; set; }
	decimal MontantTTC { get; set; }
	string MontantTTCFormate { get; set; }
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
	AdresseClientProcess AdresseLivraison { get; set; }
	AdresseClientProcess AdresseFacturation { get; set; }
	PointLivraisonDetailProcess PointLivraisonAdresse { get; set; }
}

class AdresseClientProcess
{
	Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string CP { get; set; }
	string Email { get; set; }
}

class PointLivraisonDetailProcess
{
	PointLivraisonHoraireProcess[] Horaires { get; set; }
	string Commentaires { get; set; }
	Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string CP { get; set; }
	string Email { get; set; }
	string Indication { get; set; }
	String[] Services { get; set; }
	GeoLocalisationPointLivraisonProcess Localisation { get; set; }
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

```

