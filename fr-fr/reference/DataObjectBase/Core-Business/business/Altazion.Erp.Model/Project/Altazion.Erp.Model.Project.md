## Project

Cette classe représente un projet dans le système ERP (correspondant à la table e.projets_projets).

Propriétés publiques :
- ProjectGuid : Identifiant unique global (GUID) du projet.
- RjsId : Identifiant numérique de la raison juridique associée.
- MetaProjectGuid : GUID du méta-projet lié.
- ClientGuid : GUID optionnel du client associé au projet.
- Title : Libellé ou titre du projet.
- CreationDate : Date et heure de création du projet.
- Importance : Niveau d'importance du projet (entier).
- IsArchived : Booléen indiquant si le projet est archivé.
- ApplicationGuid : GUID optionnel de l'application associée.
- ManagementClass : Nom de la classe métier utilisée pour la gestion interne du projet.
- ManagementData : Données ou configuration propres au gestionnaire.
- PartnerGuid : GUID optionnel du partenaire associé.
- ExpectedDueDate : Date d'échéance prévue du projet (optionnelle).
- CoverageType : Type de prise en charge (exemples : ROADMAP, PRESTA, CONTRAT).

Méthodes principales :
- GetKey() : retourne la clé primaire sous forme du GUID du projet.
- FromDataRow(DataRow) : méthode protégée permettant de remplir les propriétés à partir d'une ligne de données.

### D�claration TypeScript
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