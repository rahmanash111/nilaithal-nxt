"use client"

import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function FAQ() {

    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "What products does Nilaithal offer?",
            answer:
                "We offer a range of products including wind turbines, solar panels, electric vehicle (EV) chargers, and India1 Charger - EV charging station aggregator apps.",
            open: true
        },
        {
            id: 2,
            question: "How does Nilaithal contribute to sustainability?",
            answer:
                "Nilaithal is dedicated to transforming the energy landscape by harnessing renewable resources, reducing reliance on fossil fuels, and minimizing environmental impact.",
            open: false
        },
        {
            id: 3,
            question: "Are Nilaithal's products suitable for residential use?",
            answer:
                "Yes, our products are designed for both residential and commercial applications, offering clean and efficient energy solutions for various needs.",
            open: false
        },
        {
            id: 4,
            question: "Is financing available for Nilaithal's products?",
            answer:
                "Yes, we offer financing options to make our products more accessible to customers interested in transitioning to renewable energy.",
            open: false
        },
        {
            id: 5,
            question: "Does Nilaithal provide installation services?",
            answer:
                "Yes, we offer installation services for our products to ensure optimal performance and efficiency.",
            open: false
        },
        {
            id: 6,
            question: "How can I purchase Nilaithal's products?",
            answer:
                "You can contact us directly through our website or get in touch with our authorized distributors for purchasing inquiries.",
            open: false
        },
    ])

    const handleClick = (clickedId) => {
        setFaqs((prevItems) =>
            prevItems.map((item) =>
                item.id === clickedId ? { ...item, open: true } : { ...item, open: false }
            )
        );
    };

    return (
        <section className="grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-[40%_60%] py-10 px-[5%] min-h-[800px] max-w-[1500px]" style={{ backgroundColor: "#f9fbf5", }}>
            <div className="justify-center flex flex-col">
                {/* <h2 className="heading-title text-6xl">FAQ</h2>
                <h4 className="sub-text">About Company</h4> */}
                <div className="flex flex-col justify-between gap-4 md:gap-8 w-full sm:w-[70%]">
                    <h2 className="title text-3xl md:text-5xl text-left font-extrabold">
                        Frequently Asked Questions
                    </h2>
                    <p className="description">
                        The most comprehensive complete-system warranty in the solar industry. Hassle-free replacement, repair or reimbursement.
                    </p>
                    <span>Any Questions? <a href="mailto:milin@india1charger" style={{ color: '#469d2c' }}>milin@india1charger</a></span>
                </div>

            </div>
            <div className="justify-center flex flex-col box-border">
                {
                    faqs.map((item) => (
                        <AccordionItem key={item.id} item={item} onClick={handleClick} />
                    ))
                }
            </div>
        </section>
    )
}