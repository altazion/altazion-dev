## Project

La classe Project représente un projet dans le système (correspond à la table e.projets_projets).

Propriétés publiques :
- ProjectGuid (Guid) : Identifiant unique du projet (clé primaire).
- RjsId (int) : Identifiant de la raison juridique associée.
- MetaProjectGuid (Guid) : GUID du méta-projet associé.
- ClientGuid (Guid?) : GUID du client associé, peut être nul.
- Title (string) : Libellé ou nom du projet.
- CreationDate (DateTime) : Date de création du projet.
- Importance (int) : Niveau d'importance du projet.
- IsArchived (bool) : Indique si le projet est archivé.
- ApplicationGuid (Guid?) : GUID de l'application associée, peut être nul.
- ManagementClass (string) : Nom de la classe métier utilisée pour la gestion interne du projet.
- ManagementData (string) : Données de configuration ou initiales stockées pour le gestionnaire.
- PartnerGuid (Guid?) : GUID du partenaire associé, peut être nul.
- ExpectedDueDate (DateTime?) : Date d'échéance prévue du projet, peut être nulle.
- CoverageType (string) : Type de prise en charge du projet, typiquement des valeurs comme ROADMAP, PRESTA, CONTRAT, etc.

### D�claration TypeScript
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