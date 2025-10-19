## MetaProject

La classe MetaProject représente un méta-projet dans le système, correspondant à la table 'e.projets_metaprojets'.

Propriétés publiques :
- MetaProjectGuid (Guid) : Identifiant unique (GUID) du méta-projet.
- RjsId (int) : Identifiant de la raison juridique associée.
- Title (string) : Le libellé ou titre du méta-projet.
- IsInternal (bool) : Indique si le méta-projet est interne.
- PartnerGuid (Guid?) : GUID facultatif du partenaire associé au méta-projet, peut être nul.
- IsArchived (bool) : Indique si le méta-projet est archivé.
- CoverageType (string) : Type de prise en charge (ex : ROADMAP, PRESTA, CONTRAT).

La classe surcharge la méthode GetKey() pour retourner la clé primaire (MetaProjectGuid) et la méthode FromDataRow(DataRow) pour initialiser ses propriétés à partir d'une DataRow du dataset projets_metaprojets.

### D�claration TypeScript
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