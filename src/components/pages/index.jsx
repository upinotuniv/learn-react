import React, { useState } from "react";
import Layout from "../templates/Wrapper";
import Head from "../templates/Head";
import FeeCheck from "../templates/FeeCheck";
import TrackPackage from "../templates/TrackPackage";
import Service from "../templates/Service";
import News from "../templates/News";
import Career from "../templates/Career";
import Footer from "../organisms/Footer";

export default function Gocen() {
  const [clicked, setClicked] = useState(false);

  const handleFeeCheck = (e) => {
    e.preventDefault();
    setClicked(false);
  };

  const handleTrackPackage = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <Layout>
      {/* =============== Navbar and Banner ============== */}
      <Head />

      {/* ========== Fee Check or Track Package ==========  */}
      {clicked ? (
        <TrackPackage handleMove={handleFeeCheck} />
      ) : (
        <FeeCheck handleMove={handleTrackPackage} />
      )}

      {/* ==================== Service ===================  */}
      <Service />

      {/* ====================== News ====================  */}
      <News />

      {/* ===================== Career ===================  */}
      <Career />

      {/* ===================== Footer ===================  */}
      <Footer />
    </Layout>
  );
}
