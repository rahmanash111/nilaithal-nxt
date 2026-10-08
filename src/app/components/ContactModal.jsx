"use client";

import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import useModal from "../store/modal";
import { useSnackbar } from "notistack";


const CREATE_CONTACT_LEAD = gql`
  mutation createNilaithalLead(
    $name: String!
    $email: String!
    $phone: String!
    $subject: String!
    $location: String!
    $message: String!
    $leadType: String!
    $entryDateAndTime: String!
  ) {
    createNilaithalLead(
      data: {
        name: $name
        email: $email
        phone: $phone
        subject: $subject
        location: $location
        message: $message
        leadType: $leadType
        entryDateAndTime: $entryDateAndTime
      }
    ) {
      name
      email
      phone
    }
  }
`;

const initialForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

const initialErrors = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

export default function ContactModal() {
    const { enqueueSnackbar } = useSnackbar();

    const isModalOpen = useModal((state) => state.isModalOpen);
    const closeModal = useModal((state) => state.closeModal);

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
    const [submitted, setSubmitted] = useState(false);

    const [createContactLead, { loading }] = useMutation(
        CREATE_CONTACT_LEAD,
        {
            onCompleted: () => {

                enqueueSnackbar("Successfully Submitted! Our Team Will Reach Out To You!", {
                    variant: "success",
                    anchorOrigin: { vertical: 'top', horizontal: 'center' }
                });

                setSubmitted(true);

                setForm(initialForm);
                setErrors(initialErrors);

                // Close modal after showing success message
                setTimeout(() => {
                    setSubmitted(false);
                    closeModal();
                }, 5000);


            },

            onError: (error) => {
                enqueueSnackbar("Something Went wrong! Please Try After Sometimes", {
                    variant: "error",
                    anchorOrigin: { vertical: 'top', horizontal: 'center' }
                });
                // console.error("Contact lead error:", error);
            },
        }
    );

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, [])

    // Prevent background scrolling
    useEffect(() => {
        if (!isModalOpen) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isModalOpen]);

    // Close modal with Escape key
    useEffect(() => {
        if (!isModalOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isModalOpen, closeModal]);

    if (!isModalOpen) {
        return null;
    }

    // ----------------------------------
    // VALIDATION
    // ----------------------------------

    const validateField = (field, value) => {
        const trimmedValue = value.trim();

        switch (field) {
            case "name":
                if (!trimmedValue) {
                    return "Name is required";
                }

                if (trimmedValue.length < 2) {
                    return "Name must be at least 2 characters";
                }

                return "";

            case "email":
                if (!trimmedValue) {
                    return "Email is required";
                }

                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(trimmedValue)) {
                    return "Please enter a valid email address";
                }

                return "";

            case "phone":
                if (!trimmedValue) {
                    return "Phone number is required";
                }

                if (!/^[9876]\d{9}$/.test(trimmedValue)) {
                    return "Enter a valid 10-digit phone number";
                }

                return "";

            case "subject":
                if (!trimmedValue) {
                    return "Subject is required";
                }

                if (trimmedValue.length < 2) {
                    return "Subject must be at least 2 characters";
                }

                return "";

            case "message":
                if (!trimmedValue) {
                    return "Message is required";
                }

                return "";

            default:
                return "";
        }
    };

    const validateForm = () => {
        const newErrors = {
            name: validateField("name", form.name),
            email: validateField("email", form.email),
            phone: validateField("phone", form.phone),
            subject: validateField("subject", form.subject),
            message: validateField("message", form.message),
        };

        setErrors(newErrors);

        return !Object.values(newErrors).some(
            (error) => error !== ""
        );
    };

    // ----------------------------------
    // INPUT CHANGE
    // ----------------------------------

    const handleChange = (event) => {
        const { name, value } = event.target;

        let newValue = value;

        // Phone: allow only numbers and max 10 digits
        if (name === "phone") {
            newValue = value
                .replace(/\D/g, "")
                .slice(0, 10);
        }

        setForm((prev) => ({
            ...prev,
            [name]: newValue,
        }));

        // Validate while typing
        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, newValue),
        }));
    };

    // ----------------------------------
    // SUBMIT
    // ----------------------------------

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        try {
            await createContactLead({
                variables: {
                    name: form.name.trim(),
                    email: form.email.trim(),
                    phone: form.phone.trim(),
                    subject: form.subject.trim(),
                    message: form.message.trim(),

                    location: "",

                    leadType: "Modal Contact Form",

                    entryDateAndTime: new Date().toString().slice(0, 24),
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    // ----------------------------------
    // BACKDROP CLICK
    // ----------------------------------

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };


    return (
        <div className="fixed top-0 left-0 h-screen w-screen z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-5 box-border" onMouseDown={handleBackdropClick} >
            <div className="relative w-full max-w-[1150px] max-h-[75vh] overflow-y-auto rounded-xl bg-[#f8faf4] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
                {/* Close button */}
                <button type="button" onClick={closeModal} className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center            justify-center            rounded-full            bg-white            text-gray-700            shadow            transition            hover:bg-gray-100            hover:text-black          " aria-label="Close contact form"                >
                    <X size={20} />
                </button>

                {/* FORM */}
                <form onSubmit={handleSubmit} noValidate className="            p-6            sm:p-8            lg:p-10          "                >
                    {/* Header */}
                    <div className="mb-7 pr-10">
                        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                            Get In Touch
                        </h2>

                        <p className="mt-2 text-sm text-gray-500 sm:text-base">
                            Have a question or project in mind? Send us a message.
                        </p>
                    </div>

                    {/* Success message */}
                    {submitted && (
                        <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-700">
                            <CheckCircle2 size={22} />

                            <span>
                                Your message has been sent successfully.
                            </span>
                        </div>
                    )}

                    {/* Fields */}
                    <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">

                        {/* NAME */}
                        <div>
                            <label
                                htmlFor="contact-name"
                                className="mb-2 block text-sm font-medium text-black"
                            >
                                Full Name
                            </label>

                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Carter"
                                className={`h-[52px] w-full rounded-md border bg-white px-4 text-sm text-gray-800 outline-none                  transition                  placeholder:text-gray-400                  focus:ring-2                  ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-green-600 focus:ring-green-100"}                `} />

                            {errors.name && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label
                                htmlFor="contact-email"
                                className="mb-2 block text-sm font-medium text-black"
                            >
                                Email Address
                            </label>

                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="johncarter@gmail.com"
                                className={`                  h-[52px]                  w-full                  rounded-md                  border                  bg-white                  px-4                  text-sm                  text-gray-800                  outline-none                  transition                  placeholder:text-gray-400                  focus:ring-2                  ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-green-600 focus:ring-green-100"}                `} />
                            {errors.email && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* PHONE */}
                        <div>
                            <label
                                htmlFor="contact-phone"
                                className="mb-2 block text-sm font-medium text-black"
                            >
                                Phone Number
                            </label>

                            <input
                                id="contact-phone"
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="9876543210"
                                inputMode="numeric"
                                maxLength={10}
                                className={`                  h-[52px]                  w-full                  rounded-md                  border                  bg-white                 px-4                  text-sm                  text-gray-800                  outline-none                  transition                  placeholder:text-gray-400                  focus:ring-2                  ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-green-600 focus:ring-green-100"}                `} />
                            {errors.phone && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        {/* SUBJECT */}
                        <div>
                            <label
                                htmlFor="contact-subject"
                                className="mb-2 block text-sm font-medium text-black"
                            >
                                Subject
                            </label>

                            <input
                                id="contact-subject"
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="ex. Solar Panels, EV Charging, etc"
                                className={`                  h-[52px]                  w-full                  rounded-md                  border                  bg-white                  px-4                  text-sm                  text-gray-800                  outline-none                  transition                  placeholder:text-gray-400                  focus:ring-2                  ${errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-green-600 focus:ring-green-100"}                `} />

                            {errors.subject && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {errors.subject}
                                </p>
                            )}
                        </div>

                        {/* MESSAGE */}
                        <div className="md:col-span-2">
                            <label
                                htmlFor="contact-message"
                                className="mb-2 block text-sm font-medium text-black"
                            >
                                Your Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message..."
                                rows={windowWidth < 600 ? 1 : 4}
                                className={`                  w-full                  resize-y                  rounded-md                  border                  bg-white                  px-4                  py-4                  text-sm                  text-gray-800                  outline-none                  transition                  placeholder:text-gray-400                  focus:ring-2                  ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-green-600 focus:ring-green-100"}                `} />
                            {errors.message && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {errors.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* SUBMIT */}
                    <div className="mt-7">
                        <button
                            type="submit"
                            disabled={loading}
                            className="                inline-flex                min-w-[125px]                items-center                justify-center                gap-2                rounded-md                bg-green-600                px-5                py-3                text-sm                font-semibold                text-white                transition                hover:bg-green-700                disabled:cursor-not-allowed                disabled:opacity-70              "                        >
                            {loading ? (
                                <>
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </div>


                    {/* Server error */}
                    {/* 
              If you want to show Apollo errors to the user,
              you can use the error returned from useMutation.
          */}
                </form>
            </div>
        </div>
    );
}