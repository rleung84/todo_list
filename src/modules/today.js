import { format } from "date-fns";
function today_label() {
  const today_label = document.createElement("div");
  today_label.classList.add("today-label");
  const today_title = document.createElement("h2");
  today_title.innerHTML = "Today";
  const today_desc = document.createElement("div");
  today_desc.innerHTML = format(new Date(), "E MMM d");
  today_label.append(today_title, today_desc);
  return today_label;
}

function render_today() {
  const today_content = document.createElement("div");
  today_content.classList.add("today-content");
  today_content.append(today_label());

  return today_content;
}
export { render_today };
