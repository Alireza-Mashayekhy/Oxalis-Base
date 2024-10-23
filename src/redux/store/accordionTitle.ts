import { createSlice , PayloadAction} from '@reduxjs/toolkit';

// interface AccordionState {
//   [key: string]: boolean;  // هر اکاردئون به عنوان یک کلید با وضعیت بولی
// }

const initialState = {};

const accordionSlice = createSlice({
  name: 'accordion',
  initialState,
  reducers: {
    setAccordionState: (state, action: PayloadAction<{ title: string; isOpen: boolean }>) => {
    //  return state[action.payload.title] = action.payload.isOpen;
    
    return action.payload;

  },
  },
});


export const { setAccordionState } = accordionSlice.actions;
export default accordionSlice.reducer;