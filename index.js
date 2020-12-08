function divya(){
    window.open("https://www.linkedin.com/in/divya-jinde","_blank");
}
function fun(){
    var element = document.getElementById('resume');
    element.removeAttribute("hidden");
 element.animate([
     // keyframes
     { transform: 'translateY(-500px)' },
     { transform: 'translateY(500px)' }
 
   ], { 
     // timing options
     duration: 1000,
     iterations: 1
   });
}