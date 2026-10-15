import { loadCart } from './lib/cart';
import { useState, useEffect, Fragment } from 'react';
import { h } from './lib/html';
import { PRODUCTS } from './data/products';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchOverlay } from './components/SearchOverlay';
import { CartDrawer } from './components/CartDrawer';

import { Shop } from './pages/Shop';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';
import { OrderDone } from './pages/OrderDone';
import { ProductPage } from './pages/Product';
import { Home } from './pages/Home';

import { Legal, LEGAL } from './pages/Legal';
import { NotFound } from './pages/NotFound';

import { DESC, setMeta } from './lib/seo';


export function App() {

  const [cart, setCart] = useState(() => loadCart());
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [hash, setHash] = useState(() => location.hash);


  /*
   * ----------------------------------------
   * ROUTING
   * ----------------------------------------
   */

  const cleanPath = hash.replace(/^#/, '');

  const [path] = cleanPath.split('?');

  const segments = path
    .split('/')
    .filter(Boolean);

  const route = segments[0] || 'home';

  const productSlug =
    route === 'product'
      ? segments[1]
      : null;

  const product =
    productSlug
      ? PRODUCTS.find(p => p.slug === productSlug)
      : null;


  /*
   * ----------------------------------------
   * HASH CHANGE
   * ----------------------------------------
   */

  useEffect(() => {

    const handleHashChange = () => {
      setHash(location.hash);
    };

    const handleKeyDown = (event) => {

      if (event.key === 'Escape') {
        setOpen(false);
        setSearch(false);
      }

    };

    window.addEventListener(
      'hashchange',
      handleHashChange
    );

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        'hashchange',
        handleHashChange
      );

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  }, []);


  /*
   * ----------------------------------------
   * CART STORAGE
   * ----------------------------------------
   */

  useEffect(() => {

    try {
      localStorage.setItem(
        'loop_cart',
        JSON.stringify(cart)
      );
    } catch (error) {
      console.warn('Could not save cart:', error);
    }

  }, [cart]);


  /*
   * ----------------------------------------
   * BODY SCROLL LOCK
   * ----------------------------------------
   */

  useEffect(() => {

    document.body.style.overflow =
      open || search
        ? 'hidden'
        : '';

    return () => {
      document.body.style.overflow = '';
    };

  }, [open, search]);


  /*
   * ----------------------------------------
   * SEO + SCROLL
   * ----------------------------------------
   */

  useEffect(() => {

    window.scrollTo(0, 0);

    setOpen(false);
    setSearch(false);

    let title = 'LOOP';
    let description = DESC.home;

    if (product) {

      title = `${product.name} — LOOP`;
      description =
        product.desc ||
        product.description ||
        DESC.home;

    }

    else if (route === 'home') {

      title =
        'LOOP — Minimal Accessories for Everyday Style';

      description = DESC.home;

    }

    else if (LEGAL[route]) {

      title =
        `${LEGAL[route][0]} — LOOP`;

      description =
        DESC[route] || DESC.home;

    }

    else {

      const readable =
        route.charAt(0).toUpperCase() +
        route.slice(1);

      title = `${readable} — LOOP`;

      description =
        DESC[route] || DESC.home;

    }

    setMeta(title, description);

  }, [path, product, route]);


  /*
   * ----------------------------------------
   * ADD TO CART
   * ----------------------------------------
   */

  const add = (
    p,
    quantity = 1,
    variant = p?.variants?.[0] || null,
    showCart = true
  ) => {

    if (!p) return;

    if (!p.stock || p.stock < 1) {
      return;
    }

    setCart(currentCart => {

      const existingQuantity =
        currentCart
          .filter(item => item.id === p.id)
          .reduce(
            (total, item) => total + item.qty,
            0
          );

      const available =
        Math.max(
          0,
          p.stock - existingQuantity
        );

      const amount =
        Math.min(
          quantity,
          available
        );

      if (amount < 1) {
        return currentCart;
      }

      const existingIndex =
        currentCart.findIndex(
          item =>
            item.id === p.id &&
            item.v === variant
        );

      if (existingIndex !== -1) {

        return currentCart.map(
          (item, index) =>
            index === existingIndex
              ? {
                  ...item,
                  qty: item.qty + amount
                }
              : item
        );

      }

      return [
        ...currentCart,
        {
          id: p.id,
          v: variant,
          qty: amount
        }
      ];

    });

    if (showCart) {
      setOpen(true);
    }

  };


  /*
   * ----------------------------------------
   * CART QUANTITY
   * ----------------------------------------
   */

  const setQty = (cartItem, quantity) => {

    const product = PRODUCTS.find(
      p => p.id === cartItem.id
    );

    if (!product) return;

    setCart(currentCart => {

      return currentCart.flatMap(item => {

        if (item !== cartItem) {
          return [item];
        }

        if (quantity <= 0) {
          return [];
        }

        return [
          {
            ...item,
            qty: Math.min(
              quantity,
              product.stock || 0
            )
          }
        ];

      });

    });

  };


  /*
   * ----------------------------------------
   * SUBTOTAL
   * ----------------------------------------
   */

  const subtotal = cart.reduce(
    (total, item) => {

      const product =
        PRODUCTS.find(
          p => p.id === item.id
        );

      if (!product) {
        return total;
      }

      return total +
        product.price * item.qty;

    },
    0
  );


  /*
   * ----------------------------------------
   * CHECKOUT COMPLETE
   * ----------------------------------------
   */

  const done = order => {

    try {

      sessionStorage.setItem(
        'loop_order',
        JSON.stringify(order)
      );

    } catch (error) {
      console.warn(
        'Could not save order:',
        error
      );
    }

    setCart([]);

    location.hash = '#/order';

  };


  /*
   * ----------------------------------------
   * PAGE ROUTER
   * ----------------------------------------
   */

  let page;


  if (route === 'home') {

    page = h`
      <${Home}
        add=${add}
      />
    `;

  }


  else if (route === 'shop') {

    page = h`
      <${Shop}
        cat=${segments[1]}
        add=${add}
      />
    `;

  }


  else if (route === 'collections') {

    page = h`
      <${Collections}/>
    `;

  }


  else if (route === 'product') {

    if (product) {

      page = h`
        <${ProductPage}
          key=${product.id}
          p=${product}
          add=${add}
        />
      `;

    } else {

      page = h`
        <${NotFound}
          msg="We couldn't find that product."
        />
      `;

    }

  }


  else if (route === 'about') {

    page = h`
      <${About}/>
    `;

  }


  else if (route === 'contact') {

    page = h`
      <${Contact}/>
    `;

  }


  else if (route === 'checkout') {

    page = h`
      <${Checkout}
        cart=${cart}
        subtotal=${subtotal}
        done=${done}
      />
    `;

  }


  else if (route === 'order') {

    page = h`
      <${OrderDone}/>
    `;

  }


  else if (LEGAL[route]) {

    page = h`
      <${Legal}
        k=${route}
      />
    `;

  }


  else {

    page = h`
      <${NotFound}/>
    `;

  }


  /*
   * ----------------------------------------
   * FINAL APP
   * ----------------------------------------
   */

  return h`

    <${Fragment}>

      <${Navbar}
        count=${cart.reduce(
          (total, item) =>
            total + item.qty,
          0
        )}
        openCart=${() => setOpen(true)}
        openSearch=${() => setSearch(true)}
      />

      <${Fragment}
        key=${path}
      >
        ${page}
      </${Fragment}>

      <${Footer}
        home=${route === 'home'}
      />

      <${CartDrawer}
        open=${open}
        close=${() => setOpen(false)}
        cart=${cart}
        setQty=${setQty}
        subtotal=${subtotal}
        clear=${() => setCart([])}
      />

      <${SearchOverlay}
        open=${search}
        close=${() => setSearch(false)}
      />

    </${Fragment}>

  `;

}