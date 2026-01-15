// ここからコードを書いてください
import setupTabs from "./js/tabs.js";
// import setupConverter from "./js/converter.js";
import {setupConverter, setupSwith} from "./js/converter.js";

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupConverter();
  setupSwith();
});
