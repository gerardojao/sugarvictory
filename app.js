// Año dinámico del footer
document.getElementById('year').textContent = new Date().getFullYear();

// Galería: abrir imagen en modal simple
const gallery = document.getElementById('gallery');
const modal = document.createElement('dialog');
modal.style.padding = '0';
modal.style.border = 'none';
modal.style.maxWidth = 'min(95vw, 900px)';
modal.style.borderRadius = '16px';
modal.innerHTML = '<img alt="Vista ampliada" style="max-width:100%;height:auto;display:block">';
document.body.appendChild(modal);

gallery?.addEventListener('click', (e)=>{
  const fig = e.target.closest('figure');
  if(!fig) return;
  const src = fig.querySelector('img')?.src;
  if(!src) return;
  modal.querySelector('img').src = src;
  if(typeof modal.showModal === 'function') modal.showModal();
});
modal.addEventListener('click', ()=> modal.close());

// Formulario: validación simple + fallback mailto
const form = document.getElementById('form');
const toast = document.getElementById('toast');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if(!data.name || !data.email || !data.message || !document.getElementById('policy').checked){
    alert('Por favor, completa los campos obligatorios.');
    return;
  }
  // Simular envío (aquí podrías integrar EmailJS, Formspree o tu backend)
  toast.style.display='block';
  setTimeout(()=> toast.style.display='none', 4000);

  // Fallback: abrir correo del cliente con mensaje precargado
  const subject = encodeURIComponent('Nuevo pedido — Sugar Victory');
  const body = encodeURIComponent(
    `Nombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone||''}\nServicio: ${data.service||''}\n\nMensaje:\n${data.message}`
  );
  window.open(`mailto:hola@sugarvictory.es?subject=${subject}&body=${body}`,'_blank');
  form.reset();
});
