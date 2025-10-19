## MetaProject

The MetaProject class represents a meta-project within the system, corresponding to the table 'e.projets_metaprojets'.

Public properties:
- MetaProjectGuid (Guid): Unique identifier (GUID) of the meta-project.
- RjsId (int): Identifier of the associated legal reason.
- Title (string): The label or title of the meta-project.
- IsInternal (bool): Indicates if the meta-project is internal.
- PartnerGuid (Guid?): Optional GUID of the partner associated with the meta-project; can be null.
- IsArchived (bool): Indicates whether the meta-project is archived.
- CoverageType (string): Type of coverage (e.g., ROADMAP, PRESTA, CONTRAT).

The class overrides the GetKey() method to return the primary key (MetaProjectGuid) and the FromDataRow(DataRow) method to populate its properties from a DataRow of the projets_metaprojets dataset.

### TypeScript class
```typescript
export interface MetaProject {
  MetaProjectGuid: string; // GUID unique du méta-projet
  RjsId: number; // Identifiant de la raison juridique
  Title: string | null; // Libellé du méta-projet
  IsInternal: boolean; // Indique si le méta-projet est interne
  PartnerGuid?: string | null; // GUID facultatif du partenaire associé
  IsArchived: boolean; // Indique si le méta-projet est archivé
  CoverageType: string | null; // Type de prise en charge
}
```