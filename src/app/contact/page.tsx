import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="space-y-6 mx-auto p-8 w-3/4 mt-16 border flex flex-col ">
      <h2 className="text-xl font-medium">Contact me!</h2>
      <ContactForm />
    </div>
  );
}

export default Contact;
