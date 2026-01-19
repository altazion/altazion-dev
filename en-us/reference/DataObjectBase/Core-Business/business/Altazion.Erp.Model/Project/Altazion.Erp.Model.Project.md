## Project

This class represents a project in the ERP system (corresponding to the e.projets_projets table).

Public properties:
- ProjectGuid: Unique Global Identifier (GUID) of the project.
- RjsId: Numeric identifier representing the legal reason.
- MetaProjectGuid: GUID of the associated meta-project.
- ClientGuid: Optional GUID of the client associated with the project.
- Title: Project title or label.
- CreationDate: Date and time when the project was created.
- Importance: Integer representing the project's importance level.
- IsArchived: Boolean indicating whether the project is archived.
- ApplicationGuid: Optional GUID of the associated application.
- ManagementClass: Name of the business class used for internal management.
- ManagementData: Data or configuration for the manager.
- PartnerGuid: Optional GUID of the associated partner.
- ExpectedDueDate: Optional expected due date for the project.
- CoverageType: Type of coverage or responsibility (e.g., ROADMAP, PRESTA, CONTRAT).

Main methods:
- GetKey(): returns the primary key as the project's GUID.
- FromDataRow(DataRow): protected method that populates properties from a data row.

### TypeScript class
```typescript
interface Project {
  ProjectGuid: string; // GUID of the project
  RjsId: number; // Legal reason identifier
  MetaProjectGuid: string; // GUID of the meta-project
  ClientGuid?: string | null; // Nullable GUID of the client
  Title: string | null; // Project title
  CreationDate: string; // DateTimeOffset as ISO string for creation date
  Importance: number; // Importance level
  IsArchived: boolean; // Archive flag
  ApplicationGuid?: string | null; // Nullable GUID of associated application
  ManagementClass: string | null; // Business class name for internal management
  ManagementData: string | null; // Management data/configuration
  PartnerGuid?: string | null; // Nullable GUID of partner
  ExpectedDueDate?: string | null; // Nullable DateTimeOffset as ISO string
  CoverageType: string | null; // Type of coverage (e.g. ROADMAP / PRESTA / CONTRAT)
}
```