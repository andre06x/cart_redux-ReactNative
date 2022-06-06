import produce from 'immer';

export default function cart(state = [], action){
  switch(action.type){
    case '@cart/ADD':
      return produce(state, draft => {
        const { product } = action;

        const productIndex = draft.findIndex(p => p.id === product.id);

        if(productExists >= 0){
          draft[productIndex].amount += 1
        } else {
          draft.push({
            product,
            amount: 1
          })
        }

        draft.push(product);
        console.tron.log(draft);
      });

    default:
    return state;
  }
}