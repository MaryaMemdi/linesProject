import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  
} from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgetPassword";
import MainPage from "./pages/Mainepage/Mainpage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import WriterProfile from "./pages/writerProfile";

import Reading from "./pages/reading";
import ReadingMode from "./components/reading/readingMode";

import Layout from "./Layout";
import Explore from "./pages/explore";
import FullExplore from "./pages/fullExplore";
import Privacy from "./pages/privacyPolicy";
import Terms from "./pages/terms";
import Home from "./pages/home";



function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/mainPage" element={<Layout><MainPage /></Layout>} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/forgotPass" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/explore" element={<Layout><Explore/></Layout>}/>
          <Route path="/fullExplore" element={<Layout><FullExplore/></Layout>}/>
          <Route path="/writerProfile" element={<Layout><WriterProfile/></Layout>}/>
          <Route path="/reading" element={<Layout><Reading /></Layout>} />
          <Route path="/readingMode" element={<ReadingMode />} />
          <Route path="/privacy" element={<Layout><Privacy/></Layout>} />
          <Route path="/terms" element={<Layout><Terms/></Layout>} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
