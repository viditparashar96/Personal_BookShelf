import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = true;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="w-full">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
