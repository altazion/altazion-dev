## RegisteredWebhookHandledTriggers

La classe RegisteredWebhookHandledTriggers représente l'association entre un webhook enregistré et un déclencheur d'événement qu'il traite.

- Guid : Identifiant unique (GUID) de cette association webhook-trigger.
- WebhookHandlerGuid : GUID du gestionnaire de webhook (RegisteredWebhook).
- TriggerGuid : GUID du déclencheur d'événement (AppTrigger).
- ConfigurationData : Données de configuration spécifiques à cette association au format JSON.
- PartnerGuid : GUID optionnel du partenaire (pattern) associé à ce webhook.

### D�claration TypeScript
```typescript
interface RegisteredWebhookHandledTriggers {
    Guid: string; // Unique identifier of the webhook-trigger association
    WebhookHandlerGuid: string; // GUID of the webhook handler
    TriggerGuid: string; // GUID of the event trigger
    ConfigurationData?: string | null; // Optional JSON configuration data
    PartnerGuid?: string | null; // Optional GUID of the associated partner
}
```