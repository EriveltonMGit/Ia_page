import "../app/css_app/page.css";

// IMPORTS COMPONENTS
import Page_1 from "@/Pages/Page_1";
import Page_2 from "@/Pages/Page_2";
import Page_3 from "@/Pages/Page_3";
import Page_4 from "@/Pages/Page_4";
import Page_5 from "@/Pages/Page_5";
import Page_6 from "@/Pages/Page_6";
import Page_7 from "@/Pages/Page_7";
import Page_8 from "@/Pages/Page_8";

export default function Home() {
  return (
    <section className="Home_page">
      <Page_1 />
      <Page_2 />
      <Page_3 />
      <Page_4 />
      <Page_5 />
      <Page_6 />
      <Page_7 />
      <Page_8 />
    </section>
  );
}
