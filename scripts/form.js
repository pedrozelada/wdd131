const products = [
    {
      id: "fc_1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productList = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productList.appendChild(option);
});


document.addEventListener("DOMContentLoaded", function() {
  const stars = document.querySelectorAll('.stars input');
  const requiredIndicator = document.querySelector('.required');
  
  stars.forEach(star => {
      star.addEventListener('change', function() {
          if (document.querySelector('.stars input:checked')) {
              requiredIndicator.style.color = 'rgb(0, 100, 0)';
          } else {
              requiredIndicator.style.color = '#b81414';
          }
      });
  });

    if (document.querySelector('.stars input:checked')) {
      requiredIndicator.style.color = 'rgb(0, 100, 0)';
  } else {
      requiredIndicator.style.color = '#b81414';
  }

});
