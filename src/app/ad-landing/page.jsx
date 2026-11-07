"use client"

import { CTA } from '../components/landingpage/CTA'
import Customers from './Customers'
import Faq from './Faq'
import AdLandingHero from './Hero'
import HowItWorks from './HowItWorks'
import SolarSystems from './SolarSystems'
import SubsidyBanner from './SubsidyBanner'
import WhyChoose from './WhyChoose'
import useModal from "@/app/store/modal";

export default function AdLanding() {
     const openModal = useModal((state) => state.openModal);
    return (
        <div>
            <AdLandingHero />
            <SubsidyBanner />
            <SolarSystems />
            <HowItWorks />
            <WhyChoose />
            <Customers />
            <Faq />
            <CTA 
             onClick={() => openModal()} 
             quote = "Free site visit. Clear, itemised quote. No hidden costs. We handle your subsidy paperwork from start to finish."
             author= "Team Nilaithal"
             heading = {
                <>
                    <span className="text-green-900">Ready</span> to Cut Your
                    <br />
                    <span className="text-green-600">Electricity Bill</span>?
                </>
             }
             subheading = {
                <>
                 Get a free site visit and subsidy check.
                 <br />
                 No cost, no obligation.
                </>
             }
            />
        </div>
    )
}