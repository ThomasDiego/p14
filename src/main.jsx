import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {Router} from "./Routeur.jsx"

//adding Redux:
import { store,persistor } from './Store'
import { Provider } from 'react-redux'
import {ModalProvider} from "modal-oc-react";

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ModalProvider>
                <RouterProvider router={Router} />
            </ModalProvider>
        </PersistGate>
    </Provider>
)
