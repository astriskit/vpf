import React from "react";
import {AppState} from './AppState.type'

interface UpdateAppState{
    (state: AppState): void
}

export interface TypeAppContext {
    state: AppState | null,
    setState: UpdateAppState ,
}

export const AppContext = React.createContext<TypeAppContext>({state:null, setState: ()=>{}});
