import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <main><Home /></main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
