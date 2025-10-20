## UserSetting

La classe UserSetting représente un paramètre utilisateur stocké sous forme de clé-valeur, organisé par section et groupe. Elle contient les propriétés publiques suivantes :

- Guid : Identifiant unique du paramètre utilisateur.
- UserId : Identifiant unique de l'utilisateur propriétaire de ce paramètre.
- Section : Section du paramètre (premier niveau d'organisation).
- Group : Groupe du paramètre (deuxième niveau d'organisation).
- OptionName : Nom de l'option ou clé du paramètre.
- Value : Valeur du paramètre stockée sous forme de chaîne.

La classe permet d'initialiser ses propriétés à partir d'une ligne de données (DataRow) et fournit une représentation textuelle du paramètre sous la forme "Section.Group.OptionName = Value".

### D�claration TypeScript
```typescript
interface UserSetting {
  Guid: string; // Unique identifier of the user parameter (GUID)
  UserId: string; // Unique identifier of the user owning this parameter (GUID)
  Section: string | null; // Section of the parameter, first-level organization
  Group: string | null; // Group of the parameter, second-level organization
  OptionName: string | null; // Name of the option or key of the parameter
  Value: string | null; // Value of the parameter as a string
}
```