function inbox_label() {
  const inbox_label = document.createElement("div");
  inbox_label.classList.add("inbox-label");
  const inbox_title = document.createElement("h2");
  inbox_title.innerHTML = "Inbox";
  inbox_label.append(inbox_title);
  return inbox_label;
}

function render_inbox() {
  const render_inbox = document.createElement("div");
  render_inbox.classList.add("inbox-content");
  render_inbox.append(inbox_label());
  return render_inbox;
}
export { render_inbox };
