document.getElementById("year").textContent = new Date().getFullYear();

const gallery = document.getElementById("gallery");
const modal = document.createElement("dialog");
modal.className = "image-modal";
modal.innerHTML = '<img alt="Vista ampliada" style="max-width:min(94vw, 980px);max-height:88vh;display:block;border-radius:8px;">';
document.body.appendChild(modal);

gallery?.addEventListener("click", (event) => {
  const figure = event.target.closest("figure");
  if (!figure) return;

  const image = figure.querySelector("img");
  if (!image) return;

  modal.querySelector("img").src = image.currentSrc || image.src;
  if (typeof modal.showModal === "function") {
    modal.showModal();
  }
});

modal.addEventListener("click", () => modal.close());

const form = document.getElementById("form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  const message = [
    "Hola Sugar Victory Cake, quiero pedir presupuesto.",
    "",
    `Nombre: ${data.name || ""}`,
    `WhatsApp: ${data.phone || ""}`,
    `Email: ${data.email || ""}`,
    `Servicio: ${data.service || ""}`,
    "",
    `Detalles: ${data.message || ""}`
  ].join("\n");

  window.open(`https://wa.me/34624728404?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  form.reset();
});
