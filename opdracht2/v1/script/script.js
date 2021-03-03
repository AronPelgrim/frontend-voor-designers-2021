const options = {
  threshold: [0.1]
};
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('section, article');

function onEntry(entry) {
  entry.forEach((change) => {
    if(change.isIntersecting) {
      change.target.classList.add('visible');
    }
  });
}

for (let elm of elements) {
  observer.observe(elm);
}
