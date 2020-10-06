import { createStore, combineReducers, compose, applyMiddleware  } from "redux";
//import rootReducer from "../reducer";
import dataReducer from '../reducers/listingReducers'
import statusReducer from '../reducers/status'
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    status:{
        isLoading: true,
        errMess: ""
    },
    
    data:{
        properties: [],
        Total: 0,
        limit: 5,
        show: false,
        listing:{
            title: "",
            location: [],
            features: [],
            details: [],
            image: "",
            images: [],
            district: "",
            region: "",
            type: "",
            price: 0,
            rating: 0,
            description: "",
            category: ""
        },
        
        
        
    }
  
   
  
};
const bigReducer = combineReducers({ status: statusReducer, data: dataReducer });

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}