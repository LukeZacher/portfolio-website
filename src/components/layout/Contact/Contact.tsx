import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "../../shared/SectionHeader";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim().length === 0) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-primary section-container" id="contact">
      <div className="content-container">
        <SectionHeader
          title="Contact"
          description="If you have any questions or would like to talk, use the form below to contact me and I'll get back to you as soon as I can!"
        />
        <form className="space-y-5 max-w-3xl" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-neutral-100">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full mt-1 p-2 rounded-md bg-primary-light text-neutral-100 ${
                errors.name ? "border-2 border-error" : ""
              }`}
              required
            />
            {errors.name && (
              <p className="mt-1 text-error text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-neutral-100">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full mt-1 p-2 rounded-md bg-primary-light text-neutral-100 ${
                errors.email ? "border-2 border-error" : ""
              }`}
              required
            />
            {errors.email && (
              <p className="mt-1 text-error text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="subject" className="block text-neutral-100">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 rounded-md bg-primary-light text-neutral-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-neutral-100">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`w-full mt-1 p-2 rounded-md bg-primary-light text-neutral-100 ${
                errors.message ? "border-2 border-error" : ""
              }`}
              required
            />
            {errors.message && (
              <p className="mt-1 text-error text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`contact-button w-full py-2 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
