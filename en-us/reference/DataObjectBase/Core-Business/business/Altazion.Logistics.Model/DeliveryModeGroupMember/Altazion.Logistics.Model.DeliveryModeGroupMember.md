## DeliveryModeGroupMember

The DeliveryModeGroupMember class represents the membership of a delivery mode within a group of delivery modes. It allows associating multiple delivery modes (e.g., Colissimo, Chronopost, DPD) to the same group (e.g., "Home Delivery").

Public properties:
- Id : Guid, unique identifier of the member.
- GroupId : Guid, identifier of the delivery mode group.
- DeliveryModeId : Guid, identifier of the delivery mode member of the group.

### TypeScript class
```typescript
interface DeliveryModeGroupMember {
  Id: string; // Unique identifier of the member
  GroupId: string; // Identifier of the delivery mode group
  DeliveryModeId: string; // Identifier of the delivery mode member of the group
}
```