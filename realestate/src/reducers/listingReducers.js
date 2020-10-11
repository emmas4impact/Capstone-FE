export default function (state = {}, action) {
    console.log('id for property', action);
    switch (action.type) {
      case "GET_PROPERTY":
            return {
                ...state,
                properties: action.payload
            };
    case "GET_PROPERTY_BY_ID":
        return {
            ...state,
            property: action.payload
        };
    case "GET_USER":
    return {
        ...state,
        user: action.payload.data
    };
    case "TOTAL_PROPERTIES":
        return {
            ...state,
            Total: action.payload
        };
    
    case "TOTAL_PROPERTY":
    return {
        ...state,
        Total: action.payload,
    };
    case "SORTING_KEYS":
        return {
            ...state,
            sortingKeys: action.payload,
        };
    case "SET_SORTING_KEY":
        return {
            ...state,
            selectedKey: action.payload,
        };
    case "SET_ORDER":
        return {
            ...state,
            orderKey: action.payload,
        };

      default:
        return state;
    }
  }