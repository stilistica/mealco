import { menuPressedList } from "../arrs/menuPressedList.js";
import { renderFilters, renderMenu } from "./renderMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuPressedList, ".list-menu");
  renderFilters(menuPressedList, ".filter-menu", ".list-menu");
});