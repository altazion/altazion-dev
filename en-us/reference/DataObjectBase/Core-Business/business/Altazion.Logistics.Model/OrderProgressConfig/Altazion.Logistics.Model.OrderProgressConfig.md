## OrderProgressConfig

The OrderProgressConfig class represents a configuration of order progress steps, named "rails". These rails define the various stages in the order processing workflow.

Public properties:

- Id: Unique identifier of the configuration (Guid).
- Label: Descriptive label of the progress step.
- ConfigType: Configuration type, for example CDE (order), BPR, etc.
- RailNumber: Rail number in the workflow, indicating the general order of the step (e.g., 1, 2, 3). This is a string limited to 1 character.
- ExecutionOrder: Execution order within the same rail.
- HandlerClassName: Full class name (AssemblyQualifiedName) of the handler class responsible for processing this step.
- Origin: Origin of the concerned order (optional filter, string max 3 chars).
- PreparationType: Type of preparation concerned (optional filter, string max 3 chars).
- ArticleType: Type of article concerned (optional filter, string max 3 chars).
- Parameter1: First configuration parameter, can be JSON or free text.
- Parameter2: Second configuration parameter, similarly JSON or text.
- InitScript: Initialization script or data specific to this configuration.
- IsCustom: Indicates if this configuration is customized, added by the client (boolean).

This class models a step in the order processing workflow with possible filters according to origin, preparation type, or article type, and dynamic handling via a .NET handler class specified by its name.


### TypeScript class
```typescript
interface OrderProgressConfig {
  Id: string; // Guid
  Label: string;
  ConfigType: string;
  RailNumber: string;
  ExecutionOrder: number;
  HandlerClassName: string;
  Origin?: string | null;
  PreparationType?: string | null;
  ArticleType?: string | null;
  Parameter1?: string | null;
  Parameter2?: string | null;
  InitScript?: string | null;
  IsCustom: boolean;
}
```