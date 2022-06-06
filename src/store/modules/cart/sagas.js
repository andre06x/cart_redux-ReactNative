import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import api from "../../../services/api";
import { Alert } from 'react-native';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from "../../../utils/formatPrice";

import * as RootNavigation from '../../../rootNavigation';


function* addToCart({ id }) {

  const productExists = yield select(state => state.cart.find(p => p.id === id));
  const sotck = yield call(api.get, `/stock/${id}`);

  const stockAmount = sotck.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade sem estoque');
    return;
  }

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmountSuccess(id, amount));

  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    }

    yield put(addToCartSuccess(data))
    RootNavigation.navigate('Cart');
  }

}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade sem estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount))
}



export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)

])