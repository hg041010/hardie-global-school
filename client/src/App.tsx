import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";

import About from "./pages/About";
import AboutVision from "./pages/AboutVision";
import AboutHistory from "./pages/AboutHistory";
import HardieEducation from "./pages/HardieEducation";
import AboutIntro from "./pages/AboutIntro";
import ChairmanMessage from "./pages/ChairmanMessage";
import PrincipalMessage from "./pages/PrincipalMessage";
import StaffIntro from "./pages/StaffIntro";
import CampusInfo from "./pages/CampusInfo";

import EducationGoals from "./pages/EducationGoals";
import EducationMethodology from "./pages/EducationMethodology";
import SchoolInfo from "./pages/SchoolInfo";

import CurriculumMain from "./pages/CurriculumMain";
import CurriculumOverview from "./pages/CurriculumOverview";
import ElementaryCurriculum from "./pages/ElementaryCurriculum";
import MiddleCurriculum from "./pages/MiddleCurriculum";
import MiddleHighCurriculum from "./pages/MiddleHighCurriculum";
import HighCurriculum from "./pages/HighCurriculum";

import ElementarySubjects from "./pages/ElementarySubjects";
import MiddleSubjects from "./pages/MiddleSubjects";
import HighSubjects from "./pages/HighSubjects";
import OverseasAdmission from "./pages/OverseasAdmission";
import CreativeExperience from "./pages/CreativeExperience";
import CreativeExperienceDetail from "./pages/CreativeExperienceDetail";
import SubjectDetail from "./pages/SubjectDetail";
import SecondarySubjectDetail from "./pages/SecondarySubjectDetail";

import SpringConference from "./pages/SpringConference";
import FallConference from "./pages/FallConference";
import VisionTrip from "./pages/VisionTrip";
import RSC from "./pages/RSC";

import Admission from "./pages/Admission";
import SpiritualLife from "./pages/SpiritualLife";
import ArtsEducation from "./pages/ArtsEducation";
import StudentActivities from "./pages/StudentActivities";
import CampusCulture from "./pages/CampusCulture";
import SchoolLifeMain from "./pages/SchoolLifeMain";

import NewsMain from "./pages/NewsMain";
import MediaNews from "./pages/MediaNews";
import Notice from "./pages/Notice";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import ParentSupport from "./pages/ParentSupport";

function Router() {
  return (
    <>
      <ScrollToTop />

      <Switch>
        <Route path="/" component={Home} />

        {/* About Pages */}
        <Route path="/about" component={About} />
        <Route path="/about/vision" component={AboutVision} />
        <Route path="/about/history" component={AboutHistory} />
        <Route path="/about/education" component={HardieEducation} />
        <Route path="/about/intro" component={AboutIntro} />
        <Route path="/about/chairman" component={ChairmanMessage} />
        <Route path="/about/principal" component={PrincipalMessage} />
        <Route path="/about/staff" component={StaffIntro} />
        <Route path="/about/campus" component={CampusInfo} />

        {/* Existing About Pages */}
        <Route path="/about/goals" component={EducationGoals} />

        <Route
          path="/about/methodology"
          component={EducationMethodology}
        />

        <Route path="/about/info" component={SchoolInfo} />

        {/* Curriculum Pages */}
        <Route path="/curriculum" component={CurriculumMain} />

        <Route
          path="/curriculum/overview"
          component={CurriculumOverview}
        />

        <Route
          path="/curriculum/elementary"
          component={ElementaryCurriculum}
        />

        <Route
          path="/curriculum/middle-high"
          component={MiddleHighCurriculum}
        />

        <Route
          path="/curriculum/elementary/subjects"
          component={ElementarySubjects}
        />

        <Route
          path="/curriculum/elementary/subjects/:id"
          component={SubjectDetail}
        />

        <Route
          path="/curriculum/middle-high/subjects/:id"
          component={SecondarySubjectDetail}
        />

        <Route
          path="/curriculum/middle"
          component={MiddleCurriculum}
        />

        <Route
          path="/curriculum/middle/subjects"
          component={MiddleSubjects}
        />

        <Route
          path="/curriculum/middle/subjects/:id"
          component={SubjectDetail}
        />

        <Route
          path="/curriculum/high"
          component={HighCurriculum}
        />

        <Route
          path="/curriculum/high/subjects"
          component={HighSubjects}
        />

        <Route
          path="/curriculum/high/subjects/:id"
          component={SubjectDetail}
        />

        <Route
          path="/curriculum/overseas"
          component={OverseasAdmission}
        />

        <Route
          path="/curriculum/overseas/subjects/:id"
          component={SubjectDetail}
        />

        {/* Creative Experience Pages */}
        <Route
          path="/curriculum/creative-experience/spring-conference"
          component={SpringConference}
        />

        <Route
          path="/creative-experience/spring-conference"
          component={SpringConference}
        />
        
        <Route
          path="/curriculum/creative-experience/fall-conference"
          component={FallConference}
        />

        <Route
          path="/creative-experience/fall-conference"
          component={FallConference}
        />

        <Route
          path="/curriculum/creative-experience/vision-trip"
          component={VisionTrip}
/>

        <Route
          path="/creative-experience/vision-trip"
          component={VisionTrip}
        />

        <Route
          path="/curriculum/creative-experience/rsc"
          component={RSC}
        />

        <Route
          path="/creative-experience/rsc"
          component={RSC}
        />

        <Route
          path="/curriculum/creative-experience"
          component={CreativeExperience}
        />

        <Route
          path="/creative-experience/:id"
          component={CreativeExperienceDetail}
        />

        <Route
          path="/curriculum/subjects/:id"
          component={SubjectDetail}
        />

        {/* Main Pages */}
        <Route path="/admission" component={Admission} />

        <Route
          path="/school-life"
          component={SchoolLifeMain}
        />

        <Route
          path="/school-life/spiritual"
          component={SpiritualLife}
        />

        <Route
          path="/school-life/arts"
          component={ArtsEducation}
        />

        <Route
          path="/school-life/student-activities"
          component={StudentActivities}
        />

        <Route
          path="/school-life/culture"
          component={CampusCulture}
        />

        <Route path="/parent-support" component={ParentSupport} />

        <Route path="/news" component={NewsMain} />
        <Route path="/news/media" component={MediaNews} />
        <Route path="/notice" component={Notice} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />

        <Route path="/404" component={NotFound} />

        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </WouterRouter>
  );
}

export default App;