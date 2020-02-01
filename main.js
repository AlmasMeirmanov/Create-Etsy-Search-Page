let html = items.results
  .map(function(item) {
    var code = ""
    if (item.currency_code === "GBP") {
      code += "&pound;"
    } else if (item.currency_code === "EUR") {
      code += "&euro;"
    } else {
      code += "$"
    }

    return ` 
  <div class="products">
    <a href=${item.url}>
      <img src=${item.Images[0].url_fullxfull} />
      <p class="title">${item.title}</p>
      <p class="shopName">${item.Shop.shop_name}</p>
      <p class="price">${code}${item.price}</p>
    </a><div class="heart"><img src="./assets/heart.png"/></div>
  </div>
  `
  })
  .join("")
document.querySelector(".box").innerHTML = html
