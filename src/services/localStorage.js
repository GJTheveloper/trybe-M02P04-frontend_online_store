export function setItemToLocalStorage(item) {
  const items = [];
  const doesntExist = -1;
  if (localStorage.length === 0) {
    items.push(item);
    localStorage.setItem('cartItems', JSON.stringify(items));
  } else {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const indexItem = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (indexItem !== doesntExist) {
      cartItems.splice(indexItem + 1, 0, item);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }
}

export function getItemsLocalStorage() {
  const cartItems = localStorage.getItem('cartItems');
  return JSON.parse(cartItems);
}

export function setReviewToLocalStorage(newReview) {
  const reviews = [];
  if (localStorage.length === 0 || null) {
    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));
  } else {
    const setReviews = JSON.parse(localStorage.getItem('reviews'));
    setReviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }
}

export function getReviewToLocalStorage() {
  const reviews = localStorage.getItem('reviews');
  return JSON.parse(reviews);
}
