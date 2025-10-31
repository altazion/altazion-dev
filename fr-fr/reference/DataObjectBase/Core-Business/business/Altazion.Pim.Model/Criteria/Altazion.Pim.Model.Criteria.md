## Criteria

La classe Criteria représente un critère utilisé pour la classification ou le filtrage des produits.

Propriétés publiques :
- Guid : Identifiant unique du critère.
- Kind : Type ou catégorie du critère. Obligatoire, limité à 1 caractère.
- AssociatedAttributeGuid : Identifiant d'un attribut associé à ce critère (optionnel).
- Name : Nom ou intitulé du critère. Obligatoire, limité à 250 caractères.
- ComplementAttributeGuid : Identifiant d'un attribut complémentaire lié à ce critère (optionnel).

Cette classe permet la validation des propriétés Kind et Name selon ces contraintes. Les autres propriétés sont optionnelles ou clés primaires.

Méthodes protégées ou publiques importantes incluent OnValidate pour valider les données et FromDataRow pour initialiser l'objet à partir d'une ligne de données.

### D�claration TypeScript
```typescript
interface Criteria {
  Guid: string; // Unique identifier of the criterion (GUID string)
  Kind: string; // Type or category of the criterion, required, max 1 character
  AssociatedAttributeGuid?: string | null; // Optional GUID of associated attribute
  Name: string; // Name or title of the criterion, required, max 250 characters
  ComplementAttributeGuid?: string | null; // Optional GUID of complementary attribute
}
```