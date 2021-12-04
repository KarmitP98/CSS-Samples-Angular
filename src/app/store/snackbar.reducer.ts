export interface SnackbarState {
  show: boolean;
  message: string;
  duration: number;
  showCloseAction: boolean;
}

const initialState: SnackbarState = {
  show: false,
  duration: 5000,
  message: '',
  showCloseAction: false
};


export const snackBarReducer = (state: SnackbarState, {type, load}: any) => {
  switch (type) {
    case 'SHOW_MESSAGE':
      return {...state, show: true, ...load};
    case 'HIDE': {
      return {...state, ...initialState};
    }
    default:
      return {...state};
  }
};
