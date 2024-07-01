/* eslint-disable no-unused-vars */
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {

  const BASE_URL = 'https://team-link-fujc3hj0d-ahsaas-projects.vercel.app/api';

  const addJob = async (newJob) => {
    const res = await fetch(`${BASE_URL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async(id) => {
    const res = await fetch(`${BASE_URL}/jobs/${id}`, {
      method: "DELETE"
    });
    return;
  }

  const editJob = async(job) => {
    const res = await fetch(`${BASE_URL}/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<JobsPage />} />
        <Route
          path="/add-project"
          element={<AddJobPage addJobSubmit={addJob} />}
        />
          <Route
          path="/projects/edit/:id"
          element={<EditJobPage updateJobSubmit={editJob}/>}
          loader={jobLoader}
        />
        <Route path="/projects/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
