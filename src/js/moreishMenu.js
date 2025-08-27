import { menuMoreishList } from "../arrs/menuMoreishList";
import { renderFilters, renderMenu } from "./renderMenu";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuMoreishList, ".list-menu");
  renderFilters(menuMoreishList, ".filter-menu", ".list-menu");
});