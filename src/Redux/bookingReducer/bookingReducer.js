import { SET_DATE_DETAILS, SET_GUESTS, SET_PRICE } from "./bookingTypes";

const initialState = {
  guests: 0,
  price: 0,
  from: "",
  to: "",
  bookedTill: "",
};

export const bookingReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_GUESTS: {
      return {
        ...state,
        guests: state.guests + payload,
      };
    }
    case SET_PRICE: {
      return {
        ...state,
        price: state.guests * payload,
      };
    }
    case SET_DATE_DETAILS: {
      return {
        ...state,
        from: payload.fromDate,
        to: payload.lastDate,
        bookedTill: payload.bookedTill,
      };
    }
    default: {
      return initialState;
    }
  }
};
