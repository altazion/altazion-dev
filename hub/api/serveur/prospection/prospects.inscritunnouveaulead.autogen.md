## <span id='inscritunnouveaulead'>Prospects (inscription)</span>

Inscrit un nouveau lead

Url :`[POST] ?guidCampagne={guidCampagne:System.Guid}`

Paramètres : 

- **guidCampagne** (System.Guid) : L'identifiant de la campagne de recrutement
- en tant que body, un objet LeadCreationData : Les informations du lead

Type de retour : `LeadData`

Type(s) de données :

```csharp
class LeadData
{
	System.Guid Guid { get; set; }
	string Email { get; set; }
	string Name { get; set; }
	string FirstName { get; set; }
	string Address { get; set; }
	string ZipCode { get; set; }
	string City { get; set; }
	string CountryCode { get; set; }
	string PhoneNumber { get; set; }
}

class LeadCreationData
{
	string Email { get; set; }
	string Name { get; set; }
	string FirstName { get; set; }
	string Address { get; set; }
	string ZipCode { get; set; }
	string City { get; set; }
	string CountryCode { get; set; }
	string PhoneNumber { get; set; }
}

```

