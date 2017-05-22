import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: 'test@test.com',
    password: '123456',
    //email: '',
    //password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            //create a new object with state and new value so when react compare old and new state 
            //they a different (state.email = action.playload will modify both old and new state, 
            //so they will be equal, so react think there is no nead to refresh)
            return { ...state, email: action.payload };             
        
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
              
        case LOGIN_USER:
            return { ...state, error: '', loading: true };

        case LOGIN_USER_SUCCESS:            
            return { ...state, ...INITIAL_STATE, user: action.payload };         

        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed', loading: false };

        default:
            return state;
    }
};
