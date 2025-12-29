## AnimationGroup

The AnimationGroup class represents an animation group used for organizing product ranges in stores.

Public properties:
- Id : Guid - Unique identifier of the animation group.
- Label : string - Label of the animation group. This field is mandatory and limited to 250 characters.

### TypeScript class
```typescript
interface AnimationGroup {
  /** Unique identifier of the animation group */
  Id: string; // Guid represented as string
  /** Label of the animation group, required, max 250 characters */
  Label: string | null;
}
```