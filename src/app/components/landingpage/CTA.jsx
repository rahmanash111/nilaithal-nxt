"use client"

import { ArrowRight, Quote, User } from "lucide-react"
import bulb from "../../../assets/bulb.webp"
import Image from "next/image"
import Link from "next/link"
import { useContactStore } from "@/app/store/contactStore"

export const CTA = () => {

     const setScrollToForm = useContactStore(
        (state) => state.setScrollToForm
      );     

    return (<div className="w-full mx-auto mb-[5%] px-[5%]">
        <div className="max-w-[1500px] h-auto md:h-[350px] gap-6 md:gap-0 mx-auto justify-between grid grid-rows-2 md:grid-cols-[38%_58%] md:grid-rows-1">
            <div className="h-full w-full bg-(--primary-dark) rounded-3xl text-white flex flex-col justify-center gap-8 px-10 py-10">
                <Quote className="text-(--primary-light) fill-(--primary-light)" />
                <p className="text-base md:text-xl">Nilaithal's solar solutions has significantly reduced out energy costs and  helped us move toward a sustainable future.</p>
                <div className="flex items-center gap-4">
                    <div className="h-[60px] w-[60px] rounded-full bg-(--primary-light) flex items-center justify-center ">
                        <User height={"40px"} width={"40px"} />
                    </div>
                    <div>
                        <p className="font-semibold">Milin Jacob</p>
                        <p>Managing Director, Nilaithal</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-full bg-green-50 rounded-3xl relative flex p-4 md:px-12 items-center">
                <div className="w-full md:w-[60%]">
                    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                        <span className="text-green-900">Ready</span> to Make the Switch to
                        <br />
                        <span className="text-green-600">Clean Energy</span>?
                    </h2>

                    <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 w-[60%] md:w-full">
                        Let's build a sustainable future together.
                        <br />
                        Get a free consultation Today!
                    </p>
                    <div>

                        <Link
                            href="/contact"
                            onClick={()=>setScrollToForm(true)}
                            className="w-[50%] md:w-fit mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition-colors hover:bg-green-700"
                        >
                            Get a free consultation
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Image className="block md:hidden absolute w-[55%] h-[70%] bottom-0 -right-5" src={bulb} alt="image" />
                    </div>
                </div>
                <Image className="hidden md:block absolute w-[50%] h-[120%] -right-10" src={bulb} alt="image" />
            </div>
        </div>
    </div>)
}