## WebSite

The WebSite class represents a website with its various properties and configurations. It inherits from DataObjectBase and is marked with the SqlDataConcept attribute indicating the associated SQL table.

Public properties:

- Code: Short code of the website (string).
- Id: Unique identifier of the website (int).
- Label: Website name or label (string).
- Theme: Theme of the website (string).
- CssTheme: CSS theme used by the website (string).
- MasterPage: Master page used by the website (string).
- RjsId: RJS identifier of the website (int).
- MainCategoryId: Identifier of the main category of the website (int).
- DefaultNewsletterId: Default newsletter identifier (nullable int).
- MainUrl: Main URL of the website (string).
- CustomerServicePhone: Customer service phone number (string).
- EmailServiceClient: Customer service email (string).
- HorairesServiceClient: Customer service hours (string).
- DefaultPostalCode: Default postal code (string).
- DefaultCountryPk: Default country code (string).
- DefaultCulture: Default culture of the website (string).
- DefaultCurrency: Default currency of the website (nullable Guid).
- SiteParentId: Identifier of the parent site (nullable int).
- IsECommerce: Indicates if the site is an e-commerce site (bool).
- IsInProduction: Indicates if the site is in production (bool).
- Description: Description of the website (string).
- Title: Title of the website (string).
- IsPrivate: Indicates if the site is private (bool).
- RootSearchPath: Root path for searches (string).
- RootProductPath: Root path for products (string).
- RootPath: Root path of the website (string).
- ThemeGuid: Identifier of the theme (nullable Guid).
- WebOmsSourceGuid: OMS source GUID for web (nullable Guid).
- StoreOmsSourceGuid: OMS source GUID for store (nullable Guid).

This class handles the basic configuration and essential information of a website within the Altazion solution context.

### TypeScript class
```typescript
interface WebSite {
  Code: string;
  Id: number;
  Label: string;
  Theme: string;
  CssTheme: string;
  MasterPage: string;
  RjsId: number;
  MainCategoryId: number;
  DefaultNewsletterId?: number | null;
  MainUrl: string;
  CustomerServicePhone: string;
  EmailServiceClient: string;
  HorairesServiceClient: string;
  DefaultPostalCode: string;
  DefaultCountryPk: string;
  DefaultCulture: string;
  DefaultCurrency?: string | null; // Guid as string
  SiteParentId?: number | null;
  IsECommerce: boolean;
  IsInProduction: boolean;
  Description: string;
  Title: string;
  IsPrivate: boolean;
  RootSearchPath: string;
  RootProductPath: string;
  RootPath: string;
  ThemeGuid?: string | null; // Guid as string
  WebOmsSourceGuid?: string | null; // Guid as string
  StoreOmsSourceGuid?: string | null; // Guid as string
}
```