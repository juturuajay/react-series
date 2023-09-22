# Namaste React series

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, cuisine, delivry time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

Two types of export/import

1. Default export/import
   export default Component;
   import Component from "path";

2. Named export/import

export const Component;
import {Component} from "path";

\*\*Whenever state variable updates react will re-render the component

Virtual DOM is the representation of actual DOM

Actual DOM is like <div> tags

useeffect(()=>{},[])----useeffect hook have callback fn and dependency array, it is optional
the callback fn will be called after the component has bn rendered
