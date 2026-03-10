// js/components/whatsapp.js

export function attachWhatsAppButton() {
  const whatsappContainer = document.createElement('div');
  whatsappContainer.className = 'floating-actions';
  
  // Phone/Call Button for Mobile
  const callBtn = document.createElement('a');
  callBtn.href = "tel:+919876543210";
  callBtn.className = "btn-call-floating";
  callBtn.setAttribute("aria-label", "Call Us");
  // Simple phone icon SVG
  callBtn.innerHTML = `
    <svg viewBox="0 0 24 24">
      <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
      <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.086-1.391l-4.064-3.696z"/>
    </svg>
  `;
  
  // WhatsApp Button
  const waBtn = document.createElement('a');
  waBtn.href = "https://wa.me/919876543210";
  waBtn.target = "_blank";
  waBtn.rel = "noopener noreferrer";
  waBtn.className = "btn-whatsapp-floating";
  waBtn.setAttribute("aria-label", "Chat on WhatsApp");
  // Simple WhatsApp SVG
  waBtn.innerHTML = `
    <svg viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.666.598 1.236.786 1.41.874.174.086.275.072.376-.043l.42-.507c.115-.159.229-.13.39-.072.16.058 1.011.478 1.185.565.173.087.289.13.332.202.043.073.043.423-.101.827z"/>
      <path d="M12.031 2c-5.564 0-10.081 4.517-10.082 10.081 0 1.954.551 3.864 1.558 5.485L2 22l4.576-1.194c1.551.91 3.344 1.391 5.437 1.393 5.562 0 10.08-4.518 10.082-10.083C22.093 6.518 17.592 2 12.031 2zm0 18.252c-1.634.001-3.238-.431-4.646-1.246l-.333-.193-3.457.906.924-3.369-.212-.337c-.896-1.425-1.37-3.093-1.369-4.814.002-4.524 3.682-8.204 8.207-8.204 4.522 0 8.205 3.68 8.206 8.205 0 4.526-3.682 8.204-8.206 8.206z"/>
    </svg>
  `;
  
  whatsappContainer.appendChild(callBtn);
  whatsappContainer.appendChild(waBtn);
  document.body.appendChild(whatsappContainer);
}
