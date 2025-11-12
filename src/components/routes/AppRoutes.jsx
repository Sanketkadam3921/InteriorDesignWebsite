import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import ScrollToTop from "../common/ScrollToTop";
import HomePage from "../pages/homepage/HomePage";
import ProjectsList from "../pages/projects/ProjectsList";
import DesignList from "../pages/designs/DesignList";
import AllDesigns from "../pages/designs/AllDesigns";
import DesignDetail from "../pages/designs/DesignDetail";
import DesignGallery from "../pages/designs/DesignGallery";
import DesignCategories from "../pages/designs/DesignCategories";
import DesignCategory from "../pages/designs/DesignCatergory";
import ContactForm from "../pages/enquiries/ContactForm";
import ProjectDetail from "../pages/projects/ProjectDetail";
import FAQ from "../pages/faq/FAQ";
import NotFound from "../pages/notfound/NotFound";
import AboutUsPage from "../pages/about-us/AboutUsPage";
import MagazinePage from "../pages/magazine/MagazinePage";
import HowItWorks from "../pages/second-nav-pages/HowItWorks";
import OfferingPage from "../pages/second-nav-pages/offering-page";
import ModularInteriorsPage from "../pages/second-nav-pages/offerings/ModularInteriors";
import FullHomeInteriorsPage from "../pages/second-nav-pages/FullHomeInteriorsPage";
import LuxuryInteriorPage from "../pages/second-nav-pages/offerings/LuxuryInterior";
import BookOnlineConsultation from "../pages/second-nav-pages/offerings/BookOnlineConsultation";
import LearnMore from "../pages/second-nav-pages/offerings/Learn-more";
import QuoteForm from "../pages/enquiries/QuoteForm";

// Price Calculator Components
import HomeInteriorCalculator from "../pages/price-calculators/home/HomeInteriorCalculator";
import HomeInteriorCalculatorSteps from "../pages/price-calculators/home/HomeInteriorCalculatorSteps";
import KitchenPriceCalculator from "../pages/price-calculators/kitchen/KitchenPriceCalculator";
import KitchenCalculatorSteps from "../pages/price-calculators/kitchen/KitchenCalculatorSteps";
import WardrobePriceCalculator from "../pages/price-calculators/wardrobe/WardrobePriceCalculator";
import WardrobeCalculatorSteps from "../pages/price-calculators/wardrobe/WardrobeCalculatorSteps";

// New Project Components
import ProjectsPage from "../pages/projects/ProjectsPage";
import DeliveredProjectsList from "../pages/projects/DeliveredProjectsList";
import UpcomingProjectsList from "../pages/projects/UpcomingProjectsList";
import DeliveredProjectDetail from "../pages/projects/DeliveredProjectDetail";
import UpcomingProjectDetail from "../pages/projects/UpcomingProjectDetail";
import ProjectGallery from "../pages/projects/ProjectGallery";

// Kitchen Components
import KnowYourKitchen from "../pages/second-nav-pages/offerings/KnowYourKitchen";
import KitchenCabinets from "../pages/kitchen-components/KitchenCabinets";
import KitchenCabinetDetail from "../pages/kitchen-components/KitchenCabinetDetail";
import KitchenHandles from "../pages/kitchen-components/KitchenHandles";
import KitchenHandlesDetails from "../pages/kitchen-components/KitchenHandlesDetails";
import KitchenFinishes from "../pages/kitchen-components/KitchenFinishes";
import KitchenFinishesDetails from "../pages/kitchen-components/KitchenFinishesDetails";
// Wardrobe Components

import WardrobeCabinets from "../pages/wardrobe-components/WardrobeCabinets";
import WardrobeHandles from "../pages/wardrobe-components/WardrobeHandles";
import WardrobeFinishes from "../pages/wardrobe-components/WardrobeFinishes";
import KnowYourWardrobe from "../pages/second-nav-pages/offerings/KnowYourWardrobe";
// Renovations Components
import RenovationsPage from "../pages/renovations/RenovationsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="projects" element={<ProjectsPage />} />
          <Route
            path="projects/delivered"
            element={<DeliveredProjectsList />}
          />
          <Route
            path="projects/delivered/:id"
            element={<DeliveredProjectDetail />}
          />
          <Route
            path="projects/delivered/:id/gallery"
            element={<ProjectGallery />}
          />
          <Route path="projects/upcoming" element={<UpcomingProjectsList />} />
          <Route
            path="projects/upcoming/:id"
            element={<UpcomingProjectDetail />}
          />
          <Route
            path="projects/upcoming/:id/gallery"
            element={<ProjectGallery />}
          />
          <Route path="projects/old" element={<ProjectsList />} />
          <Route path="projects/old/:id" element={<ProjectDetail />} />
          <Route
            path="wardrobe/know-your-wardrobe"
            element={<KnowYourWardrobe />}
          />

          <Route path="designs" element={<AllDesigns />} />
          <Route path="designs/categories" element={<DesignCategories />} />
          <Route path="designs/:category" element={<DesignCategory />} />
          <Route path="designs/:category/:id" element={<DesignDetail />} />
          <Route
            path="designs/:category/:id/gallery"
            element={<DesignGallery />}
          />

          <Route path="contact" element={<ContactForm />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route
            path="kitchen/know-your-kitchen"
            element={<KnowYourKitchen />}
          />

          <Route path="magazine" element={<MagazinePage />} />

          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="offerings" element={<OfferingPage />} />
          <Route
            path="offerings/modular-interiors"
            element={<ModularInteriorsPage />}
          />
          <Route
            path="designs/full-home-interiors"
            element={<FullHomeInteriorsPage />}
          />
          <Route
            path="designs/modular-interiors"
            element={<ModularInteriorsPage />}
          />
          <Route
            path="price-calculators"
            element={<HomeInteriorCalculator />}
          />
          <Route
            path="price-calculators/home"
            element={<HomeInteriorCalculator />}
          />
          <Route
            path="price-calculators/home/calculator/*"
            element={<HomeInteriorCalculatorSteps />}
          />
          <Route
            path="price-calculators/kitchen"
            element={<KitchenPriceCalculator />}
          />
          <Route
            path="price-calculators/kitchen/calculator/*"
            element={<KitchenCalculatorSteps />}
          />
          <Route
            path="price-calculators/wardrobe"
            element={<WardrobePriceCalculator />}
          />
          <Route
            path="price-calculators/wardrobe/calculator/*"
            element={<WardrobeCalculatorSteps />}
          />
          <Route path="modular-journey" element={<OfferingPage />} />
          <Route path="kitchen/know-your-kitchen" element={<OfferingPage />} />
          <Route path="kitchen/price-calculator" element={<OfferingPage />} />
          <Route path="kitchen/components" element={<OfferingPage />} />
          <Route
            path="kitchen/components/cabinets"
            element={<KitchenCabinets />}
          />
          <Route
            path="kitchen/components/cabinets/:category/:id"
            element={<KitchenCabinetDetail />}
          />

          <Route
            path="kitchen/components/handles"
            element={<KitchenHandles />}
          />
          <Route
            path="kitchen/components/finishes/:category/:id"
            element={<KitchenFinishesDetails />}
          />
          <Route
            path="kitchen/components/handles/:id"
            element={<KitchenHandlesDetails />}
          />

          <Route
            path="kitchen/components/finishes"
            element={<KitchenFinishes />}
          />
          <Route
            path="wardrobe/know-your-wardrobe"
            element={<OfferingPage />}
          />
          <Route path="wardrobe/price-calculator" element={<OfferingPage />} />
          <Route path="wardrobe/components" element={<OfferingPage />} />
          <Route
            path="wardrobe/components/cabinets"
            element={<WardrobeCabinets />}
          />
          <Route
            path="wardrobe/components/handles"
            element={<WardrobeHandles />}
          />
          <Route
            path="wardrobe/components/finishes"
            element={<WardrobeFinishes />}
          />
          <Route
            path="designs/luxury-interiors"
            element={<LuxuryInteriorPage />}
          />
          <Route
            path="offerings/book-online-consultation"
            element={<ContactForm />}
          />
          <Route path="offerings/learn-more" element={<ContactForm />} />
          <Route path="enquiries/quote-form" element={<ContactForm />} />

          {/* Renovations Routes */}
          <Route path="renovations" element={<RenovationsPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
