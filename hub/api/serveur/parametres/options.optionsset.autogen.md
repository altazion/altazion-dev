## <span id='optionsset'>Definit la valeur d'une option système</span>

Definit une option système

Url :`[GET] app/settings/system/options/set?section={section:string}&group={group:string}&option={option:string}&value={value:string}`

Paramètres : 

- **section** (string)
- **group** (string)
- **option** (string)
- **value** (string)

Type de retour : `SysParamsOptions`

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

