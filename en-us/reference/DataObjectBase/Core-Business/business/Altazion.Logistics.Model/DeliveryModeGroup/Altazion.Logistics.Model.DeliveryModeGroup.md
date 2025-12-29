## DeliveryModeGroup

The DeliveryModeGroup class represents a delivery mode group used to group multiple delivery modes (for example, all "home delivery" modes) in order to define the mode to present to the customer.

Public properties:
- Id: Unique identifier of the delivery mode group (type Guid).
- Label: Label of the group, e.g., "Home Delivery" or "Relay Points" (type string).
- IsArchived: Boolean indicating whether the group is archived (no longer in use).
- JsonConfig: JSON configuration of the group containing specific settings (type string).

The class includes validation to ensure the Id is not empty, the Label is provided and does not exceed 250 characters, and the JSON configuration is specified.

### TypeScript class
```typescript
interface DeliveryModeGroup {
  /** Unique identifier of the delivery mode group */
  Id: string; // Guid represented as string
  /** Label of the group (e.g., "Home Delivery", "Relay Points") */
  Label: string;
  /** Indicates if the group is archived (no longer used) */
  IsArchived: boolean;
  /** JSON configuration of the group (specific parameters) */
  JsonConfig: string;
}
```