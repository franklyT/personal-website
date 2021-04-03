import {createContext} from 'react'

const CardContext = createContext(null);

export const CardContextProvider = CardContext.Provider
export const CardContextConsumer = CardContext.Consumer

export default CardContext;
