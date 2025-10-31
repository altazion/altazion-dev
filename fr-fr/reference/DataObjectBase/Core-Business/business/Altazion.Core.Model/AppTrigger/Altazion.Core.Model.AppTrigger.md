## AppTrigger

La classe AppTrigger représente un déclencheur d'événement applicatif utilisé notamment pour des webhooks. Elle contient les propriétés suivantes :

- Guid : Identifiant unique (GUID) du déclencheur.
- Category : Catégorie du déclencheur, par exemple "Order", "Customer", "Product".
- Code : Code unique du déclencheur.
- Label : Libellé du déclencheur.
- Description : Description détaillée du déclencheur.
- Namespaces : Espaces de noms (namespaces) séparés par des virgules ou points-virgules.
- QueueName : Nom de la file d'attente (queue) pour le traitement des événements.

Cette classe hérite de DataObjectBase et surcharge la validation des données pour s'assurer que certaines propriétés sont renseignées et respectent des longueurs maximales :
- Category est obligatoire, longueur max 50.
- Code est obligatoire, longueur max 100.
- Label est obligatoire, longueur max 250.
- QueueName est obligatoire, longueur max 100.
- Namespaces est optionnel, longueur max 1000.

La clé unique de l'objet est le Guid. Les propriétés sont initialisées à partir d'une DataRow avec des noms de colonnes spécifiques (ex: "ett_guid", "ett_categorie", etc.).

### D�claration TypeScript
```typescript
interface AppTrigger {
  Guid: string; // GUID unique identifier
  Category: string; // Category of the trigger (e.g. "Order", "Customer", "Product")
  Code: string; // Unique code of the trigger
  Label: string; // Label of the trigger
  Description?: string; // Optional detailed description
  Namespaces?: string; // Optional namespaces as comma or semicolon separated string
  QueueName: string; // Name of the processing queue
}
```