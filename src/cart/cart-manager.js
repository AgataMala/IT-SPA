const key = "it_spa_cart";

export const cartManager = {
  add(item) {
    const cart = localStorage.getItem(key);
    let content;
    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1, img: item.img },
      };
    } else {
      content = JSON.parse(cart);

      if (item.name in content) {
        //produkt istnieje w koszyku wiec podbijamy ilosc
        content[item.name].quantity += 1;
      } else {
        //produkt nie istnieje w koszyku wiec go dodajemy
        Object.assign(content, {
          [item.name]: { price: item.price, quantity: 1 },
        });
      }
    }
    localStorage.setItem(key, JSON.stringify(content));
  },

  remove(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      let content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        } else {
          delete content[item.name];
        }
      }
      localStorage.setItem(key, JSON.stringify(content));
    }
  },

  getAll() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    } else {
      let content = JSON.parse(cart);

      return Object.entries(content).map((entry) => {
        // {'pokoj binarny': {quantity: 2, price: 170}, ...}
        //[['pokoj binarny', {quantity:2, price: 170}], ...]
        const [name, value] = entry;

        return {
          name,
          ...value,
        };
      });
    }
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return "0.00";
    } else {
      const content = JSON.parse(cart);
      return Object.values(content)
        .reduce(
          (totalPrice, item) => totalPrice + item.quantity * item.price,
          0
        )
        .toFixed(2);
    }
  },
};
