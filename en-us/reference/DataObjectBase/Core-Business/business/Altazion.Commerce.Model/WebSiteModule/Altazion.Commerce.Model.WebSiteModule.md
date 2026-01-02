## WebSiteModule

The WebSiteModule class represents an active e-commerce module on a website, such as a widget, feature, or extension.

Public properties:
- Guid: Unique identifier of the module (type Guid).
- ModuleType: Module type, e.g., "WIDGET", "PAYMENT", "SHIPPING" (string).
- Order: Display or processing order of the module (int).
- FullClassName: Full name of the .NET class implementing the module including the namespace (string).
- InitParameter: Initialization parameter of the module, such as configuration in JSON, XML, etc. (string).
- IsActive: Indicates whether the module is active (bool).

Validation rules:
- Guid cannot be empty.
- ModuleType is required and limited to 10 characters.
- FullClassName is required, max length 500 characters.
- InitParameter is required, max length 5000 characters.
- Order cannot be negative.

### TypeScript class
```typescript
interface WebSiteModule {
  Guid: string; // unique identifier (GUID)
  ModuleType: string; // type of module (e.g. 'WIDGET', 'PAYMENT')
  Order: number; // order of display or processing
  FullClassName: string; // full .NET class name including namespace
  InitParameter: string; // initialization parameters (JSON, XML, etc.)
  IsActive: boolean; // whether the module is active
}
```