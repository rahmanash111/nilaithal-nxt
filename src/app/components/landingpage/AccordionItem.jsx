import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { CircleMinus, CirclePlus } from "lucide-react";

const AccordionItem = ({ item, onClick }) => {
    return (
        <div>
            <style>
                {`
                    .faq{
                        }
                        
                        .faq-open {
                            max-height: 1000px;
                            opacity: 1;
                            transition: all 1s ease;
                        }
                        
                    .faq-close {
                        opacity: 0;
                        max-height: 0;
                        overflow: hidden;
                        transition: all .5s ease;
                    }

                `}
            </style>
            <button
                className="box-border w-full text-left p-4 focus:outline-none bg-gray-100 rounded-lg shadow-md flex justify-between items-center my-4 font-medium"
                onClick={() => onClick(item.id)}
            >
                {item.question}
                {item.open ? <CircleMinus /> : <CirclePlus />}

            </button>
            {/* <AnimatePresence> */}
            {/* <motion.div */}
            <div key={item.id} className={`mt-2 ml-4 faq ${item.open ? "faq-open" : "faq-close"}`} >
                <p>{item.answer}</p>
            </div>
            {/* </AnimatePresence> */}
        </div >
    );
};

export default AccordionItem;
