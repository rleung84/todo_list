function filter_label() {
  const filter_label = document.createElement("div");
  filter_label.classList.add("filter-label");
  const filter_title = document.createElement("h2");
  filter_title.innerHTML = "Filters & Labels";
  filter_label.append(filter_title);
  return filter_label;
}

function render_filters() {
  const filters_content = document.createElement("div");
  filters_content.classList.add("filters_-content");
  filters_content.append(filter_label());

  return filters_content;
}
export { render_filters };
