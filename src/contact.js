export function loadContactPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactSection = document.createElement("section");
  contactSection.classList.add("contact");

  contactSection.innerHTML = `
    <h1>Contact Us</h1>
    <p>We’d love to hear from you! Reach out using the form below:</p>
    
    <form class="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  `;

  content.appendChild(contactSection);

  const form = contactSection.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log("Form submitted:", { name, email, message });

    alert("Thank you for reaching out! We'll get back to you soon.");
    form.reset();
  });
}

loadContactPage();
