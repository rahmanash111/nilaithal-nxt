import { Clock3, Mail, MapPin, Phone, } from "lucide-react";

export default function AddressCard() {
  return (
    <div className="w-full px-[5%] my-12">
      <div className="overflow-hidden bg-gradient-to-br from-[#0B1F17] via-[#0F2A1E] to-[#081410] relative w-full px-12 py-8 md:py-8 md:p-12 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl flex justify-start md:justify-center items-center flex-wrap gap-y-6 gap-x-12 ">
        <div className="pointer-events-none absolute -top-32 right-[-80px] h-[420px] w-[420px] rounded-full bg-emerald-400/20 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-[-120px] left-1/4 h-[340px] w-[340px] rounded-full bg-emerald-600/25 blur-[110px]" />
        <div className="pointer-events-none absolute right-1/3 top-1/3 h-[260px] w-[260px] rounded-full bg-teal-400/10 blur-[100px]" />

        <div className="flex items-center gap-6 min-w-[250px] shrink-0  text-white">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50">
            <Phone className="text-green-900" width={"60"} />
          </div>
          <div>
            <p className="font-bold text-xl">Phone</p>
            <p className="my-2">+91 99629 93939</p>
            <p className=" text-gray-500">Mon-Sat, 9AM - 6 PM</p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-400 md:hidden" />

        <div className="flex gap-6 items-center min-w-[250px] shrink-0  text-white">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50">
            <Mail className="text-green-900" width={"60"} />
          </div>
          <div>
            <p className="font-bold">Email</p>
            <p className="my-2">milin@india1charger</p>
            <p className=" text-gray-500">We reply within 24 hours</p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-400 md:hidden" />

        <div className="flex gap-6 items-center min-w-[250px] shrink-0  text-white">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50">
            <MapPin className="text-green-900" width={"60"} />
          </div>
          <div>
            <p className="font-bold">Our Office</p>
            <p className="my-2 text-white text-sm max-w-[200px]">
              38, 3rd Cross St, Venkateswara Colony, Nehru Nagar, Perungudi, Chennai-06
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-400 md:hidden" />

        <div className="flex gap-6 items-center min-w-[250px] shrink-0  text-white">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50">
            <Clock3 className="text-green-900" width={"60"} />
          </div>
          <div>
            <p className="font-bold">Working Hours</p>
            <p className="my-2">Mon - Sat, 9 AM - 6 PM</p>
            <p className=" text-gray-500">Sunday Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
