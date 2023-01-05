
let span_text = "";
$( document ).ready(function() {
  const text = $('.text-animation').text();

  const words = text.split(' ');

  words.forEach(spanText);
  $('.text-animation').html(span_text);


});

function spanText(item, index) {
  const seconds =  index/10;
  const animation_text =  'animation: fade-in 0.8s '+seconds+'s forwards cubic-bezier(0.11, 0, 0.5, 0);';
  span_text +=  "<span style='"+animation_text+"'>" + item + "</span> "; 
}