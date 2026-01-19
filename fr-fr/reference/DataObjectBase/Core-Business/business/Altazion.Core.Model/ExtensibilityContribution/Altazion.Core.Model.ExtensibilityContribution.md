## ExtensibilityContribution

La classe ExtensibilityContribution représente une contribution d'extensibilité, c'est-à-dire une extension applicative personnalisée. Elle contient les propriétés suivantes :

- Guid : Identifiant unique de la contribution (type Guid).
- Type : Type de la contribution, par exemple "WebHook", "CustomScript", "Plugin", etc. (type string).
- Content : Contenu de la contribution, généralement du JSON ou du code (type string).
- ModifiedAt : Date et heure de la dernière modification de la contribution (type DateTimeOffset).

Cette classe permet d'obtenir la clé unique via la propriété Guid, et elle peut être initialisée à partir d'une ligne de données (DataRow). Sa représentation en chaîne est principalement son type suivi de son Guid.

### D�claration TypeScript
```typescript
interface ExtensibilityContribution {
  Guid: string; // Unique identifier (UUID string)
  Type: string | null; // Type of the contribution like "WebHook", "CustomScript", etc.
  Content: string | null; // Content of the contribution, usually JSON or code
  ModifiedAt: string; // ISO string representing last modification date-time
}
```