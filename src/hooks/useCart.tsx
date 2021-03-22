/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  useEffect,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CartItems {
  id: number
  title: string
  image?: string
  price: number
  quantity: number
  institution?: string
  measureUnit?: string
}

export interface Cart {
  items: CartItems[]
  addCart?: (item: CartItems) => void
  removeCart?: (idx: number) => void
  updateCart?: (idx: number, values: CartItems) => void
  resetCart?: () => void
  total: number
}

const CartContext = createContext<Cart | null>(null);

const CartProvider = ({ children }: any): JSX.Element => {
  const [items, setItems] = useState<CartItems[]>([]);
  const total = useMemo(
    () => items.reduce((acc, curr) => acc + curr.price * (curr.quantity || 1), 0),
    [items],
  );

  const getStoragedItems = useCallback(
    async (): Promise<void> => {
      const storageItems = await AsyncStorage.getItem('@Sabia:shoppingCart');
      if (storageItems) setItems(JSON.parse(storageItems));
    }, [items],
  );

  const storagedItems = useCallback(
    async (): Promise<void> => {
      await AsyncStorage.setItem('@Sabia:shoppingCart', JSON.stringify(items));
    }, [items],
  );

  useEffect(() => {
    getStoragedItems();
  }, []);

  const addCart = (item: CartItems) => {
    const existsItem = items.find((cartItem) => cartItem.id === item.id);
    if (existsItem) {
      updateCart(item.id, { ...item, quantity: existsItem.quantity + 1 });
    } else {
      setItems((oldItems: CartItems[]) => [...oldItems, item]);
      storagedItems();
    }
  };

  const updateCart = (id: number, values: CartItems) => {
    setItems(items.map((item) => (item.id === id ? { ...item, ...values } : item)));
    storagedItems();
  };

  const removeCart = (id: number) => {
    setItems((oldItems: CartItems[]) => oldItems.filter((item) => item.id !== id));
    storagedItems();
  };

  const resetCart = useCallback(
    async () => {
      await AsyncStorage.removeItem('@Sabia:shoppingCart');
      setItems([]);
    },
    [],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addCart,
        removeCart,
        updateCart,
        resetCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): Cart => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
};

export { CartProvider, useCart };
