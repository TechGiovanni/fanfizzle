import { configureStore } from '@reduxjs/toolkit';

// import the reducers
// LoginTab
import loginOrRegisterReducer from '@redux/reducers/loginOrRegister/loginRegister.reducer';

// Login Modal
import authModalReducer from '@redux/reducers/loginModal/loginModal.reducer';

// user
import userReducer from '@redux/reducers/user/user.reducer';
import suggestionsReducer from '@redux/reducers/suggestions/suggestions.reducer';

export const store = configureStore({
  reducer: {
    loginOrRegisterTab: loginOrRegisterReducer,
    authModalName: authModalReducer,
    user: userReducer,
    suggestions: suggestionsReducer,
  },
});
