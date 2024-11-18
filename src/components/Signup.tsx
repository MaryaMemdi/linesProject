

import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, Form } from 'formik';


// import * as Yup from "yup";
// import { Formik, Field, ErrorMessage, Form } from "formik";


import { Link } from "react-router-dom";
const valid = Yup.object().shape({
  Name: Yup.string()
    .min(3, "حداقل سه کارکتر وارد کنید")
    .max(10, "کارکتر بیش از حد مجاز است")
    .required("پر کردن این فیلد الزامی است"),
  Email: Yup.string()
    .email("ایمیل معتبر نیست")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "فقط حروف انگلیسی و اعداد مجاز است"
    )
    .required("پر کردن این فیلد الزامی است"),
  Password: Yup.string()
    .min(3, "حداقل سه کارکتر وارد کنید")
    .max(20, "کارکتر بیش از حد مجاز است")
    .required("پر کردن این فیلد الزامی است")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]+$/,
      "فقط حروف انگلیسی، اعداد و علائم مجاز است"
    ),
  confirm_Password: Yup.string()
    .oneOf([Yup.ref("Password"), undefined], "رمز عبور مطابقت ندارد")
    .required("تأیید رمز عبور الزامی است"),
  terms: Yup.boolean().oneOf(
    [true],
    "برای ارسال فرم باید قوانین را بخوانید و قبول کنید."
  ),
});

function SignUp() {
  return (
    <>

    
    
    <Link to="/login" className="pt-3 text-sm pl-20 pb-6 text_dark">&lt; back to login</Link>
    
    <h2 className="text-3xl pl-20 text-[#0f7ab9] pb-6">signup</h2>
  
    <Formik
      initialValues={{
        Name: '',
        Email: '',
        Password: '',
        confirm_Password: '',
        terms: false,
      }}
      validationSchema={valid}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        console.log("فرم با موفقیت ارسال شد!");
        alert("ok");
        setSubmitting(false); 
      }}
    >
      {({ isSubmitting }) => (
        <Form className='md:flex md:flex-col md:justify-center md:items-center'>
          <div className="pl-20 mb_16 md:w-full md:h-auto">
            <label htmlFor="Name" className='text-[#153060] font-quicksand text-[14px] font-normal leading-[1.25]'>FullName</label>
            <div className="flex">
              <Field type="text" id="Name" name="Name" className="border  w-3/4 h-8 bg-gray-200" />
              <ErrorMessage name="Name" component="div" className="ml-3 text-red-500" />
            </div>
          </div>
  
          <div className="pl-20 mb_16 md:w-full md:h-auto">
            <label htmlFor="Email" className='text-[#153060] font-quicksand text-[14px] font-normal leading-[1.25]'>Email</label>
            <div className="flex">
              <Field type="email" id="Email" name="Email" className="border  w-3/4 h-8 bg-gray-200" />
              <ErrorMessage name="Email" component="div" className="ml-3 text-red-500" />
            </div>
          </div>
  
          <div className="pl-20 mb_16 md:w-full md:h-auto">
            <label htmlFor="Password" className='text-[#153060] font-quicksand text-[14px] font-normal leading-[1.25]'>Password</label>
            <div className="flex">
              <Field type="password" id="Password" name="Password" className="border  w-3/4 h-8 bg-gray-200" />
              <ErrorMessage name="Password" component="div" className="ml-3 text-red-500" />
            </div>
          </div>
  
          <div className="pl-20 mb_16 md:w-full md:h-auto">
            <label htmlFor="confirm_Password" className='text-[#153060] font-quicksand text-[14px] font-normal leading-[1.25]'>Confirm Password</label>
            <div className="flex">
              <Field type="password" id="confirm_Password" name="confirm_Password" className="border  w-3/4 h-8 bg-gray-200" />
              <ErrorMessage name="confirm_Password" component="div" className="ml-3 text-red-500" />
            </div>
          </div>
  
          <div className="pl-20 mb_16 md:w-full md:h-auto">
            <Field type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms" 
            className="text-stone-800 font-quicksand text-[14px] font-semibold leading-[1.25]">
              I agree to all the Terms and Privacy Policies
              </label>
            <ErrorMessage name="terms" component="div" className="text-red-500" />
          </div>
  
          <div className="pl-20 mb_16 md:w-full md:h-auto">
            <button type="submit" className="w-3/4 bg-blue-500 mt-5 text-white py-2 mb-3" disabled={isSubmitting}>
              {isSubmitting ? "در حال ارسال..." : "create account"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  
      <h1 className="p-3 text-3xl font-bold">Lines</h1>


      <Link to="/login" className="pt-3 text-sm pl-20 pb-6 text-blue-500">
        &lt; back to login
      </Link>

      <h2 className="text-3xl pl-20 text-blue-500 pb-6">signup</h2>

      <Formik
        initialValues={{
          Name: "",
          Email: "",
          Password: "",
          confirm_Password: "",
          terms: false,
        }}
        validationSchema={valid}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          console.log("فرم با موفقیت ارسال شد!");
          alert("ok");
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="pl-20">
              <label htmlFor="Name">FullName</label>
              <div className="flex">
                <Field
                  type="text"
                  id="Name"
                  name="Name"
                  className=" border-2 w-3/4 h-8 bg-gray-200"
                />
                <ErrorMessage
                  name="Name"
                  component="div"
                  className="ml-3 text-red-500"
                />
              </div>
            </div>

            <div className="pl-20">
              <label htmlFor="Email">Email</label>
              <div className="flex">
                <Field
                  type="email"
                  id="Email"
                  name="Email"
                  className=" border-2 w-3/4 h-8 bg-gray-200"
                />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="ml-3 text-red-500"
                />
              </div>
            </div>

            <div className="pl-20">
              <label htmlFor="Password">Password</label>
              <div className="flex">
                <Field
                  type="password"
                  id="Password"
                  name="Password"
                  className=" border-2 w-3/4 h-8 bg-gray-200"
                />
                <ErrorMessage
                  name="Password"
                  component="div"
                  className="ml-3 text-red-500"
                />
              </div>
            </div>

            <div className="pl-20">
              <label htmlFor="confirm_Password">Confirm Password</label>
              <div className="flex">
                <Field
                  type="password"
                  id="confirm_Password"
                  name="confirm_Password"
                  className=" border-2 w-3/4 h-8 bg-gray-200"
                />
                <ErrorMessage
                  name="confirm_Password"
                  component="div"
                  className="ml-3 text-red-500"
                />
              </div>
            </div>

            <div className="pl-20">
              <Field type="checkbox" id="terms" name="terms" className="mr-2" />
              <label htmlFor="terms">
                تمامی قوانین را خوانده و قبول کرده‌ام
              </label>
              <ErrorMessage
                name="terms"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="pl-20">
              <button
                type="submit"
                className="w-3/4 bg-blue-500 mt-5 text-white py-2 mb-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "در حال ارسال..." : "create account"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignUp;

// import React from 'react'
// import * as Yup from 'yup';
// import useYup from '../component/YUp/YUp';

// import "./sing.css"
// import { Formik,Field,ErrorMessage } from 'formik';

// const checkEmailExists = async (email: string): Promise<boolean> => {

//   const existingEmails = ['test@example.com', 'user@example.com'];

//   return existingEmails.includes(email);
// };

// // تعریف اعتبار سنجی
// const valid =Yup.object().shape({
// Name:Yup.string()
// .min(3,"حداقل سه کارکتر وارد کنید")
// .max(10,"کارکتر بیش از حد مجاز است")
// .required("پر کردن این فیلد الزامی است"),
// Email:Yup.string()
// .email("ایمیل معتبر نیست")
// .required("پر کردن این فیلد الزامی است")
// .test(
//   "emailExist",
//   "ایمیل تکراری است",
//   async function (value){
//     if(!value)return true;
//     const isEmailTaken = await checkEmailExists(value);
//     return !isEmailTaken;
//   }
// )
// ,
// Password:Yup.string()
// .min(3,"حداقل سه کارکتر وارد کنید")
// .max(20,"کارکتر بیش از حد مجاز است")
// .required("پر کردن این فیلد الزامی است"),

// confirm_Password: Yup.string()
//       .oneOf([Yup.ref('Password'), undefined], 'رمز عبور مطابقت ندارد')
//       .required('تأیید رمز عبور الزامی است'),
//       terms: Yup.boolean()
//     .oneOf([true], 'برای ارسال فرم باید قوانین را بخوانید و قبول کنید.')

// })

// function Sing_up() {

//   return (
//     <>
//     <h1 className='p-3 fs-1 fw-bold'> Lines </h1>
//     <a href='#' className='pt-3 fs-6 padding-s-5rem padding-b-1-5rem '>&lt; back to login</a>
//     <h2 className='fs-1 padding-s-5rem text_blue padding-b-1-5rem'>singup</h2>

//       <Formik
//        initialValues={{
//         Name: '',
//         Email: '',
//         Password: '',
//         confirm_Password: '',
//         terms: false,
//       }}
//       validationSchema={valid}
//       onSubmit={(values) => {
//         debugger;
//         console.log(values.Name);
//         alert("ok")
//       }}
//       >
//         {()=>(

//        <form>
//         <div className='padding-s-5rem'>
//             <label htmlFor="Name">FullName</label>
//             <br/>
//             <div className='d-flex'>
//             <Field type="text" id="Name" name="Name" className=" border border-3 w-75 height-1rem backgreand_secendry" />
//             <ErrorMessage name="Name" component="div" className='ms-3 text-danger ' />
//             </div>
//           </div>

//           <div className='padding-s-5rem'>
//             <label htmlFor="Email">Email</label>
//             <div className='d-flex'>
//             <Field type="email" id="Email" name="Email" className=" border border-3 w-75 height-1rem backgreand_secendry"/>
//             <ErrorMessage name="Email" component="div"  className='ms-3 text-danger ' />
//             </div>
//           </div>
//           <div className='padding-s-5rem'>
//             <label htmlFor="password">Password</label>
//             <div className='d-flex'>
//             <Field type="Password" id="Password" name="Password" className=" border border-3 w-75 height-1rem backgreand_secendry"/>
//             <ErrorMessage name="Password" component="div" className='ms-3 text-danger ' />
//             </div>
//           </div>

//           <div className='padding-s-5rem'>
//             <label htmlFor="confirm_Password">Confirm Password</label>
//             <div className='d-flex'>
//             <Field type="Password" id="confirm_Password" name="confirm_Password" className=" border border-3 w-75 height-1rem backgreand_secendry" />
//             <ErrorMessage name="confirm_Password" component="div" className='ms-3 text-danger ' />
//             </div>
//           </div>

//           <div className='padding-s-5rem'>
//               <Field type="checkbox" id="terms" name="terms" className="me-2" />
//               <label htmlFor="terms">تمامی قوانین را خوانده و قبول کرده‌ام</label>
//               <ErrorMessage name="terms" component="div" className='text-danger' />
//             </div>

//           <div className='d-flex justify-content-center'>
//           <button type="submit" className='w-50 bg-primary mt-5 text-light mb-3 pb-3'>create account</button>
//           </div>

//        </form>

//         )}
//       </Formik>

//        <p className='d-flex justify-content-center mb-5 mt-5'>alrady have account? <a href='#' className='text-info'>login</a></p>

//     </>

//   )
// }

// export default Sing_up
