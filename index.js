const container = document.getElementById('container');
const colorCode = document.getElementById('colorCode');
const btn = document.getElementById('btn');

const getBGColor = () => {
  const char = '0123456789abcdef';
  const charLength = 6;
  let randomColor = '';

  for (let i = 0; i < charLength; i++) {
    const randomText = Math.floor(Math.random() * char.length);
    randomColor += char.substring(randomText, randomText + 1);
    container.style.background = `#${randomColor}`;
    colorCode.innerHTML = `#${randomColor}`;
  }
};
btn.addEventListener('click', getBGColor);
getBGColor();
