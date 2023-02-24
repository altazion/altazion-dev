## <span id='messages'>Obtenir les messages de l'utilisateur.</span>

Obtient les messages envoyés à l'utilisateur

Url :`[GET] api/security/users/me/messages?inclureTraite={inclureTraite:bool}&uniquementDirect={uniquementDirect:bool}&type={type:Guid?}`

Paramètres : 

- **inclureTraite** (bool)
- **uniquementDirect** (bool)
- **type** (Guid?)

Type de retour : `Message[]`

Type(s) de données :

```csharp
class Message
{
	System.Guid Guid { get; set; }
	Guid? Uxid { get; set; }
	Guid? GroupeGuid { get; set; }
	string Sujet { get; set; }
	string Details { get; set; }
	bool EstTraite { get; set; }
	bool EstImportant { get; set; }
	string Url { get; set; }
	DateTimeOffset Date { get; set; }
}

```
