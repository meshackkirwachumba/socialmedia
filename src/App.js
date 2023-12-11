import { Outlet, useLocation, Navigate, Route, Routes } from "react-router-dom";
function Layout() {
  const user = null;
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <div className=" bg-secondary w-full min-h-[100vh]">
      <Routes>
        {/* protected routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
