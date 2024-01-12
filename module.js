const sections = document.querySelectorAll('.section');

    const logCurrentSection = () => {
      const scrollTop = window.scrollY;

      const currentSection = [...sections].find(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
        return scrollTop >= sectionTop && scrollTop < sectionBottom;
      });
      console.log(`Current Section: ${currentSection.id}`);
    };

    const debouncedLogCurrentSection = _.debounce(logCurrentSection, 600);

    window.addEventListener('scroll', debouncedLogCurrentSection);

const inpt = document.querySelector(".inpt");
const box = document.querySelector(".box");

inpt.addEventListener(
    "input",
    _.debounce(() => {
      let text = inpt.value;
      if (text.length >= 6 && text.includes('@')) {
        box.textContent = text;
      }
      else {
        box.textContent = '';
        alert('Text not valid');
      }
    }, 500)
  );

const ball = document.querySelector(".ball");
const choose = document.querySelector(".choose");

let b = 300;
let debouncedMouseMove;

const a = () => {
  debouncedMouseMove = _.debounce((event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    ball.style.transform = `translateX(${clientX}px) translateY(${clientY}px)`;
  }, b);
};

a();

document.addEventListener("mousemove", (event) => {
  debouncedMouseMove(event);
});

choose.addEventListener("click", () => {
  if (b === 300) {
    b = 1000;
  } else {
    b = 300;
  }
  a();
});