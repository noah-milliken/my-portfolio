import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="space-y-6 mx-auto p-8 mt-16 flex flex-col w-full max-w-screen-lg">
      <h2 className="text-xl font-medium">Contact me</h2>
      <ContactForm />
    </div>
  );
}

export default Contact;
