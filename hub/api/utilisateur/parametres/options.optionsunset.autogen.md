## <span id='optionsunset'>Definit la valeur d'une option système à null</span>

Efface une option système

Url :`[DELETE] api/settings/system/options/set?section={section:string}&group={group:string}&option={option:string}`

Paramètres : 

- **section** (string)
- **group** (string)
- **option** (string)

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

