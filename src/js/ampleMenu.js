import { menuAmpleList } from "../arrs/menuAmpleList.js";
import { renderFilters, renderMenu } from "./renderMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuAmpleList, ".list-menu");
  renderFilters(menuAmpleList, ".filter-menu", ".list-menu");
});