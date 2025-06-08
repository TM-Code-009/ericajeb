import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";
import Landingpage from "../Pages/Landingpage/Landingpage";
import About from "../Pages/About";
import Journal from "../Pages/Journal/Journal";
import DesirePath from "../Pages/Journal/DesirePath";
import DesirePathsArticle from "../Pages/Journal/DesirePathsArticle";
import Everything from "../Pages/Journal/Everything";
import Favourite from "../Pages/Work/Favourite";
import TailorAi from "../Pages/Work/TailorAi";
import Ajebsenty from "../Pages/Work/Ajebsenty";
import Work from "../Pages/Work/Work";




export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {index:true,element:<Landingpage/>},
            {path:"/about",element:<About/>},
            {path:"/journal",element:<Journal/> },
            {path:"/journal/my-journey-into-product-design", element:<DesirePath/>},
            {path:"/journal/desire-paths-in-product-design", element:<DesirePathsArticle/>},
            { path: "/journal/everything-is-as-it-should-be", element: <Everything /> },
            { path: "/work", element: <Work /> },
            { path: "/work/favourite-branding-+ecommerce-case-study", element: <Favourite /> },
            { path: "/work/ai-agent-tailor-ai", element: <TailorAi /> },
            { path: "/work/work-i-did-for-ajebsanty", element: <Ajebsenty /> },
        ]
    }
])