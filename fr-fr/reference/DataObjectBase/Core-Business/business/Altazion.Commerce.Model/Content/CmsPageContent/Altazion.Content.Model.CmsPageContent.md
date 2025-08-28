## CmsPageContent

La classe CmsPageContent représente un contenu associé à une page d'un CMS e-commerce. Elle permet de définir et gérer les différentes propriétés liées à ce contenu.

Propriétés publiques :
- Guid : Identifiant unique du contenu de page (clé métier) de type Guid.
- PageGuid : Identifiant de la page à laquelle ce contenu est associé, de type Guid.
- Order : Ordre d'affichage du contenu dans la page, de type int.
- ContentKind : Type de contenu (comme texte, image, etc.), de type string.
- Content : Valeur réelle du contenu, par exemple texte HTML ou autres données, de type string.
- CustomizationLevel : Niveau de personnalisation du contenu, de type int.

Méthodes importantes :
- GetKey() : Retourne la clé unique Guid du contenu.
- FromDataRow(DataRow) : Initialise les propriétés à partir d'une ligne de données.
- CopyFrom<T>(CmsPageContent) : Permet de copier un objet CmsPageContent dans une nouvelle instance typée dérivée de CmsPageContent.

### D�claration TypeScript
```typescript
interface CmsPageContent {
  Guid: string; // Unique identifier (Guid)
  PageGuid: string; // Identifier of the associated page (Guid)
  Order: number; // Display order
  ContentKind: string | null; // Type of content
  Content: string | null; // Content value
  CustomizationLevel: number; // Customization level
}
```