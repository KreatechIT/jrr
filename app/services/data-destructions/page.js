"use client";
import Layout from "@/components/Layout";
import Tag from "@/components/Tag";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardDrive,
  faMagnet,
  faEraser,
  faBoxArchive,
  faMicrochip,
  faShieldHalved,
  faBuildingColumns,
  faLaptopCode,
  faBuilding,
  faHospital,
  faLandmark,
  faCircleCheck,
  faChevronDown,
  faLock,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";

import Partners from "@/sections/Partners";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  [
    "Protect Confidential Information",
    "Prevent unauthorized access to sensitive business and customer information.",
  ],
  [
    "Reduce Data Breach Risks",
    "Minimize the possibility of information exposure during IT asset disposal.",
  ],
  [
    "Secure IT Asset Retirement",
    "Ensure that retired computers, servers, and storage devices are handled appropriately.",
  ],
  [
    "Support Business Data Security",
    "Strengthen information security practices when replacing or disposing of storage equipment.",
  ],
  [
    "Responsible Electronic Waste Management",
    "Combine appropriate data destruction practices with responsible electronic waste management.",
  ],
];

const services = [
  {
    title: "1. Hard Drive Data Destruction",
    body: [
      "Hard drives often contain confidential information, including business documents, customer records, financial data, and internal company information.",
      <>
        Our <strong>Hard Drive Data Destruction in Bangladesh</strong> solutions
        help organizations securely manage outdated and retired HDDs before
        disposal or recycling.
      </>,
      "Depending on the storage media and client requirements, suitable data sanitization or physical destruction methods can be considered to prevent unauthorized data recovery.",
      <>
        Businesses looking for <strong>Secure Hard Drive Disposal in Bangladesh</strong>{" "}
        should ensure that their storage devices undergo appropriate data
        sanitization or destruction before final disposal.
      </>,
    ],
  },
  {
    title: "2. HDD Degaussing Service in Bangladesh",
    body: [
      "Degaussing is a specialized data elimination method that uses a powerful magnetic field to disrupt magnetic data stored on compatible storage media.",
      "JR Recycling Solutions Ltd. uses Garner HD-2 Degausser technology for supported magnetic media to help eliminate stored information.",
      <>
        Our <strong>HDD Degaussing Service in Bangladesh</strong> is
        particularly relevant for traditional magnetic hard disk drives and
        magnetic data tapes.
      </>,
      "It is important to note that conventional degaussing is not suitable for SSDs or other flash-based storage devices. These require specialized sanitization or physical destruction methods.",
    ],
  },
  {
    title: "3. Data Erasure Services",
    body: [
      <>
        <strong>Data Erasure Services</strong> involve removing information from
        digital storage devices through appropriate software-based sanitization
        techniques.
      </>,
      "Unlike ordinary file deletion or formatting, professional data sanitization is designed to make previously stored information inaccessible or unrecoverable according to the selected method and verification standard.",
      "The appropriate method depends on the storage technology, device condition, and security requirements.",
      <>
        Organizations seeking a <strong>Hard Drive Data Erasure Service in Dhaka</strong>{" "}
        should select a method suitable for their specific storage devices and
        data security requirements.
      </>,
    ],
  },
  {
    title: "4. Data Tape Destruction",
    body: [
      "Magnetic backup tapes are commonly used by organizations for data storage, backup, and archival purposes.",
      "These tapes may contain confidential corporate information and historical business records.",
      "Our data destruction solutions include specialized magnetic media data elimination options to help organizations manage their outdated data tapes securely.",
    ],
  },
  {
    title: "5. SSD and Digital Storage Device Destruction",
    body: [
      "Solid-state drives (SSDs), USB flash drives, and memory cards use flash memory technology rather than magnetic storage.",
      "As a result, traditional degaussing does not effectively eliminate data stored on these devices.",
      "SSD and flash-based storage require appropriate media-specific sanitization or physical destruction methods to prevent data recovery.",
    ],
  },
];

const steps = [
  [
    "Step 1: Device Collection",
    "Identify and collect the storage devices requiring data destruction based on the client's requirements.",
  ],
  [
    "Step 2: Device Identification",
    "Identify the storage media types, including HDDs, SSDs, magnetic tapes, and other digital storage devices.",
  ],
  [
    "Step 3: Selecting the Appropriate Method",
    "Determine the suitable data sanitization or destruction method based on the storage technology and required security level.",
  ],
  [
    "Step 4: Data Destruction",
    "Apply the selected data elimination, sanitization, or physical destruction process.",
  ],
  [
    "Step 5: Verification and Documentation",
    "Where applicable, document the completed process and provide relevant destruction or sanitization records according to the agreed service scope.",
  ],
  [
    "Step 6: Responsible Recycling",
    "Manage eligible electronic equipment and components through appropriate electronic waste recycling practices.",
  ],
];

const reasons = [
  [
    "Specialized Data Destruction Solutions",
    "Options for managing different types of data-bearing storage devices.",
  ],
  [
    "Advanced Degaussing Technology",
    "Garner HD-2 Degausser technology for compatible magnetic media.",
  ],
  [
    "Business-Focused Services",
    "Solutions designed around organizational data disposal requirements.",
  ],
  [
    "Secure Data Handling",
    "Appropriate handling of storage devices throughout the agreed service process.",
  ],
  [
    "Responsible E-Waste Management",
    "Support for responsible management of retired electronic equipment.",
  ],
  [
    "Customized Service Requirements",
    "Data destruction solutions based on device types, quantities, and business needs.",
  ],
];

const industries = [
  [
    "Banks and Financial Institutions",
    "Financial organizations handle sensitive customer information, transaction records, and confidential financial documents. Secure data destruction helps reduce the risk of information exposure when retiring storage devices.",
  ],
  [
    "IT and Technology Companies",
    "IT companies regularly replace servers, computers, hard drives, and other storage equipment. Appropriate data destruction helps protect information stored on retired devices.",
  ],
  [
    "Corporate Offices and Businesses",
    "Businesses of all sizes may store confidential employee records, business documents, and customer information on digital storage media.",
  ],
  [
    "Healthcare Organizations",
    "Healthcare organizations manage sensitive patient information and administrative records that require appropriate protection during storage device retirement.",
  ],
  [
    "Government and Institutional Organizations",
    "Institutions handling confidential organizational information can benefit from appropriate data sanitization and destruction practices.",
  ],
];

const faqs = [
  [
    "What are data destruction services?",
    "Data Destruction Services in Bangladesh involve permanently eliminating information stored on digital storage devices to prevent unauthorized access or data recovery. Methods may include software-based sanitization, degaussing for compatible magnetic media, or physical destruction.",
  ],
  [
    "Why is professional data destruction important?",
    "Professional data destruction helps organizations protect confidential information, reduce potential data breach risks, and securely manage outdated computers, servers, and storage devices.",
  ],
  [
    "What is hard drive degaussing?",
    "Hard drive degaussing is a data elimination technique that uses a powerful magnetic field to disrupt magnetic data stored on compatible hard disk drives and magnetic tapes.",
  ],
  [
    "Can deleted data be recovered from an old hard drive?",
    "Yes. Ordinary file deletion or formatting may leave data recoverable using specialized tools. Proper data sanitization or physical destruction is necessary when permanent data removal is required.",
  ],
  [
    "Is degaussing effective for SSDs?",
    "No. Traditional degaussing is designed for magnetic storage media and is not effective for SSDs or flash-based storage devices. These require appropriate sanitization or physical destruction methods.",
  ],
  [
    "Which devices require data destruction?",
    "Devices that may require data destruction include hard disk drives, solid-state drives, USB flash drives, memory cards, magnetic backup tapes, and other data-bearing storage media.",
  ],
  [
    "Do you provide corporate data destruction services in Bangladesh?",
    "JR Recycling Solutions Ltd. provides data destruction solutions for businesses and organizations. Contact our team to discuss your device types, quantities, and service requirements.",
  ],
  [
    "How can I request a data destruction service?",
    "You can contact JR Recycling Solutions Ltd. with details about your storage devices, estimated quantities, and data security requirements to discuss a suitable service solution.",
  ],
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};


const serviceIcons = [faHardDrive, faMagnet, faEraser, faBoxArchive, faMicrochip];
const industryIcons = [
  faBuildingColumns,
  faLaptopCode,
  faBuilding,
  faHospital,
  faLandmark,
];
const processOffsets = ["-200px", "-100px", "0px", "100px", "200px", "0px"];

function ContactButton({ label = "Contact Us", className = "" }) {
  return (
    <Link
      href="/contact-us"
      className={`flex w-[200px] duration-[1000ms] justify-center items-center h-[60px] mt-[30px]
      bg-[#43AC4D] hover:bg-[#FADC22] text-white/75 hover:text-black
      transition-all px-[10px] rounded-md space-x-2 place-items-center ${className}`}
    >
      <p className="font-[600] text-[24px]">{label}</p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L18 12M18 12L12 6M18 12L12 18"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function SectionHeader({ tag, title, intro, light = false }) {
  return (
    <Fade triggerOnce>
      <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
        <Tag tag={tag} />
        <h2
          className={`mt-2 font-[700] laptop:text-[40px] mobile:text-[28px] laptop:leading-[48px] mobile:leading-[34px] ${
            light ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-4 font-lato text-[18px] leading-[1.7] ${
              light ? "text-white/80" : "text-black/60"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </Fade>
  );
}

function IconCircle({ icon, className = "" }) {
  return (
    <div
      className={`flex shrink-0 place-content-center place-items-center rounded-full border-[4px] border-[#39B54A] bg-white ${className}`}
    >
      <FontAwesomeIcon icon={icon} color="#39B54A" className="w-1/2 h-1/2" />
    </div>
  );
}

const pCls = "font-lato text-[18px] text-black/60 leading-[1.7]";

function DataDestructions() {
  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Layout
        title="Data Destruction Services in Bangladesh"
        bg="/services/jr-recycling-pic-18.jpg"
        path="/services/data-destructions"
      />

      {/* Introduction */}
      <section className="px-[5%] mt-[20px] transition-all laptop:space-x-[50px] py-[3%] flex laptop:flex-row mobile:flex-col place-items-start">
        <div className="laptop:w-[50%] mobile:w-full transition-all h-auto">
          <Slide triggerOnce>
            <Tag tag="Data Destruction" />
            <div className="mt-[20px] space-y-4">
              <p className="font-lato text-[20px] text-black/60 leading-[1.7]">
                JR Recycling Solutions Ltd. provides professional{" "}
                <strong>Data Destruction Services in Bangladesh</strong> to help
                businesses securely eliminate sensitive and confidential
                information stored on digital storage devices. As a reliable{" "}
                <strong>Data Destruction Company in Bangladesh</strong>, we aim
                to help organizations protect their valuable business
                information and reduce the risks associated with improper
                disposal of outdated IT equipment.
              </p>
              <p className="font-lato text-[20px] text-black/60 leading-[1.7]">
                As businesses upgrade their IT infrastructure, old computers,
                servers, hard drives, and other storage devices may contain
                valuable corporate information, customer records, financial
                documents, and confidential business data. Simply deleting files
                or formatting a storage device does not always ensure permanent
                data removal.
              </p>
              <p className="font-lato text-[20px] text-black/60 leading-[1.7]">
                Our <strong>Secure Data Destruction</strong> solutions focus on
                appropriate data elimination, sanitization, and destruction
                methods. Using specialized equipment, including the Garner HD-2
                Degausser for compatible magnetic storage media, we support
                businesses in managing data-bearing electronic assets more
                securely.
              </p>
              <p className="font-lato text-[20px] text-black/60 leading-[1.7]">
                Whether you are a corporate organization, financial institution,
                IT company, or business managing retired storage devices, JR
                Recycling Solutions Ltd. can help you explore suitable data
                destruction solutions.
              </p>
            </div>
            <ContactButton />
          </Slide>
        </div>
        <div className="relative w-[50%] flex mobile:hidden laptop:flex mt-[7%] ">
          <Slide triggerOnce direction="up" className="mt-[20px]">
            <Image
              loading="eager"
              height={400}
              width={400}
              alt="Data destruction and HDD degaussing service by JR Recycling Solutions Ltd. in Bangladesh"
              src="/services/data-destruction.jpg"
            />
          </Slide>
        </div>
      </section>

      {/* Why important */}
      <section className="px-[5%] py-[80px]">
        <SectionHeader
          tag="Data Security"
          title="Why Is Secure Data Destruction Important?"
          intro="Data security does not end when a computer or storage device is no longer in use. Old hard drives, backup tapes, and other digital storage media may still contain sensitive information that could be accessed if not properly handled. Professional Secure Data Destruction helps organizations minimize potential data security risks while managing outdated IT assets responsibly."
        />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-[15px] gap-y-[30px] mt-10 container mx-auto">
          {benefits.map(([t, d], i) => (
            <Fade triggerOnce delay={150 * i} key={t} className="w-full">
              <div className="h-full px-[30px] py-[25px] transition-shadow border border-[#30743c]/30 shadow-sm hover:shadow-lg duration-300 card-gradient">
                <div className="flex items-center gap-5">
                  <IconCircle icon={faShieldHalved} className="h-[60px] w-[60px]" />
                  <h3 className="text-xl uppercase font-black text-gradient">
                    {t}
                  </h3>
                </div>
                <p className="text-black/60 mt-[20px] text-[18px]">{d}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-[5%] py-[80px] bg-[#f4faf5]">
        <SectionHeader
          tag="Our Services"
          title="Our Data Destruction Services"
          intro="JR Recycling Solutions Ltd. offers professional data destruction solutions designed to address different types of digital storage media and business requirements."
        />
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[25px] mt-10 container mx-auto">
          {services.map((s, i) => (
            <Fade
              triggerOnce
              delay={150 * (i % 2)}
              key={s.title}
              className={`w-full ${i === services.length - 1 ? "laptop:col-span-2" : ""}`}
            >
              <article className="h-full bg-white p-[30px] border border-[#30743c]/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <IconCircle
                    icon={serviceIcons[i]}
                    className="h-[70px] w-[70px]"
                  />
                  <h3 className="text-xl tablet:text-[24px] uppercase font-black text-gradient">
                    {s.title}
                  </h3>
                </div>
                <div className="mt-5 space-y-3">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-black/60 text-[17px] leading-[1.7]">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative our-work-process-gradient py-[70px] px-8 flex flex-col items-center w-full">
        <SectionHeader
          light
          tag="How We Work"
          title="Our Data Destruction Process"
          intro="A structured data destruction process helps organizations manage their retired storage devices more effectively. Our recommended process includes the following stages:"
        />
        <div className="mt-[50px] mobile:w-full laptop:w-[80%] flex flex-wrap justify-center gap-4 text-black">
          {steps.map(([t, d], i) => (
            <Fade
              triggerOnce
              key={t}
              className="basis-[100%] laptop:basis-[60%] border p-4 desktop:p-8 bg-[#fafafacc] shadow-md rounded-md laptop:relative"
              style={{ left: processOffsets[i] }}
            >
              <div>
                <h3 className="uppercase text-center font-black text-2xl text-gradient">
                  {t}
                </h3>
                <p className="mt-4 text-center">{d}</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="px-[5%] py-[80px]">
        <SectionHeader
          tag="Why Us"
          title="Why Choose JR Recycling Solutions Ltd.?"
          intro="Choosing a professional Data Destruction Company in Bangladesh is an important part of protecting sensitive business information. JR Recycling Solutions Ltd. aims to support organizations with specialized data elimination solutions and responsible electronic waste management."
        />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px] mt-10 container mx-auto">
          {reasons.map(([t, d], i) => (
            <Slide
              triggerOnce
              direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
              key={t}
              className="w-full"
            >
              <div className="h-full flex gap-4 p-[25px] border border-[#30743c]/30 card-gradient hover:shadow-lg transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  color="#39B54A"
                  className="w-[28px] h-[28px] mt-1 shrink-0"
                />
                <div>
                  <h3 className="font-black text-lg uppercase text-gradient">
                    {t}
                  </h3>
                  <p className="text-black/60 mt-2">{d}</p>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#39B54A] py-[70px] px-[3%]">
        <SectionHeader
          light
          tag="Industries"
          title="Corporate Data Destruction Solutions for Different Industries"
          intro="Different industries manage sensitive information that must be protected throughout the IT asset lifecycle. Our Corporate Data Destruction solutions are relevant to organizations across various sectors, including:"
        />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-[20px] gap-y-[90px] mt-[90px] container mx-auto">
          {industries.map(([t, d], i) => (
            <Slide
              triggerOnce
              direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
              key={t}
              className="w-full"
            >
              <div className="relative h-full bg-white px-[25px] pt-[85px] pb-[30px] text-center">
                <IconCircle
                  icon={industryIcons[i]}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[110px] w-[110px] border-[6px]"
                />
                <h3 className="text-black font-bold text-[20px]">{t}</h3>
                <p className="text-black/60 font-lato mt-3">{d}</p>
              </div>
            </Slide>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5%] py-[80px] flex laptop:flex-row mobile:flex-col items-center gap-10">
        <Slide triggerOnce direction="left" className="laptop:w-[60%] mobile:w-full">
          <div>
            <Tag tag="Get Started" />
            <h2 className="mt-3 laptop:text-[40px] mobile:text-[28px] font-[700] text-black laptop:leading-[48px]">
              Secure Your Business Data Before IT Asset Disposal
            </h2>
            <div className="mt-5 space-y-4">
              <p className={pCls}>
                Improper disposal of data-bearing devices can create unnecessary
                information security risks for businesses.
              </p>
              <p className={pCls}>
                Before recycling, reselling, or disposing of outdated IT
                equipment, organizations should ensure that the information
                stored on those devices has been properly sanitized or destroyed.
              </p>
              <p className={pCls}>
                JR Recycling Solutions Ltd. is committed to supporting
                businesses with professional data destruction solutions and
                responsible electronic waste management practices.
              </p>
              <p className={pCls}>
                Whether you need assistance with hard drive degaussing, data
                elimination, or the management of retired storage devices, our
                team can help you discuss an appropriate solution.
              </p>
              <p className={pCls}>
                If you are looking for a{" "}
                <strong>Professional Data Destruction Company in Bangladesh</strong>
                , contact JR Recycling Solutions Ltd. to discuss your
                organizational requirements.
              </p>
            </div>
          </div>
        </Slide>
        <Slide triggerOnce direction="right" className="laptop:w-[40%] mobile:w-full">
          <div className="our-work-process-gradient rounded-md p-[35px] text-center shadow-lg">
            <IconCircle icon={faLock} className="h-[90px] w-[90px] mx-auto" />
            <p className="mt-5 text-white text-[22px] font-bold leading-[30px]">
              Contact JR Recycling Solutions Ltd. today to discuss your data
              destruction requirements in Bangladesh.
            </p>
            <div className="flex justify-center">
              <ContactButton />
            </div>
          </div>
        </Slide>
      </section>

      {/* FAQ */}
      <section className="px-[5%] py-[80px] bg-[#f4faf5]">
        <SectionHeader tag="FAQ" title="Frequently Asked Questions (FAQ)" />
        <div className="mt-10 max-w-[1000px] mx-auto space-y-3">
          {faqs.map(([q, a], i) => (
            <Fade triggerOnce key={q} delay={80 * i}>
              <details className="group bg-white border border-[#30743c]/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-[18px] tablet:text-[20px] font-bold text-black">
                    <span className="text-gradient font-black">{i + 1}.</span>{" "}
                    {q}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color="#39B54A"
                    className="w-[18px] h-[18px] shrink-0 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 font-lato text-[17px] text-black/60 leading-[1.7]">
                  {a}
                </p>
              </details>
            </Fade>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="our-work-process-gradient px-[5%] py-[70px] text-center">
        <Fade triggerOnce>
          <div className="flex justify-center">
            <IconCircle icon={faRecycle} className="h-[90px] w-[90px]" />
          </div>
          <h2 className="mt-5 text-white laptop:text-[40px] mobile:text-[28px] font-[700]">
            Contact JR Recycling Solutions Ltd.
          </h2>
          <p className="mt-4 font-lato text-[18px] text-white/80 max-w-[800px] mx-auto leading-[1.7]">
            Looking for reliable{" "}
            <strong className="text-white">
              Data Destruction Services in Bangladesh
            </strong>
            ? Get in touch with JR Recycling Solutions Ltd. to discuss your
            requirements for hard drive data destruction, HDD degaussing, and
            secure data elimination.
          </p>
          <p className="mt-5 text-[#FADC22] text-[22px] font-bold">
            Protect Your Data. Manage Your IT Assets Responsibly.
          </p>
          <div className="flex justify-center">
            <ContactButton />
          </div>
        </Fade>
      </section>

      <section className="py-[70px]">
        <Partners cusIndex={2} />
      </section>
    </div>
  );
}

export default DataDestructions;
