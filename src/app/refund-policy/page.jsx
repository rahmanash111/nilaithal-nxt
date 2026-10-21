const Refund = () => {
    return (
        <>
            <section className='min-h-[20vh] md:min-h-[30vh] flex flex-col items-center justify-center gap-5'>
                <h2 className='font-bold text-4xl text-(--primary-light)'>Refund Policy</h2>
                <h4 className='font-semibold text-xl'>Date of Last Revision:July 05,2026</h4>

            </section>
            <hr className='w-1/2 left-1/2 transform -translate-x-1/2 absolute' />
            <section className='lg:px-20 md:px-20 px-10 flex flex-col items-center my-5 gap-5  mb-18'>
                <p>Nilaithal is committed to protecting your privacy. This policy explains how we collect, use, and share your personal information.</p>
                <hr className='w-1/2' />
                <div className='flex items-start flex-col gap-4'>
                    <h5 className='font-semibold text-xl'>1. Returns</h5>
                    <ul className='flex flex-col gap-3 ml-5'>
                        <li>1.1. Our policy lasts 15 days. If 15 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.</li>
                        <li>1.2. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</li>
                    </ul>


                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>2. Refunds</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>2.1. Once your return is received and inspected, we will send you an email to notify you that we have received your returned item.</li>
                            <li>2.2. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment, within 30 days.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>3. Late or Missing Refunds</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>3.1. If you haven’t received a refund yet, first check your bank account again.</li>
                            <li>3.2. Then contact your credit card company, it may take some time before your refund is officially posted.</li>
                            <li>3.3. Next, contact your bank. There is often some processing time before a refund is posted.</li>
                            <li>3.4. If you’ve done all of this and you still have not received your refund yet, please contact us at<a href='mailto:info@nilaithal.com' className='text-[#6b994b]'>info@nilaithal.com</a> , Give Us a Call: <a href='tel:+9199629 93939' className='text-[#6b994b]'>+91-99629 93939</a>.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>4. Sale Items</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>4.1. Only regular priced items may be refunded. Sale items cannot be refunded.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>5. Exchanges</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>5.1. We only replace items if they are defective or damaged. If you need to exchange it for the same item, please contact us at <a href='mailto:info@nilaithal.com' className='text-[#6b994b]'>info@nilaithal.com</a> , Give Us a Call: <a href='tel:+9199629 93939' className='text-[#6b994b]'>+91-99629 93939</a>.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>6. Shipping</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>6.1. To return your product, you should mail your product to Return Address: No 190 - 192, Hameed Complex Anna Salai,Chennai 600006
                                .</li>
                            <li>6.2. You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>7. Contact Us</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>7.1. If you have any questions about this privacy policy, please contact us at Email:  <a href='mailto:info@nilaithal.com' className='text-[#6b994b]'>info@nilaithal.com</a> , Give Us a Call: <a href='tel:+9199629 93939' className='text-[#6b994b]'>+91-99629 93939</a></li>
                        </ul>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Refund;