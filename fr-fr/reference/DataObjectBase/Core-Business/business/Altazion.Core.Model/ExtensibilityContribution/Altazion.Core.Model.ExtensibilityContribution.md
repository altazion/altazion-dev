## ExtensibilityContribution

La classe ExtensibilityContribution représente une contribution d'extensibilité, c'est-à-dire une extension applicative personnalisée dans le système.

Propriétés publiques :
- Guid : Identifiant unique de la contribution.
- Type : Type de la contribution (par exemple "WebHook", "CustomScript", "Plugin", etc.).
- Content : Contenu de la contribution, généralement sous forme de JSON ou de code.
- ModifiedAt : Date et heure de la dernière modification de la contribution.

Méthodes héritées importantes (non détaillées ici) :
- GetKey() : Retourne l'identifiant unique (Guid) de la contribution.

Cette classe permet d'encapsuler les informations nécessaires pour gérer des extensions personnalisées dans la plateforme Altazion.

### D�claration TypeScript
```typescript
interface ExtensibilityContribution {
  Guid: string; // Unique identifier (UUID) of the contribution
  Type: string | null; // Type of the contribution (e.g., "WebHook", "CustomScript", "Plugin")
  Content: string | null; // Content of the contribution, typically JSON or code
  ModifiedAt: string; // ISO string representation of the modification date and time
}
```