// Browser RunTime          NodeJs RunTime
// Js when running in browser, gets access to window global object. access to DOM. ->  window.document, getElementbyId etc. etc.
// Js when running in nodeJs -> Gets access to 'global' named global object.
// IIFE -> keeps code in a function block. And run immidiately
// common js
// esm
// Modular system



/*
## 🖥️ Browser Runtime vs. Node.js Runtime
- **Browser Runtime**
  - JavaScript runs inside the browser.  
  - Has access to the **`window`** global object.  
  - Can interact with the **DOM** (`window.document`, `getElementById`, etc.).  
  - Useful for client-side scripting, UI manipulation, and event handling.  

- **Node.js Runtime**
  - JavaScript runs outside the browser, on the server.  
  - Has access to the **`global`** object instead of `window`.  
  - No DOM access (since Node.js is server-side).  
  - Provides APIs for file system, networking, and backend operations.  

---

## ⚡ IIFE (Immediately Invoked Function Expression)
- Wraps code inside a function block.  
- Executes **immediately** after being defined.  
- Prevents polluting the global scope.  
- Often used to create private variables and modular code.  

**Example:**
```js
(function() {
  console.log("IIFE runs immediately!");
})();
```

---

## 📦 Modular Systems in JavaScript
- **CommonJS (CJS)**
  - Default module system in Node.js.  
  - Uses `require()` to import and `module.exports` to export.  
  - Synchronous loading.  

  ```js
  const fs = require('fs');
  module.exports = { myFunc };
  ```

- **ESM (ECMAScript Modules)**
  - Standardized modern module system.  
  - Uses `import` and `export`.  
  - Supports asynchronous loading.  

  ```js
  import { myFunc } from './module.js';
  export default myFunc;
  ```

---

## 📝 Key Takeaways
- Browser runtime → `window`, DOM access.  
- Node.js runtime → `global`, server-side APIs.  
- IIFE → Encapsulation + immediate execution.  
- CommonJS vs. ESM → Two modular systems; ESM is the modern standard.  

---
*/