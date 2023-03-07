import { render_inbox } from "./inbox";
import { render_today } from "./today";
import { render_upcoming } from "./upcoming";
import { render_filters } from "./filters";

function navigateTo(e) {
  var right = document.querySelector(".right");

  right.innerHTML = "";

  switch (e.currentTarget.classList[1]) {
    case "today":
      right.append(render_today());
      break;
    case "inbox":
      right.append(render_inbox());
      break;
    case "calendar_month":
      right.append(render_upcoming());
      break;
    case "filter_list":
      right.append(render_filters());
      break;
    default:
      right.append(render_today());
      break;
  }
}

function icon(symbol) {
  const icon = document.createElement("div");
  icon.classList.add("material-symbols-outlined");
  icon.innerHTML = symbol;
  return icon;
}

function icon_label(symbol, label) {
  const icon_label = document.createElement("div");
  icon_label.classList.add("icon-label");
  icon_label.classList.add(symbol);
  const text = document.createElement("div");
  text.innerHTML = label;
  icon_label.append(icon(symbol), text);
  icon_label.addEventListener("click", navigateTo);
  return icon_label;
}

function search() {
  const search = document.createElement("div");
  search.classList.add("search");
  const search_bar = document.createElement("input");
  search_bar.type = "text";
  search_bar.placeholder = "Search";
  search.append(icon("search"), search_bar, icon("close"));
  return search;
}

function header_left() {
  const header_left = document.createElement("div");
  header_left.classList.add("header-left");
  header_left.append(icon("menu"), icon("home"), search());
  return header_left;
}
function header_right() {
  const header_right = document.createElement("div");
  header_right.classList.add("header-right");
  header_right.append(
    icon("add"),
    icon("productivity"),
    icon("help"),
    icon("notifications"),
    icon("account_circle")
  );
  return header_right;
}

function header() {
  const header = document.createElement("div");
  header.classList.add("header");
  header.append(header_left(), header_right());
  return header;
}

function left_upper() {
  const left_upper = document.createElement("div");
  left_upper.classList.add("left-upper");
  left_upper.append(
    icon_label("inbox", "Inbox"),
    icon_label("today", "Today"),
    icon_label("calendar_month", "Upcoming"),
    icon_label("filter_list", "Filters & Labels")
  );
  return left_upper;
}
function left_lower() {
  const left_lower = document.createElement("div");
  left_lower.classList.add("left-lower");
  const projects = document.createElement("h2");
  projects.innerHTML = "Projects";
  left_lower.append(projects);
  return left_lower;
}

function left() {
  const left = document.createElement("div");
  left.classList.add("left");
  left.append(left_upper(), left_lower());
  return left;
}
function right() {
  const right = document.createElement("div");
  right.classList.add("right");
  right.append(render_today());
  return right;
}

function content() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.append(left(), right());
  return content;
}

export { header, content };
