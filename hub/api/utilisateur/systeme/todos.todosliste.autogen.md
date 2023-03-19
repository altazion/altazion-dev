## <span id='todosliste'>Liste des todos</span>

Obtient la liste des todos de l'utilisateur courant

Url :`[GET] api/system/todos/my`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `Todo[]`

Type(s) de données :

```csharp
class Todo
{
	System.Guid Guid { get; set; }
	System.Guid TypeGuid { get; set; }
	string Libelle { get; set; }
	string Details { get; set; }
	string UrlAssociee { get; set; }
	Guid? CibleGuid { get; set; }
	string CibleType { get; set; }
	DateTime? DateEffectue { get; set; }
	string Commentaire1 { get; set; }
	string Commentaire2 { get; set; }
	string Commentaire3 { get; set; }
	int Urgence { get; set; }
	bool EstUrgent { get; set; }
	Guid? UxidDestinataire { get; set; }
	Guid? GroupeDestinataireGuid { get; set; }
	bool LimiteAuContexte { get; set; }
	bool Parametres { get; set; }
	string UrgenceLibelle { get; }
	string LibelleEnRetard { get; }
	string LibellePrioriteBasse { get; }
	string LibellePrioriteNormale { get; }
	string LibellePrioriteCritique { get; }
	string LibellePrioriteUrgente { get; }
	bool EstEffectue { get; }
	DateTime? Echeance { get; set; }
	DateTime DateDemande { get; set; }
	Guid? UxidDemandeur { get; set; }
}

```

