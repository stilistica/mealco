import { menuNuchasList } from "../arrs/menuNuchasList";
import { renderFilters, renderMenu } from "./renderMenu";

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuNuchasList, ".list-menu");
  renderFilters(menuNuchasList, ".filter-menu", ".list-menu");
});