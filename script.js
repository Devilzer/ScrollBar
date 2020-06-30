var pro = document.getElementById("progress");
var text = document.getElementById("text");
window.onscroll = function() {
    var totalheight = document.body.scrollHeight - window.innerHeight;
    var progressHeight = (window.pageYOffset / totalheight)*100;
      pro.style.height= progressHeight+"%";
           text.innerText= Math.round(progressHeight)+"%";
}