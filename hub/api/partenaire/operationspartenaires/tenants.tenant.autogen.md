## <span id='tenant'>Créer un nouveau tenant</span>

Crée un nouveau tenant associé à votre compte partenaire

Url :`[PUT] api/partners/saas/tenants?synchrone={synchrone:bool}`

Paramètres : 

- en tant que body, un objet CreationRjsData : Les détails du tenant à créer
- **synchrone** (bool) : Placer à true pour créer le tenant en mode synchrone

Type de retour : `NewTenantData`

Type(s) de données :

```csharp
class NewTenantData
{
	int TenantId { get; set; }
	bool IsCreationInProgress { get; set; }
}

class CreationRjsData
{
	string NomUtilisateur { get; set; }
	System.Int32? RjsIdDemandee { get; set; }
	Guid? UxidUtilisateur { get; set; }
	string EmailUtilisateur { get; set; }
	string MotDePasseUtilisateur { get; set; }
	string RaisonJuridique { get; set; }
	string PayPk { get; set; }
	string ProductKey { get; set; }
	bool UseQuickSetup { get; set; }
	Guid? PartenaireGuid { get; set; }
	string Telephone { get; set; }
	string SocialID { get; set; }
	string SocialType { get; set; }
	string SocialVal1 { get; set; }
	string SocialVal2 { get; set; }
	string SocialVal3 { get; set; }
}

```

