## MediaTypeDefinition

La classe MediaTypeDefinition représente un type de média pouvant être associé à des éléments du système PIM.

Propriétés publiques :
- Id : Guid, identifiant unique du type de média.
- ThemeId : string, identifiant optionnel du thème associé.
- ChannelId : Guid?, identifiant optionnel du canal de commercialisation associé.
- Type : string, type d'élément auquel ce média peut être associé (3 caractères, ex: "ART" pour Article).
- Code : string, code unique du type de média (maximum 15 caractères).
- IsMandatory : bool, indique si ce type de média est obligatoire.
- Label : string, libellé du type de média (maximum 250 caractères).
- AcceptedMimeTypes : string, liste des types MIME acceptés pour ce type de média.
- Limits : string, limites et contraintes pour ce type de média (format JSON ou XML).
- Destination : string, destination de stockage du média (maximum 200 caractères).
- FilenameFormat : string, format du nom de fichier à utiliser (maximum 200 caractères).
- StandardFlowId : Guid?, identifiant optionnel du flux standard associé.
- InputFileRegex : string, expression régulière pour valider les fichiers entrants (maximum 200 caractères).

La classe fournit également une méthode pour charger ses propriétés à partir d'une ligne de données (FromDataRow) et une méthode pour obtenir sa clé unique (GetKey). La méthode ToString retourne le libellé ou le code du type de média.

### D�claration TypeScript
```typescript
interface MediaTypeDefinition {
  Id: string; // GUID unique identifier of the media type
  ThemeId: string | null; // Optional theme identifier
  ChannelId?: string | null; // Optional marketing channel identifier
  Type: string | null; // Type of item associated (3 characters, e.g., 'ART')
  Code: string | null; // Unique code (max 15 chars)
  IsMandatory: boolean; // Indicates if the media type is mandatory
  Label: string | null; // Label of the media type (max 250 chars)
  AcceptedMimeTypes: string | null; // Accepted MIME types
  Limits: string | null; // Limits/constraints in JSON or XML
  Destination: string | null; // Storage destination (max 200 chars)
  FilenameFormat: string | null; // Filename format (max 200 chars)
  StandardFlowId?: string | null; // Optional standard flow identifier
  InputFileRegex: string | null; // Regex for input file validation (max 200 chars)
}
```