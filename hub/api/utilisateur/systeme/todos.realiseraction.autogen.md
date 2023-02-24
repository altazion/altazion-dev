## <span id='realiseraction'>Realiser une action sur une todo</span>

Realiser une action d'une todo en focntion du code entré en parametre

Url :`[POST] api/system/todos/realiserAction/{guidTodo}/{code}?parameter={parameter:string}`

Paramètres : 

- **guidTodo** (System.Guid) : L'identifiant de la todo
- **code** (string) : Le code de l'action à réaliser
- **parameter** (string) : Le paramètre pour l'action

Type de retour : `bool`

