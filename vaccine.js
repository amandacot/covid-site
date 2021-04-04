// window.onload = function() {
//   var form = document.getElementById("vaccine-form");
//   form.onsubmit = async (e) => {
//     e.preventDefault();
//     let response = await fetch('/formdata', {
//       method: 'POST',
//       body: new FormData(form)
//     });
//     let result = await response.json();
//     console.log(result);
//   }
// };