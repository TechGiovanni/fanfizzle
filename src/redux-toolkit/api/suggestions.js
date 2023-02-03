import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '@services/api/user/user.service';

const getUserSuggestions = createAsyncThunk('user/getSuggestions', async (name, { dispatch }) => {
  // used to get the user Suggestions
  try {
    const response = await userService.getUserSuggestions();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export { getUserSuggestions };
