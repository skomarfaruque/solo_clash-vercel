import HomeButton from "@/components/HomeButton";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="justify-center text-center px-6 lg:px-20">
      <div className="flex z-10 max-w-4xl mx-auto pt-[217px] gap-[52px]">
        <div className="flex flex-1 flex-col items-start">
          <HomeButton>CONTACT</HomeButton>
          <h3
            className="pt-6"
            style={{
              fontWeight: 700,
              fontSize: "55px",
              lineHeight: "110%",
              letterSpacing: "0.005em",
              background:
                "linear-gradient(91.74deg, #FFFFFF 23.44%, #FB782D 73.27%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get in Touch
          </h3>
          <p className="font-normal text-[18px] leading-[150%] text-gray-300">
            Everything you need to know about getting started
          </p>
          <div className="flex flex-col gap-8 w-full max-w-md text-[#B7B7B7] mt-[80px]">
            {/* Address */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_1.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>2118 Thornridge Cir. Syracuse,</span>
                <span>Connecticut 35624</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_2.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>Hours</span>
                <span>24/7 Support in 6 Languages and Live Chat</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_3.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>Email</span>
                <span>support@soloclash.com</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-[80px]">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_youtube.png"
                alt="YouTube"
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_x.png"
                alt="Twitter"
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_ig.png"
                alt="Instagram"
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-1">Form</div>
      </div>
    </section>
  );
}
