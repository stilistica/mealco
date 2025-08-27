import { menuNumList } from "../arrs/menuNumList.js";
import { renderFilters, renderMenu } from "./renderMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuNumList, ".list-menu");
  renderFilters(menuNumList, ".filter-menu", ".list-menu");
});