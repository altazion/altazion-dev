## WebSiteSetting

La classe WebSiteSetting représente un paramètre de configuration d'un site e-commerce. Elle contient les propriétés suivantes :

- Guid : Identifiant unique du paramètre (type Guid).
- Section : Section de configuration correspondant au premier niveau d'organisation des paramètres (type string, max 150 caractères).
- Group : Groupe de configuration correspondant au deuxième niveau d'organisation des paramètres (type string, max 150 caractères).
- Option : Nom de l'option de configuration (type string, max 150 caractères).
- Value : Valeur du paramètre de configuration (type string).

Chaque propriété est obligatoire et fait l'objet de validations pour garantir la présence et la longueur maximale des chaînes. Cette classe hérite de DataObjectBase et implémente une méthode GetKey retournant l'identifiant unique Guid du paramètre.

### D�claration TypeScript
```typescript
interface WebSiteSetting {
  Guid: string; // Unique identifier (GUID)
  Section: string; // Configuration section (max 150 chars)
  Group: string; // Configuration group (max 150 chars)
  Option: string; // Configuration option name (max 150 chars)
  Value: string; // Configuration parameter value
}
```