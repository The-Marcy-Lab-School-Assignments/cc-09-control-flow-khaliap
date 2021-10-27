//1
function betweenFiveAndTen(num){
  if (num>=5 && num<=10){
      return true
  }else {
      return false
  }
}
// console.log(betweenFiveAndTen(20))
//2
function betweenTenAndThirty(num){
   if (num>=10 && num<=30){
      return true
  }else {
      return false
  }
}
// console.log(betweenTenAndThirty(31))
//3
function betweenThirtyAndFifty(num){
   if (num>=30 && num<=50){
      return true
  }else {
      return false
  }
}
// console.log(betweenThirtyAndFifty(55))

//4
function betweenThirtyFiftySeventy(num){
   if (num>=0 && num<=30 ||num>=50 && num<=70 ){
      return true
  }else {
      return false
  }
}
// console.log(betweenThirtyFiftySeventy(60))
//5
function betweenTwentyFiftySixty(num){
   if (num>=0 && num<=20 ||num>=50 && num<=60 ){
      return true
  }else {
      return false
  }
}
// console.log(betweenTwentyFiftySixty(55))
//6
function betweenTenTwentyThirty(num){
   if (num>=0 && num<=10 ||num>=20 && num<=30 ){
      return true
  }else {
      return false
  }
}
console.log(betweenTenTwentyThirty(21))