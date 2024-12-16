  // import from react
import React from "react";

  // import app
import App from "./app.jsx";

  // import redux provider and store data
import { Provider } from "react-redux"
import { store } from './store/store.js'

  // import dom components
import { createRoot }  from 'react-dom/client'

  // Render the application
const root = createRoot(document.getElementById('root'));

  // Render the application
root.render(
    // Apply strict mode each page
  <React.StrictMode>
      {/* redurx provider */}
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>
);
