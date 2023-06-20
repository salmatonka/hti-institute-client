import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/pages/Home/Home";
import ChooseCourse from "../components/pages/ChooseCourse/ChooseCourse";
import Contact from "../components/pages/Contact/Contact";
import About from "../components/pages/About/About";
import Gallery from "../components/pages/Gallery/Gallery";
import Courses from "../components/pages/Courses/Courses";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/event',
                element:<Gallery />
            },
            {
                path:'/courses',
                element:<Courses />
            }
        ]

    }
])
export default routes;