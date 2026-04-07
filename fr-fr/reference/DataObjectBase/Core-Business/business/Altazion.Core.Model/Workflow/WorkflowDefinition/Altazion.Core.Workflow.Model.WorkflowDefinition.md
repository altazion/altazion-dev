## WorkflowDefinition

Définition d'un workflow persisté en MongoDB, dans la collection `{RjsId}_workflow_definitions`.

Propriétés publiques :
- `Id` : Identifiant unique de la définition (Guid).
- `RjsId` : Identifiant du tenant propriétaire de ce workflow (int).
- `Name` : Nom lisible du workflow (string).
- `Description` : Description optionnelle du workflow (string).
- `EntryStepId` : Identifiant du premier step (étape) à exécuter dans le workflow (string).
- `Steps` : Liste de tous les steps (étapes) constituant le workflow (List<WorkflowStepDefinition>).
- `CreatedAt` : Date et heure de création (DateTimeOffset, valeur par défaut : UTC Now).
- `UpdatedAt` : Date et heure de dernière modification (DateTimeOffset, valeur par défaut : UTC Now).

Région Trigger :
- `TriggerSourceType` : Type de source déclenchant ce workflow (WorkflowTriggerSourceType). Si la source est `Event`, alors les propriétés `TriggerCategory` et `TriggerEventCode` sont obligatoires.
- `TriggerCategory` : Catégorie de l'événement déclencheur (exemple : "commande", "client"), ignorée si le trigger est manuel.
- `TriggerEventCode` : Code de l'événement déclencheur (exemple : "Creee", "Validee"), ignoré si le trigger est manuel.
- `TriggerContactMapping` : Mappings permettant de construire l'identité d'un contact à partir du payload JSON de l'événement déclencheur (List<ContactFieldMapping>).

Notes :
Cette classe dérive de `NoSqlDataObjectBase` et est annotée pour MongoDB en tant que DataConcept `WorkflowDefinition`.

### D�claration TypeScript
```typescript
interface WorkflowDefinition {
  Id: string; // GUID
  RjsId: number;
  Name: string;
  Description?: string;
  EntryStepId?: string;
  Steps: WorkflowStepDefinition[];
  CreatedAt: string; // ISO 8601 Date string
  UpdatedAt: string; // ISO 8601 Date string

  TriggerSourceType: WorkflowTriggerSourceType;
  TriggerCategory?: string;
  TriggerEventCode?: string;
  TriggerContactMapping: ContactFieldMapping[];
}

enum WorkflowTriggerSourceType {
  Manual = 0,
  Event = 1
}
```