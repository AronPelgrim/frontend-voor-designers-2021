//Een threshold van 0.1 is dat de pagina 50% zichtbaar moet zijn voordat de animatie wordt geactiveerd
let options = {
  threshold: [0.5]
};
//Waarnemen of de threshold wordt overschreden, zo ja wordt functie onEntry geactiveerd
let observer = new IntersectionObserver(onEntry, options);
//alle sections en artciles van de html wordt in let elements gestopt
let elements = document.querySelectorAll('section, article');
//functie die wordt geactiveerd als de threshold is overschreden, isIntersecting is een boolean die op dat moment true geeft, op dat moment krijgt de section in kwestie class 'visible'
function onEntry(entry) {
  entry.forEach((change) => {
    if(change.isIntersecting) {
      change.target.classList.add('visible');
    }
  });
}
//observeerd alle domelementen doordat de observer door elements looped
for (let elm of elements) {
  observer.observe(elm);
}
