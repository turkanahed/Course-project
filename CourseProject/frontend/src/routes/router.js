import MainRoot from "../components/MainRoot";
import AboutUs from "../pages/AboutUs";
import Add from "../pages/Add";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Elements from "../pages/Elements";
import Home from "../pages/Home";
import News from "../pages/News";

const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/elements",
                element: <Elements />
            },
            {
                path: "/news",
                element: <News />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/add",
                element: <Add />
            },
        ]
    }
]

export default ROUTES