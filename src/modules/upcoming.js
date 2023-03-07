import { format } from "date-fns";
function upcoming_label() {
  const upcoming_label = document.createElement("div");
  upcoming_label.classList.add("upcoming-label");
  const upcoming_title = document.createElement("h2");
  upcoming_title.innerHTML = format(new Date(), "MMMM yyyy");
  upcoming_label.append(upcoming_title);
  return upcoming_label;
}

function render_upcoming() {
  const upcoming_content = document.createElement("div");
  upcoming_content.classList.add("upcoming-content");
  upcoming_content.append(upcoming_label());

  return upcoming_content;
}
export { render_upcoming };
