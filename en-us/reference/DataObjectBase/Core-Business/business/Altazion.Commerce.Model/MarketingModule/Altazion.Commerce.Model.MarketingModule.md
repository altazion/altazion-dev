## MarketingModule

The MarketingModule class represents a marketing module within the Altazion system. It includes the following properties:

- Guid: unique identifier of the module (type Guid).
- MarketingChannelGuid: unique identifier of the associated marketing channel (type Guid).
- Name: name of the marketing module (type string).
- Code: code of the marketing module (type string).
- Description: description of the marketing module (type string).
- ServerType: type of server related to the module (type string).
- ClientType: type of client related to the module (type string).
- ThemeGuid: optional identifier of the associated theme (type Guid?).
- MenuGuid: optional identifier of the associated menu (type Guid?).
- MenuNodeGuid: optional identifier of the associated menu node (type Guid?).
- Grouping: grouping associated with the module (type string).
- XmlData: optional XML data associated with the module (type string).

### TypeScript class
```typescript
interface MarketingModule {
  Guid: string; // GUID string representing the unique ID
  MarketingChannelGuid: string;
  Name: string | null;
  Code: string | null;
  Description: string | null;
  ServerType: string | null;
  ClientType: string | null;
  ThemeGuid?: string | null;
  MenuGuid?: string | null;
  MenuNodeGuid?: string | null;
  Grouping: string | null;
  XmlData: string | null;
}
```