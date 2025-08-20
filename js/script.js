let loginNumber = document.getElementById("loginNumber")
let loginPin = document.getElementById("loginPin")
let loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click", ()=> {
if (loginNumber.value == "01307452956" && loginPin.value == "0123") {
window.location.href="home.html"   
}
else {
   alert("hoynai Boss");
   
}
})