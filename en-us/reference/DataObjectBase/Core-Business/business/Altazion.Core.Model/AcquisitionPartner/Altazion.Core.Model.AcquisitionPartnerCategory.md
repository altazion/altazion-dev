## AcquisitionPartnerCategory

The `AcquisitionPartnerCategory` class represents a category of acquisition partners within the commerce system.

- `Guid`: Unique identifier of the acquisition partner category, of type `Guid`.
- `Label`: The name or label of the category, of type `string`. This property is mandatory and cannot exceed 100 characters.
- `Kind`: The type or kind of acquisition partner category, of type `string`. This property is mandatory and cannot exceed 50 characters.

The class includes validation logic to ensure that both `Label` and `Kind` are set and within the specified length constraints.

### TypeScript class
```typescript
interface AcquisitionPartnerCategory {
  Guid: string; // Unique identifier (UUID)
  Label: string; // Category label (max 100 chars)
  Kind: string; // Category type (max 50 chars)
}
```