## RivSfsDispoInfo

Class representing availability information related to two delivery or service modes for an article:

- est_sfs: boolean indicating if the article is available in "Ship From Store" (SFS) mode.
- est_riv: boolean indicating if the article is available in "Riv" mode (likely in-store pickup or another type of availability).

This class only contains these two public boolean properties, with no additional methods or constants.

### TypeScript class
```typescript
interface RivSfsDispoInfo {
    est_sfs: boolean; // Indicates availability in Ship From Store mode
    est_riv: boolean; // Indicates availability in 'Riv' mode
}
```