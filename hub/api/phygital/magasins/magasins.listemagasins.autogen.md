## <span id='listemagasins'>Obtenir la liste des magasins</span>

Récupère la liste de tous les magasins de l'enseigne

Url :`[GET] v2/stores/all?crosscanalenabled={crosscanalenabled:bool}`

Paramètres : 

- **crosscanalenabled** (bool)

Type de retour : `MagasinData[]`

Type(s) de données :

```csharp
class MagasinData
{
	string Nom { get; set; }
	System.Guid Guid { get; set; }
	string Code { get; set; }
	string MessageAccueil { get; set; }
	string Responsable { get; set; }
	string Telephone { get; set; }
	string Email { get; set; }
	string UrlPersonnalisee { get; set; }
	decimal? Longitude { get; set; }
	decimal? Latitude { get; set; }
	string Adresse { get; set; }
	string CodePostal { get; set; }
	string CodePays { get; set; }
	string Ville { get; set; }
	string MessageHoraires { get; set; }
	PhygitalSite.Systeme.DeviceController+MagasinHoraireData[] Horaires { get; set; }
}

```

