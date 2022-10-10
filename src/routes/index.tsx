import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../container/Dashboard"));
const Blogs = lazy(() => import("../container/Blogs"));
const BlogDetail = lazy(() => import("../container/BlogDetail"));

const Loading = () => <p>Loading ...</p>;
const Main = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path={`posts/:id`} element={<BlogDetail />} />
      </Routes>
    </Suspense>
  );
};
export default Main;
