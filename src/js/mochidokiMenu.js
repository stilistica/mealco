import { menuMochidokiList } from "../arrs/menuMochidokiList.js";
import { renderFilters, renderMenu } from "./renderMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuMochidokiList, ".list-menu");
  renderFilters(menuMochidokiList, ".filter-menu", ".list-menu");
});