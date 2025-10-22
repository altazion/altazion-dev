## AuthorizationDefinition

La classe AuthorizationDefinition représente la définition d'une habilitation (droit) disponible dans le système de sécurité. Elle comporte les propriétés publiques suivantes :

- Guid : Identifiant unique de la définition d'habilitation.
- Zone : Zone applicative de l'habilitation (exemple : "Gestcom").
- Plugin : Plugin ou module fonctionnel concerné (exemple : "Achats", "Ventes", "Catalogue").
- Cell : Cellule ou sous-module dans le plugin (exemple : "Commandes", "Factures").
- Function : Fonction ou action spécifique (exemple : "Modifier", "Créer", "Archiver").

Cette classe permet d'initialiser ses propriétés depuis une ligne de données (DataRow) et fournit une clé unique qui correspond à son Guid. Elle redéfinit également la méthode ToString() pour retourner une chaîne représentant la combinaison des éléments Zone / Plugin / Cell / Function.

### D�claration TypeScript
```typescript
interface AuthorizationDefinition {
  Guid: string; // Unique identifier (GUID) of the authorization definition
  Zone?: string; // Application area of the authorization
  Plugin?: string; // Plugin or functional module concerned
  Cell?: string; // Cell or sub-module in the plugin
  Function?: string; // Specific function or action
}
```