import { menuProperList } from "../arrs/menuProperList.js";
import { renderFilters, renderMenu } from "./renderMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuProperList, ".list-menu");
  renderFilters(menuProperList, ".filter-menu", ".list-menu");
});