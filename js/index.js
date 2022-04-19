// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');  
  let priceDOM = product.querySelector('.price span');
  let quantityDOM = product.querySelector('.quantity input');
  let quantity = quantityDOM.value;
  let priceTotal = priceDOM.innerHTML * quantity;
  let subTotalDOM = product.querySelector('.subtotal span');
  subTotalDOM.innerText = priceTotal;

  return priceTotal;

};

calculateAll();


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  // console.log(updateSubtotal())
  // let totalReal = updateSubtotal()
  let productsDOM = document.querySelectorAll('.product');
  let counter = 0;
  productsDOM.forEach((eachElem) => {
    updateSubtotal(eachElem);
    let totalReal = updateSubtotal(eachElem)
    counter += totalReal;
    // console.log( counter )
  });
  
  // ITERATION 3
  let totalDOM = document.querySelector('#total-value span');
  totalDOM.innerHTML = counter;
  return counter;
};

// ITERATION 4
function removeProduct( event ) {
  const target = event.currentTarget;
  
  event.target.parentNode.removeChild(target);
  // borroTodo.innerText
  console.log('The target in remove is:', target);
  // console.log( target );
  // target.parentNode.remove()
  // target.product.remove();
  
};

// removeProduct();


// ITERATION 5
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', ( event ) => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemovesButton = document.querySelectorAll('.btn-remove');
  allRemovesButton.forEach((eachElem) => {
    eachElem.addEventListener('click', removeProduct);
  });

  //... your code goes here
});
