import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import ThemeProvider from './Components/Shared/ThemeProvider';

// In your main App.tsx or routing file
import LoginPage from './Components/Auth/LoginPage';

// Add these imports to your App.tsx
import AdminDashboard from './Components/Admin/Dashboard/AdminDashboard';
import AddStudent from './Components/Admin/Students/AddStudent';

// Home Components
import Home from './Components/Home/Home';
import Overview from './Components/Home/Overview';
import KeyAchievements from './Components/Home/KeyAchievements';

// Intensive Programme Components
import IntensiveProgramme from './Components/IntesiveProgramme/IntesiveProgramme';
import UpcomingEvent from './Components/UpcomingEvent/UpcomingEvent';

// In Studio Classes Components
import InStudioClasses from './Components/InStudioClassess/InStudioClasses';
import ClassSchedule from './Components/InStudioClassess/ClassSchedule';
import RegularBatchPlans from './Components/InStudioClassess/RegularBatchPlans';
import ClassPackage from './Components/InStudioClassess/ClassPackage';

// Studio Booking Components
import StudioBooking from './Components/StudioBooking/StudioBooking';
import Details from './Components/StudioBooking/Details';
import AboutUs from './Components/StudioBooking/AboutUs';
import ImageGallery from './Components/StudioBooking/ImageGallery';
import VideoGallery from './Components/StudioBooking/VideoGallery';
import StudioRentalRates from './Components/StudioBooking/StudioRentalRates';

// Instructor Qualification Components
import InstructorQualification from './Components/InstructorQualification/InstructorQualification';
import InstructorList from './Components/InstructorQualification/InstructorList';
import Qualification from './Components/InstructorQualification/Qualification';

import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>

              {/* {/* Add to your routes */}
              <Route path="/login" element={<LoginPage />} />
              
              {/* Home Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/key-achievements" element={<KeyAchievements />} />

              {/* Intensive Programme Routes */}
              <Route path="/intensive-programme" element={<IntensiveProgramme />} />
              <Route path="/upcoming-event" element={<UpcomingEvent />} />

              {/* In Studio Classes Routes */}
              <Route path="/in-studio-classes" element={<InStudioClasses />} />
              <Route path="/class-schedule" element={<ClassSchedule />} />
              <Route path="/regular-batch-plans" element={<RegularBatchPlans />} />
              <Route path="/class-package" element={<ClassPackage />} />

              {/* Studio Booking Routes */}
              <Route path="/studio-booking" element={<StudioBooking />} />
              <Route path="/details" element={<Details />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/image-gallery" element={<ImageGallery />} />
              <Route path="/video-gallery" element={<VideoGallery />} />
              <Route path="/studio-rental-rates" element={<StudioRentalRates />} />

              {/* Instructor Qualification Routes */}
              <Route path="/instructor-qualification" element={<InstructorQualification />} />
              <Route path="/instructor-list" element={<InstructorList />} />
              <Route path="/qualification" element={<Qualification />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;