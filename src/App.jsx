import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import "./style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConfigRoute from "./ConfigRoute";
import ScrollToTop from "./components/ScrollToTop";
import CheckAuthentication from "./components/CheckAuthentication";
import { MessengerChat } from "react-messenger-chat-plugin";

function App() {
  const isAdmin = window.location.href.includes("admin");
  return (
    <>
      <BrowserRouter>
        <CheckAuthentication />
        <ScrollToTop>
          {isAdmin ? null : <Header />}
          <ConfigRoute />
          {isAdmin ? null : <Footer />}

          <ToastContainer
            autoClose={1200}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover={false}
          />
        </ScrollToTop>
      </BrowserRouter>

      {isAdmin ? null : (
        <MessengerChat
          pageId="127440555556390"
          language="vi_VN"
          bottomSpacing={30}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={"show"}
          debugMode={true}
          onMessengerShow={() => {
            console.log("onMessengerShow");
          }}
          onMessengerHide={() => {
            console.log("onMessengerHide");
          }}
          onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
          }}
          onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
          }}
          onMessengerMounted={() => {
            console.log("onMessengerMounted");
          }}
          onMessengerLoad={() => {
            console.log("onMessengerLoad");
          }}
        />
      )}
    </>
  );
}

export default App;
