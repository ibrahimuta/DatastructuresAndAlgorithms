// const buyAndSell = (a)=> {
//     let currentProfit = 0;
//     let maxProfit=0;
//     let buy = 0;
//     let sell = 1;
//     let currentBuyPrice = 0;
//    while(sell < a.length ) {
//        const buyPrice = a[buy];
//        const sellPrice = a[sell];
//
//        if(buyPrice > sellPrice ) {
//            buy++;
//        }else {
//            currentBuyPrice = buyPrice;
//            /// We are making profit
//             currentProfit = sellPrice - buyPrice;
//            if(currentProfit > maxProfit){
//                maxProfit = currentProfit;
//            }
//        }
//        sell++
//    }
//    return maxProfit;
// }

function max(profit, maxP) {
  return profit > maxP ? profit : maxP;
}

const buyAndSell = (a) => {
  let l = 0,
    r = 1; // l =buy, r =sell
  let maxP = 0;

  // loop till our right reaches the end
  while (r < a.length) {
    // Profit ?
    if (a[r] > a[l]) {
      let profit = a[r] - a[l];
      maxP = max(profit, maxP);
    } else {
      l = r;
    }
    r++;
  }

  return maxP;
};
console.log(buyAndSell([7, 1, 5, 3, 6, 4, 0, 8]));
