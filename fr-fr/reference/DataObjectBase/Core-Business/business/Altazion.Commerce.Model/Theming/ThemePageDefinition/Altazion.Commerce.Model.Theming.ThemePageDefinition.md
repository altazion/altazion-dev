## ThemePageDefinition

Représente une définition de page appartenant à un thème.

Propriétés publiques :
- Id (Guid) : Identifiant technique de la définition de page.
- ThemeId (Guid) : Identifiant du thème propriétaire.
- TenantId (int) : Identifiant du tenant propriétaire.
- PageType (string) : Type fonctionnel de la page.
- Name (string) : Nom lisible de la définition.
- IsActive (bool) : Indique si la définition est active.
- Revision (int) : Révision de configuration de la définition.
- Config (Dictionary<string, string>) : Configuration générale simple de la page.
- Metadata (ThemeMetadata) : Métadonnées complémentaires (peut être null).
- LastUpdated (DateTimeOffset) : Date de dernière mise à jour de la définition.
- Nodes (List<ThemePageNode>) : Ensemble des noeuds disponibles dans la définition.
- Composition (List<ThemePageCompositionItem>) : Composition logique de la définition.
- Options (Dictionary<string, string>) : Options de configuration spécifiques à la page, surchargeant celles du thème.
- SectionAssignments (ThemePageSectionAssignments) : Affectation des sections partagées utilisées par la page (peut être null).
- SectionOverrides (List<ThemePageSectionOverride>) : Overrides appliqués aux noeuds provenant des sections partagées.

### D�claration TypeScript
```typescript
interface ThemePageDefinition {
  id: string; // Guid
  themeId: string; // Guid
  tenantId: number;
  pageType: string;
  name: string;
  isActive: boolean;
  revision: number;
  config: { [key: string]: string };
  metadata?: ThemeMetadata;
  lastUpdated: string; // ISO 8601 date string
  nodes: ThemePageNode[];
  composition: ThemePageCompositionItem[];
  options?: { [key: string]: string };
  sectionAssignments?: ThemePageSectionAssignments;
  sectionOverrides: ThemePageSectionOverride[];
}
```