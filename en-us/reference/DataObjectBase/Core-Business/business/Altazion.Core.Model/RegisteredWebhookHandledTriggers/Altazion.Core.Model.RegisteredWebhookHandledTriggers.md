## RegisteredWebhookHandledTriggers

The RegisteredWebhookHandledTriggers class represents the association between a registered webhook and an event trigger it handles.

- Guid: Unique identifier (GUID) of this webhook-trigger association.
- WebhookHandlerGuid: GUID of the webhook handler (RegisteredWebhook).
- TriggerGuid: GUID of the event trigger (AppTrigger).
- ConfigurationData: Configuration data specific to this association in JSON format.
- PartnerGuid: Optional GUID of the partner (pattern) associated with this webhook.

### TypeScript class
```typescript
interface RegisteredWebhookHandledTriggers {
    Guid: string; // Unique identifier of the webhook-trigger association
    WebhookHandlerGuid: string; // GUID of the webhook handler
    TriggerGuid: string; // GUID of the event trigger
    ConfigurationData?: string | null; // Optional JSON configuration data
    PartnerGuid?: string | null; // Optional GUID of the associated partner
}
```