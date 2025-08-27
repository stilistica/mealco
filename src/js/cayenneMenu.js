import { menuCayenneList } from "../arrs/menuCayenneList.js";
import { renderFilters, renderMenu } from "./renderMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuCayenneList, ".list-menu");
  renderFilters(menuCayenneList, ".filter-menu", ".list-menu");
});