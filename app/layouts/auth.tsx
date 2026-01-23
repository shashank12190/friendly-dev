import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
