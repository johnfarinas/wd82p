// JSON - JavaScript Object Notation ; universal format for transmitting data in the web

const shopItems = [
  {
    "name": "Product 1",
    "price": 19.99,
    "description":
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis molestiae ipsam possimus accusantium eligendi maxime repellendus qui reiciendis. Praesentium illo, eum dolore magnam sequi id dignissimos earum perferendis rerum!",
      "related": [
        { "name": "Lorem Ipsum 1"}
        { "name": "Lorem Ipsum 2"}
      ]
  },

  {
    "name": "Product 2",
    "price": 20.99,
    "description":
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis molestiae ipsam possimus accusantium eligendi maxime repellendus qui reiciendis. Praesentium illo, eum dolore magnam sequi id dignissimos earum perferendis rerum!"
  },

  {
    "name": "Product 3",
    "price": 30.99,
    "description":
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis molestiae ipsam possimus accusantium eligendi maxime repellendus qui reiciendis. Praesentium illo, eum dolore magnam sequi id dignissimos earum perferendis rerum!"
  }
];

console.log(shopItems[0])

function renderShopItems(shopItems) {
  const shoppingList = document.getElementById("shopping-list");

  shopItems.forEach((shopItem) => {
    const listItem = document.createElement("li");
    listItem.classList.add("shop-item");

    listItem.innerHTML = `
      <h2>${shopItem.name}</h2>
      <p>Price: ${shopItem.price}</p>
      <p>${shopItem.description}</p>
    `;
  });
}
