## TodoCustomHandler

La classe TodoCustomHandler représente un gestionnaire personnalisé pour le traitement des tâches (TODO), permettant d'associer une action spécifique à un type de tâche.

Propriétés publiques :
- Guid : Identifiant unique du gestionnaire personnalisé.
- TodoKindGuid : Identifiant unique du type de tâche (TodoKindDefinition) auquel ce gestionnaire est associé.
- Label : Libellé du gestionnaire personnalisé.
- Description : Description détaillée du gestionnaire.
- Section : Section d'organisation du gestionnaire.
- Plugin : Nom du plugin utilisé pour traiter la tâche.
- Cell : Nom de la cellule ou du composant visuel utilisé.
- Function : Nom de la fonction à appeler pour traiter la tâche.
- ApplicationGuid : Identifiant unique de l'application associée, si applicable.
- Url : URL à utiliser pour traiter la tâche, si applicable.
- Language : Code de langue utilisé pour ce gestionnaire (ISO 639-1, ex: "fr", "en").

### D�claration TypeScript
```typescript
interface TodoCustomHandler {
  Guid: string; // Unique identifier of the custom handler (GUID)
  TodoKindGuid: string; // Unique identifier of the associated task type (GUID)
  Label: string; // Label of the custom handler
  Description: string; // Detailed description of the handler
  Section: string; // Organizational section of the handler
  Plugin: string; // Name of the plugin to process the task
  Cell: string; // Name of the visual component or cell used
  Function: string; // Name of the function called to handle the task
  ApplicationGuid?: string | null; // GUID of the associated application, optional
  Url: string; // URL used for processing the task
  Language: string; // Language code (ISO 639-1)
}
```