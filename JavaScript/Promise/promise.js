const cart = ["kurts", "pant", "shirts"];

const promise = creteOrder(cart);
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err))
  .then((orderId) => proceedToPayment(orderId))
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

function creteOrder(cart) {
  const pr = new Promise(function (res, rej) {
    //create order:
    if (!validatecart(cart)) {
      const err = new Error("cart is not valid");
      rej(err);
    }
    const orderID = "123ABCD";
    if (orderID) {
      setTimeout(() => res(orderID), 3000);
    }
  });

  return pr;
}

function validatecart(cart) {
  return true;
}

function proceedToPayment(orderID) {
  return new Promise((res, rej) => {
    res("Payment done!!");
  });
}
