## ExtensibilityContribution

La classe ExtensibilityContribution représente une contribution d'extensibilité, c'est-à-dire une extension applicative personnalisée dans le système Altazion.

Propriétés publiques :
- Guid : Identifiant unique de la contribution de type Guid.
- Type : Type de la contribution (par exemple "WebHook", "CustomScript", "Plugin", etc.), sous forme de chaîne de caractères.
- Content : Contenu de la contribution, généralement du JSON ou du code, sous forme de chaîne de caractères.
- ModifiedAt : Date et heure de dernière modification de la contribution, de type DateTime.

Méthodes notables :
- GetKey() : retourne la clé unique de l'objet, ici l'identifiant Guid.
- FromDataRow(DataRow dr) : initialise les propriétés de l'objet à partir d'une ligne de données provenant d'une base SQL.
- ToString() : retourne une représentation textuelle de la contribution, affichant le type suivi du Guid.

### D�claration TypeScript
```typescript
interface ExtensibilityContribution {
  Guid: string; // Unique identifier (GUID as string)
  Type: string | null; // Contribution type (e.g., 'WebHook', 'CustomScript', etc.)
  Content: string | null; // Contribution content (usually JSON or code)
  ModifiedAt: string; // Date-time of last modification (ISO 8601 string)
}
```