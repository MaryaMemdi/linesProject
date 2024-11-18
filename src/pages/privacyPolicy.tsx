import { GoChevronLeft } from "react-icons/go";
import line from "../../public/assets/images/exploreIcons/Line 2.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import { TableOfContentsProps } from "../types/loginFormTypes";
const Privacy = () => {
  const personalInformation = [
    "Name",
    "Email",
    "Social Media Profile",
    "Date of Birth",
    "Gender",
    "Country",
    "Education level",
    "genre prefrences",
  ];
  const collectInfo = [
    " When a user fills up the registration form or otherwise submitspersonal information",
    " Interacts with the website",
    "From public sources",
  ];
  const yourInformation = [
    "Marketing/ Promotional",
    " Customer feedback collection",
    "Support",
    "Enforce T&C",
    " Targeted advertising",
    "Site protection",
    "User to user comments",
    "Manage user account",
  ];
  const [showContent, setShowContent] = useState(false)
 
  return (
    <div className="flex flex-row lg:mt-[176px] gap-12 justify-center mx-auto p-5 md:p-8 lg:p-0">
      <div className="flex flex-col justify-between items-start gap-8  w-[830px] order-2">
        <div className="flex-col justify-between items-start gap-2 flex  w-full">
          <div className="self-stretch justify-between items-center gap-3 inline-flex  w-full">
            <h2 className="text-stone-800 text-2xl md:text-3xl whitespace-nowrap lg:text-4xl font-semibold font-Quicksand leading-[45px] inline-flex gap-3">
              Privacy Policy
            <img src={line} className="w-[60px] md:w-[80px] lg:w-[120px]" />
            </h2>
            <div className="flex flex-col w-[46px] h-[57px] lg:hidden " onClick={()=>setShowContent(true)}>
              <div className="w-9 h-9 p-1.5 bg-[#ede8ff] rounded-lg shadow flex-col justify-center items-center gap-0.5 inline-flex text-xl  text-[#6e6081]  ">
                <RiMenu4Fill />
              </div>
              <p className="text-[10px] text-[#4c1595] font-normal font-Quicksand">
                Content
              </p>
            </div>
            
            <motion.div
                  initial={{ opacity: 0, x:-40 }}
                  animate={{ opacity: 1, x:0}}
                  className={`absolute  left-0 top-0 w-80 h-[53rem] md:w-[24rem]    bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6  z-50 ${showContent ?'block':'hidden'}`}
                  
                >

            <TableOfContents setShowContent={setShowContent}/>
                </motion.div>
         
          </div>
          <div className="self-stretch text-stone-500 text-sm md:text-base lg:text-lg font-semibold font-QuicksandLight leading-[27px]">
            <p>Last Updated On 13-Apr-2024</p>
            <p>Effective Date 13-Apr-2024</p>
          </div>
        </div>
        <div className="self-stretch flex-col text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px] gap-8 flex">
          <div className="self-stretch flex-col justify-start items-start gap-4 flex ">
            <p>
              This Privacy Policy describes the policies of Lines, jamalov 77
              st, Astara 80603, Azerbaijan, email: admin@lines.so, phone:
              +380730221451 on the collection, use and disclosure of your
              information that we collect when you use our website (
              https://lines.so ). (the “Service”). By accessing or using the
              Service, you are consenting to the collection, use and disclosure
              of your information in accordance with this Privacy Policy. If you
              do not consent to the same, please do not access or use the
              Service.
            </p>

            <p>
              We may modify this Privacy Policy at any time without any prior
              notice to you and will post the revised Privacy Policy on the
              Service. The revised Policy will be effective 180 days from when
              the revised Policy is posted in the Service and your continued
              access or use of the Service after such time will constitute your
              acceptance of the revised Privacy Policy. We therefore recommend
              that you periodically review this page.
            </p>
          </div>
          <div className="self-stretch  flex-col justify-start items-start gap-2 flex " id='0'>
            <h3 className=" text-xl font-semibold font-Quicksand leading-[30px]" >
              Information We Collect:
            </h3>
            <p>
              We will collect and process the following personal information
              about you:
              <ul className="list-disc mx-6">
                {personalInformation.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </p>
          </div>
          <div className="self-stretch  flex-col justify-start items-start gap-2 flex " id='1'>
            <h3 className=" text-xl font-semibold font-Quicksand leading-[30px]">
              How We Collect Your Information:
            </h3>

            <p>
              We collect/receive information about you in the following manner:
              <ul className="list-disc mx-6">
                {collectInfo.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </p>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex " id="2">
            <h3 className=" text-xl font-semibold font-Quicksand leading-[30px] ">
              How We Use Your Information:
            </h3>

            <p>
              We will use the information that we collect about you for the
              following purposes:
              <ul className="list-disc mx-6">
                {yourInformation.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </p>

            <p>
              If we want to use your information for any other purpose, we will
              ask you for consent and will use your information only on
              receiving your consent and then, only for the purpose(s) for which
              grant consent unless we are required to do otherwise by law.
            </p>
          </div>

          <div className="self-stretch  flex-col justify-start items-start gap-2 flex" id="3">
            <h3 className="text-xl font-semibold font-Quicksand leading-[30px]">
              How We Share Your Information:
            </h3>

            <p>
              We will not transfer your personal information to any third party
              without seeking your consent, except in limited circumstances as
              described below:
            </p>
            <ul className="list-disc mx-6">
              <li>Analytics</li>
            </ul>
            <p>
              We require such third party’s to use the personal information we
              transfer to them only for the purpose for which it was transferred
              and not to retain it for longer than is required for fulfilling
              the said purpose
            </p>

            <p>
              We may also disclose your personal information for the following:{" "}
              <br />
              (1) to comply with applicable law, regulation, court order or
              other legal process; <br />
              (2) to enforce your agreements with us, including this Privacy
              Policy; <br />
              or (3) to respond to claims that your use of the Service violates
              any third-party rights. <br />
              If the Service or our company is merged or acquired with another
              company, your information will be one of the assets that is
              transferred to the new owner.
            </p>
          </div>
          <div className="self-stretch  flex-col justify-start items-start gap-2 flex" id="4">
            <h3 className="text-xl font-semibold font-Quicksand leading-[30px]">
              Retention Of Your Information:
            </h3>
            <p>
              We will retain your personal information with us for 90 days to 2
              years after users terminate their accounts or for as long as we
              need it to fulfill the purposes for which it was collected as
              detailed in this Privacy Policy. We may need to retain certain
              information for longer periods such as record-keeping / reporting
              in accordance with applicable law or for other legitimate reasons
              like enforcement of legal rights, fraud prevention, etc. Residual
              anonymous information and aggregate information, neither of which
              identifies you (directly or indirectly), may be stored
              indefinitely.
            </p>
          </div>
          <div className="self-stretch h-52 flex-col justify-start items-start gap-2 flex"id="5">
            <h3 className="text-xl font-semibold font-Quicksand leading-[30px]">
              Your Rights:
            </h3>
            <p>
              Depending on the law that applies, you may have a right to access
              and rectify or erase your personal data or receive a copy of your
              personal data, restrict or object to the active processing of your
              data, ask us to share (port) your personal information to another
              entity, withdraw any consent you provided to us to process your
              data, a right to lodge a complaint with a statutory authority and
              such other rights as may be relevant under applicable laws. To
              exercise these rights, you can write to us at admin@lines.so. We
              will respond to your request in accordance with applicable law.
            </p>
            <p>
              You may opt-out of direct marketing communications or the
              profiling we carry out for marketing purposes by writing to us at
              admin@lines.so. Do note that if you do not allow us to collect or
              process the required personal information or withdraw the consent
              to process the same for the required purposes, you may not be able
              to access or use the services for which your information was
              sought.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-[#ddd4ff] flex-col justify-start items-start gap-4  w-[400px] h-[450px] p-6 whitespace-nowrap hidden lg:flex">
        <TableOfContents/>
       
      </div>
    </div>
  );
};
export default Privacy;

const TableOfContents: React.FC<TableOfContentsProps> = ({setShowContent})=>{
  const contents = [
    "Information We Collect",
    "How We Collect Your Information",
    "How We Use Your Information",
    "How We Share Your Information",
    "Retention Of Your Information:",
    "Your Rights:",
    "Cookies Etc.",
    "Security",
    "Third Party Links & Use Of Your Information:",
    "Grievance / Data Protection Officer",
  ];
  return(
    <>
    <button onClick={()=>setShowContent?.(false)} className="text-stone-600 text-sm font-semibold font-QuicksandLight leading-[17.50px] inline-flex gap-1 lg:hidden ">
      <GoChevronLeft className="text-lg"/>
      <p>Back</p>
    </button>
     <h3 className="self-stretch text-[#4c1595] text-2xl font-semibold font-Quicksand leading-9 ">
          Table Of Contents
        </h3>
        <ul className="flex flex-col gap-3  ">
          {contents.map((item,index) => {
            return (
              <li className="text-stone-800 text-base font-semibold font-QuicksandLight leading-normal">
                <a href={`#${index}`} onClick={()=>setShowContent?.(false)}>{item}</a>
              </li>
            );
          })}
        </ul>
    </>
  )
}