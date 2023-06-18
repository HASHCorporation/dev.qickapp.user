import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import ResetPassword from "./page/ResetPassword";
import ForgotPassword from "./page/ForgotPassword";
import NewEmail from "./page/NewEmail";
import NewName from "./page/NewName";
import Home from "./page/Home";
import Account from "./page/Account";
import YourOrder from "./page/YourOrder";
import Storelist from "./page/Storelist";
import AccountInfo from "./page/AccountInfo";
import FourZeroFour from "./page/FourZeroFour";
import Checkout from "./page/Checkout";
import NewAddress from "./page/NewAddress";
import ProductDetail from "./page/ProductDetail";
function App() {
  return (
    <HashRouter>
      <Routes>
        {/* login stystem  */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" exact={true} element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/newemail" element={<NewEmail />} />
        <Route path="/newname" element={<NewName />} />
        <Route path="/404" element={<FourZeroFour />} />
        {/* login stystem  */}

        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/yourorder" element={<YourOrder />} />
        <Route path="/storelist" element={<Storelist />} />
        <Route path="/accountinfo" element={<AccountInfo />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/newaddress" element={<NewAddress />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
