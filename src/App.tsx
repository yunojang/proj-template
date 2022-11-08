import React from "react";

import AppProvider from "@/provider/app";
import AppRoute from "@/routes";

function App() {
    return (
        <AppProvider>
            <AppRoute />
        </AppProvider>
    );
}

export default App;
