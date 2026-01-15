// ここからコードを書いてください
const setupTabs = () =>{
  const dataHome = document.querySelector('[data-tab="home"]');
  const dataConverter = document.querySelector('[data-tab="converter"]');
  const idHome = document.getElementById("home");
  const idConverter = document.getElementById("converter");

  dataHome.addEventListener("click", (e) => {
    e.preventDefault(); // リンク遷移を防ぐ
    idConverter.classList.add("hidden");
    idHome.classList.remove("hidden");
  });

  dataConverter.addEventListener("click", (e) => {
    e.preventDefault(); // リンク遷移を防ぐ
    idHome.classList.add("hidden");
    idConverter.classList.remove("hidden");
  });
};

export default setupTabs;