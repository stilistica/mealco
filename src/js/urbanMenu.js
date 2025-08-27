import { menuUrbanList } from "../arrs/menuUrbanList.js";
import { renderFilters, renderMenu } from "./renderMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuUrbanList, ".list-menu");
  renderFilters(menuUrbanList, ".filter-menu", ".list-menu");
});