## TodoKindDefinition

La classe TodoKindDefinition représente la définition d'un type de tâche (TODO) avec ses paramètres et ses classes d'exécution.

Propriétés publiques :
- Guid : Identifiant unique de la définition de type de tâche.
- MessageGuid : Identifiant unique du message associé.
- IsAssignedToGroup : Indique si la tâche est remise à un groupe.
- RecipientGroupGuid : Identifiant unique du groupe destinataire (si IsAssignedToGroup est true).
- RecipientUserId : Identifiant unique de l'utilisateur destinataire (si IsAssignedToGroup est false).
- Parameter : Paramètre JSON ou texte brut utilisé pour la configuration de la tâche.
- BatchClass : Nom complet de la classe (namespace.class, assembly) pour l'exécution en mode batch.
- InteractiveClass : Nom complet de la classe (namespace.class, assembly) pour l'exécution en mode interactif.
- Ignore : Indique si cette définition doit être ignorée (désactivée).
- Label : Libellé de la tâche.
- IsAvailableForMobile : Indique si cette tâche est disponible pour les applications mobiles.
- Details : Détails ou description de la tâche.
- Category : Catégorie de la tâche (ex: "Commercial", "Logistique", etc.).
- IsContextLimited : Indique si la tâche est limitée au contexte courant.
- Options : Options JSON additionnelles pour la configuration avancée.

### D�claration TypeScript
```typescript
interface TodoKindDefinition {
  Guid: string; // Unique identifier of the task type definition
  MessageGuid: string; // Unique identifier of the associated message
  IsAssignedToGroup: boolean; // Indicates if the task is assigned to a group
  RecipientGroupGuid?: string | null; // Unique identifier of the recipient group (if assigned to group)
  RecipientUserId?: string | null; // Unique identifier of the recipient user (if not assigned to group)
  Parameter?: string | null; // JSON parameter or raw text for configuration
  BatchClass?: string | null; // Full class name for batch execution
  InteractiveClass?: string | null; // Full class name for interactive execution
  Ignore: boolean; // Indicates if definition is ignored (disabled)
  Label?: string | null; // Task label
  IsAvailableForMobile: boolean; // Availability for mobile applications
  Details?: string | null; // Task details or description
  Category?: string | null; // Task category
  IsContextLimited: boolean; // Is the task limited to current context
  Options?: string | null; // Additional JSON options for advanced configuration
}
```