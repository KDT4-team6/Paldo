import { memoizedGetProduct } from "../api/getProduct";
import { productFilterList } from "./productFilter";
import { productPagination } from "./productPagination";
export const productPageButton = (router) => {
  const categoryButton = document.querySelector(".button-category");
  const categoryList = document.querySelector(".category-list");
  const soldoutButton = document.querySelector(".button-soldout");
  const soldoutList = document.querySelector(".soldout-list");

  const toggleClass = (button, list) => {
    button.addEventListener("click", () => {
      list.classList.contains("active") ? list.classList.remove("active") : list.classList.add("active");
    });
    button.addEventListener("focusout", () => {
      list.classList.remove("active");
    });
  };
  toggleClass(categoryButton, categoryList);
  toggleClass(soldoutButton, soldoutList);

  // 검색 버튼 입력 했을때
  const inputbuttonEl = document.querySelector(".search");
  const inputEl = document.querySelector(".search-goodsname");
  inputEl.addEventListener("keyup", async (event) => {
    const listEls = await memoizedGetProduct();
    if (event.key === "Enter" && !event.isComposing) {
      const filterRes = productFilterList(listEls, inputEl.value);
      productPagination(filterRes, router);
    }
  });

  inputbuttonEl.addEventListener("click", async () => {
    const listEls = await memoizedGetProduct();
    const filterRes = productFilterList(listEls, inputEl.value);
    productPagination(filterRes, router);
  });
};
