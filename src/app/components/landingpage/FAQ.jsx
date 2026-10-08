"use client"

import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function FAQ() {

    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "What products does Nilaithal offer?",
            answer:
                "Nilaithal offers solar panel systems, EV charging solutions (including our India1 Charger network), and energy storage systems for residential, commercial, and industrial use.",
            open: true
        },
        {
            id: 2,
            question: "How does Nilaithal contribute to sustainability?",
            answer:
                "By helping homes and businesses switch from grid/fossil-fuel-dependent power to solar and stored renewable energy, we directly reduce carbon emissions per installation, and every EV charger we deploy supports cleaner transport infrastructure.",
            open: false
        },
        {
            id: 3,
            question: "Are Nilaithal's products suitable for residential use?",
            answer:
                "Yes. Our solar and storage systems are designed for both residential and commercial properties, scaled to match household energy needs and budgets.",
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
                "Yes, every system we sell is backed by professional installation and post-installation support, not just equipment supply.",
            open: false
        },
        {
            id: 6,
            question: "How can I purchase Nilaithal's products?",
            answer:
                "You can get started with a free consultation through our website or by contacting our team directly, we'll assess your needs and recommend the right solution before any purchase decision.",
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
        <section className="grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-[40%_60%] py-10 px-[5%] min-h-[750px] max-w-[1500px]" >
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
                    <span>Got a question we haven't answered here? Reach out anytime. <a href="mailto:milin@india1charger" style={{ color: '#469d2c' }}>milin@india1charger</a></span>
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