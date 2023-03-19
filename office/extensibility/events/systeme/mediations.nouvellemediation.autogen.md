## <span id='nouvellemediation'>Nouvelle médiation</span>

Cet évènement est déclenché lorsqu'une nouvelle médiation est créée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : MediationCreation
 - **Classe de données** : MediationEventData

Type(s) de données :

```csharp
class MediationDefinitionData
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	Guid? StandardGuid { get; set; }
}

class MediationFlux
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Sens { get; set; }
	bool EstTraite { get; set; }
}

class MediationEventData
{
	MediationDefinitionData Definition { get; set; }
	Guid Guid { get; set; }
	DateTime DateCreation { get; set; }
	string EtatCode { get; set; }
	string EtatLibelle { get; set; }
	CPointSoftware.Equihira.Business.Mediations.MediationsBll+MediationFlux[] Flux { get; set; }
}

```
