## RegisteredWebhook

La classe RegisteredWebhook représente un gestionnaire de webhook enregistré dans le système. Voici la description des propriétés publiques :

- Guid : Identifiant unique (GUID) du webhook.
- Label : Libellé du webhook, obligatoire, limité à 250 caractères.
- HandlerClass : Nom complet de la classe de traitement du webhook, obligatoire, limité à 500 caractères.
- TokenGuid : GUID optionnel du token d'authentification associé au webhook.
- EditionAppGuid : GUID optionnel de l'application d'édition associée au webhook.
- EditionUrl : URL optionnelle d'édition du webhook, avec une limite de 250 caractères.
- AutoCreate : Indicateur booléen indiquant si le webhook est créé automatiquement.
- InitializationData : Données d'initialisation de la classe au format JSON, optionnel.

La classe valide ses données en vérifiant l'obligation et la longueur des propriétés Label, HandlerClass et EditionUrl. Elle surcharge aussi la gestion de la clé unique par Guid et l'initialisation à partir d'une DataRow.

### D�claration TypeScript
```typescript
interface RegisteredWebhook {
  Guid: string; // Unique identifier (UUID format)
  Label: string; // Webhook label
  HandlerClass: string; // Fully qualified handler class name
  TokenGuid?: string | null; // Optional authentication token GUID
  EditionAppGuid?: string | null; // Optional edition app GUID
  EditionUrl?: string | null; // Optional edition URL
  AutoCreate: boolean; // Indicates if webhook is auto-created
  InitializationData?: string | null; // JSON initialization data
}
```