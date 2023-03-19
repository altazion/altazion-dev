## <span id='mediationenerreur'>Médiation en erreur</span>

Cet évènement est déclenché lorsqu'une nouvelle médiation se termine de façon invalide

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : MediationTermineeErr
 - **Classe de données** : MediationProgessEventData

Type(s) de données :

```csharp
class MediationMessageData
{
	Guid Guid { get; set; }
	DateTimeOffset Date { get; set; }
	string Libelle { get; set; }
}

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

class MediationProgessEventData
{
	CPointSoftware.Equihira.Business.Mediations.MediationsBll+MediationMessageData[] DerniersMessages { get; set; }
	MediationDefinitionData Definition { get; set; }
	Guid Guid { get; set; }
	DateTime DateCreation { get; set; }
	string EtatCode { get; set; }
	string EtatLibelle { get; set; }
	CPointSoftware.Equihira.Business.Mediations.MediationsBll+MediationFlux[] Flux { get; set; }
}

```
