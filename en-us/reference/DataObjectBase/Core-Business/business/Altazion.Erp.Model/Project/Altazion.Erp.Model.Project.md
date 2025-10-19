## Project

The Project class represents a project entity in the system (maps to table e.projets_projets).

Public properties:
- ProjectGuid (Guid): Unique identifier of the project (primary key).
- RjsId (int): Identifier of the associated legal reason.
- MetaProjectGuid (Guid): GUID of the associated meta-project.
- ClientGuid (Guid?): GUID of the associated client, nullable.
- Title (string): The title or name of the project.
- CreationDate (DateTime): The creation date of the project.
- Importance (int): Importance level of the project.
- IsArchived (bool): Indicates whether the project is archived.
- ApplicationGuid (Guid?): GUID of the associated application, nullable.
- ManagementClass (string): Name of the business logic class used internally for management.
- ManagementData (string): Stored initial/configuration data for the manager.
- PartnerGuid (Guid?): GUID of the associated partner, nullable.
- ExpectedDueDate (DateTime?): Expected due date of the project, nullable.
- CoverageType (string): Type of project coverage such as ROADMAP, PRESTA, CONTRAT, etc.

### TypeScript class
```typescript
interface Project {
  ProjectGuid: string; // Unique identifier (GUID) of the project
  RjsId: number; // Legal reason identifier
  MetaProjectGuid: string; // GUID of associated meta-project
  ClientGuid?: string; // Optional GUID of the client
  Title: string; // Title of the project
  CreationDate: string; // ISO string date of creation
  Importance: number; // Importance level
  IsArchived: boolean; // Archive status
  ApplicationGuid?: string; // Optional GUID of associated application
  ManagementClass: string; // Management business class name
  ManagementData: string; // Configuration data for management
  PartnerGuid?: string; // Optional GUID of partner
  ExpectedDueDate?: string; // Optional expected due date (ISO string)
  CoverageType: string; // Type of project coverage
}
```