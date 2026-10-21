const PrivacyPolicy = () => {
    return (
        <>
            <section className='min-h-[20vh] md:min-h-[30vh] flex flex-col items-center justify-center gap-5'>
                <h2 className='font-bold text-4xl text-(--primary-light)'>Privacy Policy</h2>
                <h4 className='font-semibold text-xl'>Date of Last Revision:July 03,2026</h4>
            </section>
            <hr className='w-1/2 left-1/2 transform -translate-x-1/2 absolute' />
            <section className='lg:px-20 md:px-20 px-10 flex flex-col items-center my-5 gap-5  mb-18'>
                <p>Nilaithal is committed to protecting your privacy. This policy explains how we collect, use, and share your personal information.</p>
                <hr className='w-1/2' />
                <div className='flex items-start flex-col gap-4'>
                    <h5 className='font-semibold text-xl'>1. Information We Collect</h5>
                    <ul className='flex flex-col gap-3 ml-5'>
                        <li>1.1. We collect information you provide when you place an order, create an account, or contact us.</li>
                        <li>1.2. This information may include your name, email address, phone number, shipping address, and payment information.</li>
                    </ul>


                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>2. How We Use Your Information</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>2.1. We use your information to process your orders, provide customer support, and improve our services.</li>
                            <li>2.2. We may also use your information to send you promotional emails, which you can opt-out of at any time.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>3. Sharing Your Information</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>3.1. We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law.</li>
                            <li>3.2. We may share your information with trusted third parties who assist us in operating our website, conducting our business,<br /> or servicing you, so long as those parties agree to keep this information confidential.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>4. Security</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>4.1. We implement a variety of security measures to maintain the safety of your personal information.</li>
                            <li>4.2. While we strive to protect your personal information, we cannot guarantee its absolute security.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>5. Your Rights</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>5.1. You have the right to access, correct, or delete your personal information.</li>
                            <li>5.2. You can exercise these rights by contacting us at [your-contact-info].</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>6. Changes to This Policy</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>6.1. We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h5 className='font-semibold text-xl'>7. Contact Us</h5>
                        <ul className='flex flex-col gap-3 ml-5'>
                            <li>7.1. If you have any questions about this privacy policy, please contact us at Email:  <a href='mailto:info@nilaithal.com' className='text-[#6b994b]'>info@nilaithal.com</a> , Give Us a Call: <a href='tel:+9199629 93939' className='text-[#6b994b]'>+91-99629 93939</a></li>
                        </ul>
                    </div>

                    <div id="delete-account" className="flex flex-col gap-4 scroll-mt-24">
                        <h5 className="font-semibold text-xl">
                            8. Account Deletion
                        </h5>

                        <p>
                            You can request the deletion of your India One Charger account and
                            associated personal data at any time.
                        </p>

                        <div className="flex flex-col gap-3">
                            <h6 className="font-semibold">How to Delete Your Account</h6>

                            <ul className="list-disc ml-6 flex flex-col gap-2">
                                <li>Open the India One Charger mobile application.</li>
                                <li>Navigate to <strong>Profile &gt; Delete Account</strong>.</li>
                                <li>Confirm your account deletion request.</li>
                                <li>
                                    Your request will be processed within <strong>2 business days</strong>.
                                </li>
                                <li>
                                    If you are unable to access the application, you can request account
                                    deletion by contacting us at{" "}
                                    <a
                                        href="mailto:info@nilaithal.com"
                                        className="text-[#6b994b]"
                                    >
                                        info@nilaithal.com
                                    </a>.
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h6 className="font-semibold">Information That Will Be Deleted</h6>

                            <ul className="list-disc ml-6 flex flex-col gap-2">
                                <li>Account information (name, email address, and phone number).</li>
                                <li>Saved vehicles (if applicable).</li>
                                <li>Favorite charging stations.</li>
                                <li>Application preferences and settings.</li>
                                <li>Authentication credentials associated with your account.</li>
                                <li>Personal profile information stored within the app.</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h6 className="font-semibold">Information That May Be Retained</h6>

                            <p>
                                Certain information may be retained where required by applicable laws,
                                regulations, or for legitimate business purposes. This may include:
                            </p>

                            <ul className="list-disc ml-6 flex flex-col gap-2">
                                <li>Charging session history.</li>
                                <li>Payment and transaction records.</li>
                                <li>Tax invoices.</li>
                                <li>Audit logs and fraud prevention records.</li>
                            </ul>

                            <p>
                                Such information is retained only for the period required under
                                applicable law or legitimate business requirements and is securely
                                deleted thereafter.
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default PrivacyPolicy;