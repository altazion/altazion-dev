## WebSite

The WebSite class represents a website with its properties and configurations. It contains the following public properties:

- Code: short code of the website.
- Id: unique identifier of the website.
- Label: label or name of the website.
- Theme: theme of the website.
- CssTheme: CSS theme used by the website.
- MasterPage: master page used by the website.
- RjsId: RJS identifier of the website.
- MainCategoryId: main category identifier of the website.
- DefaultNewsletterId: default newsletter identifier (nullable).
- MainUrl: main URL of the website.
- CustomerServicePhone: customer service phone number.
- EmailServiceClient: customer service email.
- HorairesServiceClient: customer service opening hours.
- DefaultPostalCode: default postal code.
- DefaultCountryPk: default country code.
- DefaultCulture: default culture of the website.
- DefaultCurrency: default currency (nullable GUID).
- SiteParentId: parent site identifier (nullable).
- IsECommerce: boolean indicating if the site is an e-commerce site.
- IsInProduction: boolean indicating if the site is in production.
- Description: description of the website.
- Title: title of the website.
- IsPrivate: boolean indicating if the site is private.
- RootSearchPath: root path for searches.
- RootProductPath: root path for products.
- RootPath: root path of the website.
- ThemeGuid: GUID identifier of the theme (nullable).
- WebOmsSourceGuid: OMS source GUID for the web (nullable).
- StoreOmsSourceGuid: OMS source GUID for the store (nullable).

The class includes methods for initialization from a DataRow and basic data validation (especially URL format checks).

This class inherits from DataObjectBase and thus represents a data class within the system.

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
  DefaultCurrency?: string | null; // GUID represented as string
  SiteParentId?: number | null;
  IsECommerce: boolean;
  IsInProduction: boolean;
  Description: string;
  Title: string;
  IsPrivate: boolean;
  RootSearchPath: string;
  RootProductPath: string;
  RootPath: string;
  ThemeGuid?: string | null; // GUID represented as string
  WebOmsSourceGuid?: string | null; // GUID represented as string
  StoreOmsSourceGuid?: string | null; // GUID represented as string
}
```