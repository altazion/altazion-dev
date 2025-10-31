## RegisteredWebhook

The RegisteredWebhook class represents a webhook handler registered in the system. Here is the description of its public properties:

- Guid: Unique identifier (GUID) for the webhook.
- Label: Webhook label, mandatory, maximum 250 characters.
- HandlerClass: Fully qualified name of the webhook handler class, mandatory, maximum 500 characters.
- TokenGuid: Optional GUID for the authentication token associated with the webhook.
- EditionAppGuid: Optional GUID for the edition application associated with the webhook.
- EditionUrl: Optional URL for editing the webhook, with a maximum length of 250 characters.
- AutoCreate: Boolean flag indicating if the webhook is created automatically.
- InitializationData: Optional initialization data for the class in JSON format.

The class performs validation to ensure mandatory fields and length restrictions are met. It overrides key handling using the Guid and supports initialization from a DataRow.

### TypeScript class
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