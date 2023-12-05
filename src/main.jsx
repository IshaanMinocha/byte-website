import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Achievments from './Components/AchievmentsSection.jsx'
import Team from './Components/Team.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Faq from './Components/Faq.jsx'
import ProjectShowcase from './Components/ProjectShowcase.jsx'
import Connect from './Components/Connect.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: 
        <>
        <Hero/>
        <About/>
        <Achievments/>
        <ProjectShowcase/>
        <Faq/>
        </>
      },
      {
        path: "team",
        element: <Team/>
      },
      {
        path: "achievments",
        element: <Achievments/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "connect",
        element: <Connect/>
      },
    ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
