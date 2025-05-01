const categories = document.querySelectorAll('.item')

console.log(" Number of categories:", categories.length)



categories.forEach(category => {
  const elTitle = category.querySelector('h2').textContent;
  const elNumber = category.querySelectorAll('li');
  console.log(" Category:", elTitle);
  console.log(" Elements number:", elNumber.length);
  
  });



