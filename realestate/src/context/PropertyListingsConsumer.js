import React, {createContext}  from 'react';

const DefaultState ={
    propertyListings: []
}

const PropertyListingsContext = createContext(DefaultState)
export const PropertyListingsConsumer = PropertyListingsContext.Consumer