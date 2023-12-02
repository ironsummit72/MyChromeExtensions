const darkModeCSS = `
body {
  background-color:black;
  color: white;
}
`;

const injectDarkModeCSS = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = darkModeCSS;
  document.head.appendChild(styleElement);
};

injectDarkModeCSS();