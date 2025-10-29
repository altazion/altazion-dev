## WebSite

The WebSite class represents a website along with its associated properties and configuration.

Public properties:
- Code: short code for the website.
- Id: unique identifier of the website.
- Label: name or label of the website.
- Theme: website theme.
- CssTheme: CSS theme used.
- MasterPage: master page used.
- RjsId: RJS identifier.
- MainCategoryId: identifier of the main category of the website.
- DefaultNewsletterId: nullable identifier of the default newsletter.
- MainUrl: main URL of the website.
- CustomerServicePhone: customer service phone number.
- EmailServiceClient: email of customer service.
- HorairesServiceClient: customer service opening hours.
- DefaultPostalCode: default postal code.
- DefaultCountryPk: default country code.
- DefaultCulture: default culture of the site.
- DefaultCurrency: nullable GUID of the default currency.
- SiteParentId: nullable parent site identifier.
- IsECommerce: flag indicating if the site is e-commerce.
- IsInProduction: flag for production status.
- Description: textual description of the site.
- Title: website title.
- IsPrivate: flag indicating if the site is private.
- RootSearchPath: root path for searches.
- RootProductPath: root path for products.
- RootPath: root path of the website.
- ThemeGuid: GUID identifier of the theme.
- WebOmsSourceGuid: OMS source GUID for the web.
- StoreOmsSourceGuid: OMS source GUID for the store.

This class also provides constructors to initialize from a data row, from id and label, or default. It overrides GetKey() method to provide the unique key. It performs validation on main URL format and path strings.

### TypeScript class
```typescript
export interface WebSite {
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
  ThemeGuid?: string | null;
  WebOmsSourceGuid?: string | null;
  StoreOmsSourceGuid?: string | null;
}
```