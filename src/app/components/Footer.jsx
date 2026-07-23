import { Mail, Map, PhoneCall } from "lucide-react";
import Link from 'next/link';
import footerLogo from "../../assets/full-logo.webp"
import Image from 'next/image';


const Footer = () => {
    return (
        <div className="bg-[#1b1b1b] pt-5">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] lg:grid-cols-4 pb-10">
                <div className="pt-5 px-5 flex flex-col md:items-center sm:items-start items-center justify-center">
                    <div className="logo">
                        <Image className="w-[150px]" alt="logo" src={footerLogo} />
                    </div>
                </div>
                <div className="pt-10 sm:pt-5 px-5 flex flex-col md:items-start sm:items-start items-start justify-center">
                    <div className="icon-box flex flex-row items-center gap-4 ">
                        <PhoneCall
                            color="#469d2c"
                            style={{ color: "#469d2c", fontSize: 35 }}
                        />
                        <div className="box-content">
                            <a href="tel:+9199629 93939" className="text-white font-bold text-xl">
                                +91 99629 93939
                            </a>
                            <p className="text-white">Call Us For Fast Support</p>
                        </div>
                    </div>
                </div>
                <div className=" pt-5 px-5 flex flex-col md:items-start sm:items-start items-start justify-center">
                    <div className="icon-box flex flex-row items-center gap-4">
                        <Mail
                            color="#469d2c"
                            style={{ color: "#469d2c", fontSize: 35 }}
                        />
                        <div className="box-content">
                            <a href="mailto:milin@india1charger" className="text-white font-bold text-xl">
                                milin@india1charger
                            </a>
                            <p className="text-white">Email Us for Query</p>
                        </div>
                    </div>
                </div>
                <div className=" pt-5 px-5 flex flex-col md:items-start sm:items-start items-start justify-center">
                    <div className="icon-box flex flex-row items-center gap-4">
                        <Map
                            color="#469d2c"
                            width={"35px"}
                            style={{ color: "#469d2c", fontSize: 35 }}
                        />
                        <div className="box-content">
                            <a href="#" className="text-white font-bold text-xl">
                                No 190 - 192, Hameed Complex Anna Salai,
                            </a>
                            <p className="text-white">Chennai 600006</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <hr className="text-white" style={{ width: '70%', textAlign: 'center', }} />
            </div>
            <div className="grid grid-cols-[1fr,1fr] md:grid-cols-4 pb-10 px-10" >
                <div className="pt-5 px-5 flex flex-col sm:items-start md:items-center justify-center">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold text-xl text-left">Enter Your email to get the latest news</h4>
                        <div className="mt-3 sm:mt-4 flex max-w-md gap-x-4">
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md  px-3.5 py-2.5 text-sm font-semibold bg-green-600 text-white shadow-sm hover:bg-white hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" pt-5 px-5 flex flex-col  md:items-center sm:items-start">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white text-2xl font-bold text-left">Useful Links</h4>
                        <ul className="footer-links flex flex-col gap-3">
                            <Link href={"/"}><li style={{ color: '#fff' }}>Home</li></Link>
                            <Link href={"/about"}><li style={{ color: '#fff' }}>About us</li></Link>
                            <Link href={"/Services"}><li style={{ color: '#fff' }}>Services</li></Link>
                            <Link href={"/blogs"}><li style={{ color: '#fff' }}>Blogs</li></Link>
                            <Link href={"/partners"}><li style={{ color: '#fff' }}>Partners</li></Link>
                            <Link href={"/careers"}><li style={{ color: '#fff' }}>Careers</li></Link>
                            <Link href={"/contact"}><li style={{ color: '#fff' }}>Contact</li></Link>
                        </ul>
                    </div>
                </div>
                <div className=" pt-5 px-5 flex flex-col md:items-center sm:items-start">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold text-2xl text-left">Follow Us</h4>
                        <ul className="footer-links flex flex-col gap-3">
                            <li style={{ color: '#fff' }}><a href="https://www.facebook.com/profile.php?id=61557640918659" target="_blank">Facebook</a></li>
                            <li style={{ color: '#fff' }}><a href="https://www.instagram.com/nilaithalofficial/?hl=en" target="_blank">Instagram</a></li>
                            <li style={{ color: '#fff' }}><a href="https://www.linkedin.com/company/nilaithal/" target="_blank">LinkedIn</a></li>
                            <li style={{ color: '#fff' }}><a href="https://twitter.com/Nilaithal_" target="_blank">Twitter</a></li>
                            <li style={{ color: '#fff' }}><a href="https://www.youtube.com/channel/UCHmnNoXll5Nw4EFMLRc9Dbw" target="_blank">Youtube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-5 px-5 flex flex-col md:items-center sm:items-start">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold text-2xl text-left">Policies</h4>
                        <ul className="footer-links flex flex-col gap-3">
                            <Link href={"/terms-and-conditions"}><li style={{ color: '#fff' }}>Terms and Conditions</li></Link>
                            <Link href={"/refund-policy"}><li style={{ color: '#fff' }}>Refund Policy</li></Link>
                            <Link href={"/privacy-policy"}><li style={{ color: '#fff' }}>Privacy Policy</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;