## <span id='raisonjuridique'>Obtenir les informations de la raison juridique</span>

Récupère les informations sur la raison juridique

Url :`[GET] app/tenant`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `RaisonJuridique`

Type(s) de données :

```csharp
class RaisonJuridique
{
	string FormeJuridique { get; set; }
	string Adresse { get; set; }
	string Siret { get; set; }
	string Ape { get; set; }
	string NumeroTVA { get; set; }
	string RCSNumero { get; set; }
	string RCSVille { get; set; }
	bool EstMicroEntreprise { get; set; }
	bool EstParticulier { get; set; }
	decimal? Capital { get; set; }
	string RaisonSociale { get; set; }
	int Id { get; set; }
	string Code { get; set; }
}

```

