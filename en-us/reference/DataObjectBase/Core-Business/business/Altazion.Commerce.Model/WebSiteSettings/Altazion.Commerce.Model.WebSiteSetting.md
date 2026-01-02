## WebSiteSetting

The WebSiteSetting class represents a configuration parameter of an e-commerce website. It includes the following properties:

- Guid: Unique identifier of the parameter (type Guid).
- Section: Configuration section representing the first level of parameter organization (string type, max 150 characters).
- Group: Configuration group representing the second level of parameter organization (string type, max 150 characters).
- Option: Name of the configuration option (string type, max 150 characters).
- Value: Value of the configuration parameter (string type).

Each property is mandatory and validated for presence and maximum string length. This class inherits from DataObjectBase and implements a GetKey method returning the unique Guid identifier of the parameter.

### TypeScript class
```typescript
interface WebSiteSetting {
  Guid: string; // Unique identifier (GUID)
  Section: string; // Configuration section (max 150 chars)
  Group: string; // Configuration group (max 150 chars)
  Option: string; // Configuration option name (max 150 chars)
  Value: string; // Configuration parameter value
}
```