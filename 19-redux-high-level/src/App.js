import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from './store/cart-actions'

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  // useSelector 로 리덕스의 데이터를 보고 있으니, 리덕스 스토어가 바뀔때 마다 아래 컴포넌트 함수가 재실행 되고 최신의 상태를 얻을 수 있다.
  // useEffect는 비동기를 걸면 안된다. (async, await)
  // 별개의 함수에서 wrap up해야한다.
  const notification = useSelector((state) => state.ui.notification);


  useEffect(() => {
    dispatch(fetchCartData())
  },[dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
