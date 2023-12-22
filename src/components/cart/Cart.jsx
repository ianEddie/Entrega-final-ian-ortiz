import ProductList from './ProductList';
import Payment from './Payment';
import style from './cart.module.css';

export default function Cart() {
  return (
    <main
      className={`${style.section} h-screen w-full pt-10 flex sm:flex-row flex-col sm:justify-between justify-around  items-center sm:px-10 px-0`}
    >
      <div className={style.filter} />
      <ProductList />
      <Payment />
    </main>
  );
}
