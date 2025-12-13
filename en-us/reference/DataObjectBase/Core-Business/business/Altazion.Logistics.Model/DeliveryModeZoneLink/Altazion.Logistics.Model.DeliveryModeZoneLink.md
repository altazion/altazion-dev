## DeliveryModeZoneLink

The DeliveryModeZoneLink class represents the association between a delivery mode and a delivery zone. This linking table defines which delivery modes are available for which zones.

Properties:
- Id: Unique identifier of the association (type Guid).
- DeliveryModeGuid: Identifier of the delivery mode (type Guid).
- DeliveryZoneId: Identifier of the delivery zone (type Guid).

The class also performs validation on the identifiers (Id, DeliveryModeGuid, DeliveryZoneId) ensuring none are empty.

### TypeScript class
```typescript
interface DeliveryModeZoneLink {
  /** Unique identifier of the association */
  Id: string; // Guid
  /** Identifier of the delivery mode */
  DeliveryModeGuid: string; // Guid
  /** Identifier of the delivery zone */
  DeliveryZoneId: string; // Guid
}

```