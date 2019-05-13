import { emit } from './socket';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {

    case 'ping':
      emit({
        type: 'pong'
      });
      return state;

    default:
      throw new Error('Unexpected action');
  }
};

export default reducer;
