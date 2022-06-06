import produce from 'immer';

export default function cart(state = [], action){
  switch(action.type){
    case '@cart/ADD':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
        console.tron.log(draft);
      });

    default:
    return state;
  }
}