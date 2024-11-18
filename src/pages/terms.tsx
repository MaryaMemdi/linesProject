import { GoChevronLeft } from "react-icons/go";
import line from "../../public/assets/images/exploreIcons/Line 2.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import Dropdown from "../components/dropDownMenu";
import { TableOfContentsProps } from "../types/loginFormTypes";

const Terms = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="flex flex-row lg:mt-[176px] gap-12 justify-center mx-auto p-5 md:p-8 lg:p-0">
      <div className="flex flex-col justify-between items-start gap-8  w-[830px] order-2">
        <div className="flex-col justify-between items-start gap-2 flex  w-full">
          <div className="self-stretch justify-between  gap-3 inline-flex  w-full min-w-80">
            <h2 className="text-stone-800 text-2xl md:text-3xl whitespace-nowrap lg:text-4xl font-semibold font-Quicksand leading-[45px] inline-flex gap-3">
              Terms of Service
              <img src={line} className="w-[60px] md:w-[80px] lg:w-[120px]" />
            </h2>
            <div
              className="flex flex-col w-[46px] h-[57px] lg:hidden items-end "
              onClick={() => setShowContent(true)}
            >
              <div className="w-9 h-9 p-1.5 bg-[#ede8ff] rounded-lg shadow flex-col justify-center items-center gap-0.5 inline-flex text-xl  text-[#6e6081]   ">
                <RiMenu4Fill />
              </div>
              <p className="text-[10px] text-[#4c1595] font-normal font-Quicksand">
                Content
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
              className={`absolute  left-0 top-0 w-80 h-[53rem] md:w-[24rem] bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6  z-50 ${
                showContent ? "block" : "hidden"
              }`}
            >
              <TableOfContents setShowContent={setShowContent} />
            </motion.div>
          </div>
          <div className="self-stretch text-stone-500 text-sm md:text-base lg:text-lg font-semibold font-QuicksandLight leading-[27px]">
            <p>Last updated April 13, 2024</p>
          </div>
        </div>
        <div className="self-stretch flex-col text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px] gap-8 flex">
          <div className="self-stretch flex-col justify-start items-start gap-4 flex ">
            <h3 className=" text-xl font-semibold font-Quicksand leading-[30px]">
              AGREEMENT TO OUR LEGAL TERMS
            </h3>
            <p>
              We are lines LLC, doing business as lines (“Company,” “we,” “us,”
              “our“). We operate the website lines.so (the “Site“), as well as
              any other related products and services that refer or link to
              these legal terms (the “Legal Terms“) (collectively,
              the “Services“).Lines is a platform dedicated to writing and
              storytelling, offering a space for users to share their creative
              works, engage with others’ stories, and explore diverse
              narratives.
            </p>

            <p>
              You can contact us by email at contact@lines.so or by mail
              to __________, __________, Oman. These Legal Terms constitute a
              legally binding agreement made between you, whether personally or
              on behalf of an entity (“you“), and lines LLC, concerning your
              access to and use of the Services. You agree that by accessing the
              Services, you have read, understood, and agreed to be bound by all
              of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL
              TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES
              AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p>
              We will provide you with prior notice of any scheduled changes to
              the Services you are using. The modified Legal Terms will become
              effective upon posting or notifying you by notification@lines.so,
              as stated in the email message. By continuing to use the Services
              after the effective date of any changes, you agree to be bound by
              the modified terms.All users who are minors in the jurisdiction in
              which they reside (generally under the age of 18) must have the
              permission of, and be directly supervised by, their parent or
              guardian to use the Services. If you are a minor, you must have
              your parent or guardian read and agree to these Legal Terms prior
              to you using the Services. We recommend that you print a copy of
              these Legal Terms for your records.
            </p>
          </div>
          <div
            className="self-stretch  flex-col justify-start items-start gap-2 flex "
            id="0"
          >
            <h3 className=" text-xl font-semibold font-Quicksand leading-[30px]">
              1. OUR SERVICES
            </h3>
            <p>
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
            <p>
              The Services are not tailored to comply with industry-specific
              regulations (Health Insurance Portability and Accountability Act
              (HIPAA), Federal Information Security Management Act (FISMA),
              etc.), so if your interactions would be subjected to such laws,
              you may not use the Services. You may not use the Services in a
              way that would violate the Gramm-Leach-Bliley Act (GLBA).
            </p>
          </div>
          <div
            className="self-stretch  flex-col justify-start items-start gap-2 flex "
            id="1"
          >
            <h3 className=" text-xl font-semibold font-Quicksand leading-[30px]">
              2. INTELLECTUAL PROPERTY RIGHTS
            </h3>
            <h4 className=" text-lg font-semibold font-Quicksand leading-[30px]">
              Our intellectual property
            </h4>

            <p>
              We are the owner or the licensee of all intellectual property
              rights in our Services, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics in the Services (collectively,
              the “Content”), as well as the trademarks, service marks, and
              logos contained therein (the “Marks”).
            </p>
            <p>
              Our Content and Marks are protected by copyright and trademark
              laws (and various other intellectual property rights and unfair
              competition laws) and treaties in the United States and around the
              world. The Content and Marks are provided in or through the
              Services “AS IS” for your personal, non-commercial use only.
            </p>
            <h4 className=" text-lg font-semibold font-Quicksand leading-[30px]">
              Your use of our Services
            </h4>
            <p>
              Subject to your compliance with these Legal Terms, including
              the “PROHIBITED ACTIVITIES” section below, we grant you a
              non-exclusive, non-transferable, revocable license to:
              <ul className="list-disc mx-5">
                <li>access the Services; and</li>
                <li>
                  download or print a copy of any portion of the Content to
                  which you have properly gained access.
                </li>
              </ul>
              solely for your personal, non-commercial use.
            </p>
            <p>
              Except as set out in this section or elsewhere in our Legal Terms,
              no part of the Services and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>
            <p>
              If you wish to make any use of the Services, Content, or Marks
              other than as set out in this section or elsewhere in our Legal
              Terms, please address your request to: contact@lines.so. If we
              ever grant you the permission to post, reproduce, or publicly
              display any part of our Services or Content, you must identify us
              as the owners or licensors of the Services, Content, or Marks and
              ensure that any copyright or proprietary notice appears or is
              visible on posting, reproducing, or displaying our Content. We
              reserve all rights not expressly granted to you in and to the
              Services, Content, and Marks. Any breach of these Intellectual
              Property Rights will constitute a material breach of our Legal
              Terms and your right to use our Services will terminate
              immediately.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-[#ddd4ff] flex-col justify-start items-start gap-4  w-[400px] h-[520px] p-6 whitespace-nowrap hidden lg:flex">
        <TableOfContents />
      </div>
    </div>
  );
};
export default Terms;

const TableOfContents: React.FC<TableOfContentsProps> = ({
  setShowContent,
}) => {
  return (
    <div className="flex flex-col gap-4 ">
      <button
        onClick={() => setShowContent?.(false)}
        className="text-stone-600 text-sm font-semibold font-QuicksandLight leading-[17.50px] inline-flex gap-1 lg:hidden "
      >
        <GoChevronLeft className="text-lg" />
        <p>Back</p>
      </button>
      <h3 className="self-stretch text-[#4c1595] text-2xl font-semibold font-Quicksand leading-9 ">
        Table Of Contents
      </h3>
      <div className="h-8 p-1 hover:bg-stone-100 rounded hover:border-l-2 hover:border-[#4c1595] justify-start items-center gap-2 inline-flex ">
        <div className="text-stone-800 text-base font-semibold font-QuicksandLight leading-normal">
          AGREEMENT TO OUR LEGAL TERMS
        </div>
      </div>
      <div className="text-stone-800 text-base font-semibold font-QuicksandLight flex flex-col gap-3">
        <Dropdown
          inputs={[
            { title: "1. OUR SERVICES" },
            { title: "2. INTELLECTUAL PROPERTY RIGHTS" },
            { title: " 3. USER REPRESENTATIONS" },
            { title: "4. USER REGISTRATION" },
            { title: "5. PURCHASES AND PAYMENT" },
            { title: "6. SUBSCRIPTIONS" },
            { title: "7. PROHIBITED ACTIVITIES" },
            { title: "7. PROHIBITED ACTIVITIES" },
            { title: "9. CONTRIBUTION LICENSE" },
          ]}
        />
      </div>
    </div>
  );
};
