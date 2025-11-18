## ProductSelection

This class represents a product selection (often called a "showcase") with its associated information within the Altazion PIM context.

Constants:
- DefaultType: Default selection type (value "N").
- PromotionType: Promotional selection type (value "A").
- CustomType: Complementary/special feature selection type (value "C").

Public properties:
- Guid: Unique identifier of the product selection as a GUID.
- Code: Unique code of the selection, required, max 50 characters.
- Label: Label of the selection, required, max 255 characters.
- Type: Selection type (e.g., 'N' for normal, 'T' for trend), required, max 1 character.
- SiteId: Associated site identifier, optional.
- IsRuleBased: Indicates if the selection is rule-based (automatic).
- IsActive: Indicates if the selection is active.
- Rules: XML or SQL clauses representing automation rules; mandatory if IsRuleBased is true.
- AutoUpdateDelayMinutes: Delay between automatic updates in minutes; must be positive if specified.
- LastAutoUpdateTimestamp: Timestamp of the last automatic update.
- CustomUrlPart: Custom part of the URL linked to the selection, optional, max 255 characters.
- Group: Group to which the selection belongs, optional, max 100 characters.
- CreationDate: Date of creation of the selection.
- CampaignGuid: Identifier of the associated commercial campaign, optional.
- HtmlHeader: Custom HTML header for the selection, optional.
- SegmentationId: Associated segmentation identifier, optional.

This class validates business rules ensuring mandatory fields, length limits, and logic consistency are enforced.

It also can initialize its properties from a DataRow and provides a unique key via its GUID.

ToString returns the label, or code, or GUID as a string.

### TypeScript class
```typescript
interface ProductSelection {
  Guid: string; // GUID unique identifier
  Code: string; // Unique code of the selection
  Label: string; // Label of the selection
  Type: string; // Selection type, e.g. 'N', 'T'
  SiteId?: number; // Optional Site identifier
  IsRuleBased: boolean; // Whether the selection is automatic/rule-based
  IsActive: boolean; // Whether the selection is active
  Rules?: string; // Automation rules as XML or SQL clauses
  AutoUpdateDelayMinutes?: number; // Delay in minutes for automatic updates
  LastAutoUpdateTimestamp?: string; // ISO datetime string of last update
  CustomUrlPart?: string; // Custom URL segment
  Group?: string; // Selection group
  CreationDate: string; // ISO datetime string of creation date
  CampaignGuid?: string; // Optional associated campaign GUID
  HtmlHeader?: string; // Custom HTML header
  SegmentationId?: number; // Optional segmentation identifier
}

// Constants (exported as enum for convenience)
enum ProductSelectionType {
  DefaultType = "N",
  PromotionType = "A",
  CustomType = "C"
}
```