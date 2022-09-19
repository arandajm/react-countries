import { Routes, Route, Navigate } from "react-router-dom";

// components
import Layout from "./components/Layout";

// pages
import CountrySearchPage from "./pages/CountrySearchPage";
import CountryDetailPage from "./pages/CountryDetailPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CountrySearchPage />} />
        <Route path="country/:name" element={<CountryDetailPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
