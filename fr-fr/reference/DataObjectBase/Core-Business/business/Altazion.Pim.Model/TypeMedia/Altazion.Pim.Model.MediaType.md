## MediaType

La classe MediaType représente un type de média pouvant être associé à des éléments du système PIM. 

Propriétés publiques :
- Id (Guid) : Identifiant unique du type de média.
- ThemeId (string) : Identifiant du thème associé, optionnel.
- ChannelId (Guid?) : Identifiant du canal de commercialisation associé, optionnel.
- Type (string) : Type d'élément auquel ce média peut être associé (3 caractères, ex: "ART" pour Article).
- Code (string) : Code unique du type de média, maximum 15 caractères.
- IsMandatory (bool) : Indique si ce type de média est obligatoire.
- Label (string) : Libellé du type de média, maximum 250 caractères.
- AcceptedMimeTypes (string) : Liste des types MIME acceptés pour ce type de média.
- Limits (string) : Limites et contraintes au format JSON ou XML.
- Destination (string) : Destination de stockage du média, maximum 200 caractères.
- FilenameFormat (string) : Format du nom de fichier à utiliser, maximum 200 caractères.
- StandardFlowId (Guid?) : Identifiant du flux standard associé, optionnel.
- InputFileRegex (string) : Expression régulière pour valider les fichiers entrants, maximum 200 caractères.

### D�claration TypeScript
```typescript
interface MediaType {
  Id: string; // GUID unique identifier
  ThemeId?: string | null;
  ChannelId?: string | null; // Nullable GUID
  Type: string; // 3 character type code
  Code: string; // Up to 15 chars
  IsMandatory: boolean;
  Label: string; // Up to 250 chars
  AcceptedMimeTypes: string;
  Limits: string; // JSON or XML string
  Destination: string; // Up to 200 chars
  FilenameFormat: string; // Up to 200 chars
  StandardFlowId?: string | null; // Nullable GUID
  InputFileRegex: string; // Up to 200 chars
}
```