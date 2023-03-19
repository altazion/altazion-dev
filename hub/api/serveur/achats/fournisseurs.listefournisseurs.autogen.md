## <span id='listefournisseurs'>Obtenir tous les fournisseurs</span>

Récupère la liste de tous les fournisseurs

Url :`[GET] app/achats/fournisseurs/all?type={type:CPointSoftware.Equihira.Business.Appro.TypeFournisseur?}`

Paramètres : 

- **type** (CPointSoftware.Equihira.Business.Appro.TypeFournisseur?) : Le type de fournisseur

Type de retour : `FournisseurData[]`

Type(s) de données :

```csharp
class FournisseurData
{
	System.Guid Guid { get; set; }
	decimal Id { get; set; }
	string Libelle { get; set; }
	CPointSoftware.Equihira.Business.Appro.TypeFournisseur Type { get; set; }
	System.Int16? TypeDepenseIdParDefaut { get; set; }
}

enum TypeFournisseur
{
	Prestataire, // =0
	OrganismeEtServicePublic, // =1
	Marchandises, // =2
	Fournitures, // =3
	EmployesEtAssocies, // =4
	Autres, // =10
}

```

