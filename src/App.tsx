import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {Main} from "./pages/Main";
import {Layout} from "./pages/Layout";
import {Provider} from "react-redux";
import {store} from "./storeFiles/store";
import {DefaultBot, EchoBot} from "./bots/EchoBot";

const App = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

// store.subscribe(EchoBot);
store.subscribe(DefaultBot);

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}><App/></Provider>
);