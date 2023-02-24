## <span id='modifiercampagne'>Modifier ou créer une campagne</span>

Permet de modifier/créer une campagne. La méthode PATCH permet uniquement de modifier une campagne.  La méthode POST met à jour une campagne si vous fournissez son Guid ou en crée une nouvelle si  vous laissez le Guid à Guid.Empty

Url :`[POST] `

Paramètres : 

- en tant que body, un objet CampagnesData

Url :`[PATCH] `

Paramètres : 

- en tant que body, un objet CampagnesData

Type de retour : `Guid`

Type(s) de données :

```csharp
class CampagnesData
{
	System.Guid Guid { get; set; }
	string Libelle { get; set; }
	string Type { get; set; }
	string TypeLibelle { get; set; }
}

```
