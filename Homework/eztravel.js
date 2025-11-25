const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".japan");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 清除所有 active 與 show
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("show"));

    // 加上目前的 active 與 show
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("show");
  });
});

const TWtabs = document.querySelectorAll(".change");
const TWcontents = document.querySelectorAll(".taiwan");

TWtabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 清除所有 active 與 show
    TWtabs.forEach((t) => t.classList.remove("active"));
    TWcontents.forEach((c) => c.classList.remove("show"));

    // 加上目前的 active 與 show
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("show");
  });
});
