## <span id='messages'>Obtenir les messages d'un vendeur</span>

Récupère les messages

Url :`[GET] v2/vendors/me/messages?inclureTraite={inclureTraite:bool}&uniquementDirect={uniquementDirect:bool}&type={type:Guid?}`

Paramètres : 

- **inclureTraite** (bool) : false pour aussi obtenir les messages marqués comme traités
- **uniquementDirect** (bool) : true pour ne pas obtenir les messages des groupes de l'utilisateur mais uniquement ceux qui lui sont directement adressés
- **type** (Guid?) : Le type de messages

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

