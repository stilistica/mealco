import { menuPoutineList } from "../arrs/menuPoutineList.js";
import { renderFilters, renderMenu } from "./renderMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuPoutineList, ".list-menu");
  renderFilters(menuPoutineList, ".filter-menu", ".list-menu");
});