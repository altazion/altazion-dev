## <span id='optionsliste'>Obtenir les options systèmes</span>

Obtient les options systèmes

Url :`[GET] api/settings/system/options?section={section:string}&group={group:string}&option={option:string}`

Paramètres : 

- **section** (string)
- **group** (string)
- **option** (string)

Type de retour : `SysParamsOptions[]`

Type(s) de données :

```csharp
class SysParamsOptions
{
	string Section { get; set; }
	string Group { get; set; }
	string Option { get; set; }
	string Value { get; set; }
}

```

