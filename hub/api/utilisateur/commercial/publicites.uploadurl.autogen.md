## <span id='uploadurl'>Obtenir une url pour uploader une image</span>

Obtient une url pour uploader une image

Url :`[GET] ?opeGuid={opeGuid:System.Guid}&extension={extension:string}&etape={etape:int}`

Paramètres : 

- **opeGuid** (System.Guid) : L'identifiant de l'opération
- **extension** (string) : L'extension (sans le point) du fichier
- **etape** (int) : L'identifiant de l'étape / de la page

Type de retour : `UploadUrl`

Type(s) de données :

```csharp
class UploadUrl
{
	string Upload { get; set; }
	string Result { get; set; }
	string Method { get; set; }
	Dictionary<System.String,System.String> HeadersToAdd { get; set; }
}

```

