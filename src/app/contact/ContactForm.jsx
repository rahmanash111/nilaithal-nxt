"use client";

import React, { useState, useEffect } from "react";
import {  BadgeCheck,  CircleAlert,  Landmark,  Leaf,  LoaderCircle,  ShieldCheck,  Users } from "lucide-react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useContactStore } from "../store/contactStore";
import { useSnackbar } from "notistack";

export default function ContactForm() {

 const scrollToForm = useContactStore((state) => state.scrollToForm);
 const setScrollToForm = useContactStore((state) => state.setScrollToForm);

 const { enqueueSnackbar } = useSnackbar();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

 useEffect(() => {
   if (scrollToForm) {
     const timer = setTimeout(() => {
       const el = document.getElementById("contact-form");

       if (el) {
         el.scrollIntoView({
           behavior: "smooth",
           block: "start",
         });
       }

       // Reset so normal visits to /contact don't scroll
       setScrollToForm(false);
     }, 200);

     return () => clearTimeout(timer);
   }
 }, [scrollToForm, setScrollToForm]);

  const highlights = [
    {
      icon: Leaf,
      title: "Clean Energy Solutions",
      subtitle: "For homes & businesses",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      subtitle: "Certified energy professionals",
    },
    {
      icon: Landmark,
      title: "Government Subsidy Help",
      subtitle: "PM Surya Ghar registration support",
    },
  ];

  let date = new Date();

  const QUERY = gql`
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

  const [createContactLead, { loading, error }] = useMutation(QUERY, {
    onCompleted: (response) => {
      setSubmitted(true);
      updateStatus(200);
      setformData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
      setErrors({});
      enqueueSnackbar("Form submitted successfully!", {
        variant: "success",
      });
      // if (response.ok) {
      //     const data = await response.json();
      //     console.log('Success:', data);

      // } else {
      //
      // }
      // enqueueSnackbar("Successfully Submitted! Our Team Will Reach Out To You!", { variant: "success", anchorOrigin: { vertical: 'top', horizontal: 'center' } });

      // gtag_report_conversion();

      // setFormData({
      //     name: '',
      //     // email: '',
      //     phone: '',
      //     location: ''
      // });

      // setErrors({
      //     name: '',
      //     // email: '',
      //     phone: '',
      //     location: ''
      // });

      // setTimeout(() => {
      //     setIsModalOpen(false);
      // }, 3000);
    },
    onError: (error) => {
      enqueueSnackbar("Submission Failed!", { variant: "error", anchorOrigin: { vertical: 'top', horizontal: 'center' } });
      setSubmitted(true);
      console.error("Error:", error);
      updateStatus(500);
    },
  });

  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [statusCode, setStatusCode] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [counter, setCounter] = useState(5);

  const validateField = (name, value) => {
    let errorMessage = "";
    const nameRegex = /^[a-zA-Z\s]{1,50}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^[9876]\d{9}$/;

    switch (name) {
      case "name":
        if (!nameRegex.test(value)) {
          errorMessage = "Name must be alphabetic and up to 50 characters long";
        }
        break;
      case "email":
        if (!emailRegex.test(value)) {
          errorMessage = "Invalid email format";
        }
        break;
      case "phone":
        if (!phoneRegex.test(value)) {
          errorMessage = "Enter a valid 10-digit phone number";
        }
        break;
      case "subject":
        if (!value) {
          errorMessage = "Subject is required";
        }
        break;
      case "message":
        if (!value) {
          errorMessage = "Message is required";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
    return errorMessage;
  };

  const updateStatus = (code) => {
    setStatusCode(code);
  };

  useEffect(() => {
    if (submitted) {
      const interval = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [submitted]);

  useEffect(() => {
    if (counter === 0) {
      window.location.reload();
    }
  }, [counter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submitting
    const newErrors = {};
    for (const field in formData) {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await createContactLead({
        variables: {
          name: formData.name || "",
          email: formData.email || "",
          phone: formData.phone || "",
          message: formData.message || "",
          subject: formData.subject || "",
          location: "",
          leadType: "Contact Form",
          entryDateAndTime: date.toString().slice(0, 24),
        },
      });

      // if (response.ok) {
      //     const data = await response.json();
      //     console.log('Success:', data);
      //     setSubmitted(true)
      //     updateStatus(response.status)
      //     setformData({
      //         name: '',
      //         email: '',
      //         subject: '',
      //         phone: '',
      //         message: ''
      //     });
      //     setErrors({});
      // } else {
      //     setSubmitted(true)
      //     console.error('Error:', response.statusText);
      //     updateStatus(response.status)
      // }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== "",
    );
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <div>
      <section className="my-10 px-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[40%_60%]  mt-5 w-full gap-12 md:gap-0">
          <div className="shrink-0 px-6 sm:px-8 lg:w-full">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--primary-light)">
              send Us a message
            </span>

            <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl">
              Let's Start Your
              <br />
              <span className="text-(--primary-light)">Energy Journey.</span>
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600">
              Fill in the form and one of our energy consultants will reach out
              within 24 hours to understand your requirements. From rooftop
              solar and EV charging to battery storage and government subsidy
              applications. we handle everything, and we'll tell you honestly
              what works best for your situation before you spend a rupee.
            </p>

            <div className="mt-8 flex flex-col items-start gap-6 sm:gap-8">
              {highlights.map(({ icon: Icon, title, subtitle }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-(--primary-light)">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-(--primary-light)">
                      {title}
                    </span>
                    <span className="block text-xs text-gray-500">
                      {subtitle}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="py-4 px-10 rounded-md  w-full flex flex-col justify-center "
            style={{ backgroundColor: "#f9fbf5" }}
          >
            {!submitted ? (
              <form
                id="contact-form"
                className="w-full flex flex-col gap-10"
                onSubmit={handleSubmit}
              >
                <div>
                  <p className="font-bold text-2xl md:text-3xl my-4">
                    Get in Touch
                  </p>
                  <p className="text-sm md:text-base text-gray-500">
                    Fill in your details and we'll get back to you shortly.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr,1fr] gap-10 mt-5 w-full items-center justify-center">
                  <div className="form-group">
                    <label
                      htmlFor="fullname"
                      className="text-xs block mb-2 font-medium text-black "
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Carter"
                      className="bg-white py-4 px-8 rounded-md focus:outline-green-500 leading-tight lg:w-full md:w-full w-full"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-700 font-semibold">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="text-xs block mb-2 font-medium text-black"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johncarter@gmail.com"
                      className="bg-white py-4 px-8 rounded-md focus:outline-green-500 leading-tight lg:w-full md:w-full w-full "
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-700 font-semibold">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr,1fr] gap-10 mt-5 w-full items-center justify-center">
                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className="text-xs block mb-2 font-medium text-black "
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      required
                      placeholder="(123)-456-7890"
                      className="bg-white py-4 px-8 rounded-md focus:outline-green-500 leading-tight lg:w-full md:w-full w-full"
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-700 font-semibold">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="subject"
                      className="text-xs block mb-2 font-medium text-black"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      onChange={handleChange}
                      value={formData.subject}
                      placeholder="ex. Solar Panels, EV Charging, etc"
                      className="bg-white py-4 px-8 rounded-md focus:outline-green-500 leading-tight lg:w-full md:w-full w-full "
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-red-700 font-semibold">
                        {errors.subject}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group w-full">
                  <label
                    htmlFor="message"
                    className="text-xs block mb-2 font-medium text-black"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white block p-2.5 w-full rounded-md focus:outline-green-500 px-8"
                    placeholder="Your Message..."
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-700 font-semibold">
                      {errors.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <button
                    className={`py-3 px-3 rounded-md text-white font-medium hover:bg-black ${submitted ? "bg-gray-400" : "bg-[#469d2c]"}`}
                    type="submit"
                    disabled={submitted}
                  >
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <LoaderCircle className="animate-spin h-5 w-5" />
                          <span>Sending...</span>
                        </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-(--primary-light) w-8 h-8" />
                    {/* <Image alt="image" className="w-12" src={hero_icon3} /> */}
                    <p className="text-gray-500 text-[12px] md:text-[14px] md:text-base">
                      Your information is safe with us. <br /> We never share
                      your Details
                    </p>
                  </div>
                </div>
              </form>
            ) : (
              <>
                {statusCode === 200 ? (
                  <div className=" flex flex-col items-center justify-center gap-5">
                    <BadgeCheck />
                    {/* <CheckBadgeIcon className="h-16 w-30 stroke-green-500" fill='transparent' /> */}
                    <h2 className="font-bold text-xl text-green-500">
                      Thank You For Contacting Us, Our Team Will Reach Out To
                      You!
                    </h2>
                    <h4>This Page will refresh in {counter}</h4>
                  </div>
                ) : (
                  <div className=" flex flex-col items-center justify-center gap-5">
                    <CircleAlert />
                    {/* <ExclamationCircleIcon className="h-16 w-30  stroke-red-500" fill='transparent' /> */}
                    <h2 className="font-bold text-xl text-red-500">
                      Oops! Something Went Wrong <strong>{statusCode}</strong>
                    </h2>
                    <h4>Please try again later</h4>
                    <h4>This Page will refresh in {counter}</h4>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
