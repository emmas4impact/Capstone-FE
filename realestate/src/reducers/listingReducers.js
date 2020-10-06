export default function (state = {}, action) {
    switch (action.type) {
    
      case "GET_PROPERTY":
            return {
                ...state,
                properties: action.payload
            };
            case "GET_PROJECT":
              return {
                  ...state,
                  projects: action.payload
              };
        
    
      default:
        return state;
    }
  }