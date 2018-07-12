const ACTIONS = {
  BOOK_ROOM: 'BOOK_ROOM',
};

const defaultState = {
  rooms: [],
};

export default function (state = defaultState, action) {
  switch(action.type) {
    case ACTIONS.BOOK_ROOM:
       break;
    default:
      return state;
  }
};
