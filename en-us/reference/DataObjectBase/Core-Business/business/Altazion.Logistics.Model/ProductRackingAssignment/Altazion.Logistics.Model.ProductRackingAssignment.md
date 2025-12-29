## ProductRackingAssignment

The ProductRackingAssignment class represents the assignment of a product to a shelving location for picking optimization. It has the following public properties:

- AssignmentGuid: Unique identifier of the assignment (type Guid).
- RackingLocationGuid: Identifier of the shelving location (type Guid).
- ProductGuid: Identifier of the assigned product (type Guid).
- IsAutomatic: Indicates whether the assignment was made automatically by the system (type bool).
- IsExceptional: Indicates if the assignment is exceptional (temporary or outside the standard route) (type bool).
- Order: Processing order of the product in the shelving, used to prioritize picking (type short).

Each property corresponds to a data field clearly defining a product's placement in shelving to enhance order picking operations.

### TypeScript class
```typescript
interface ProductRackingAssignment {
  AssignmentGuid: string; // Unique identifier of the assignment (GUID)
  RackingLocationGuid: string; // Identifier of the shelving location (GUID)
  ProductGuid: string; // Identifier of the assigned product (GUID)
  IsAutomatic: boolean; // True if assignment was done automatically
  IsExceptional: boolean; // True if the assignment is exceptional
  Order: number; // Processing order for picking prioritization
}
```