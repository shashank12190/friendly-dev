import { FaLaptopCode } from "react-icons/fa";
import { Form, Link, redirect, useActionData, useNavigate } from "react-router";
import type { Route } from "./+types";
import { store } from "~/store/store";
import { loginSuccess } from "~/store/authSlice";
import { useEffect } from "react";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: Record<string, string> = {};

  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      identifier: email,
      password,
    }),
  });

  const data = await res.json();

  console.log(data);

  if (!res.ok) {
    return {
      errors: {
        form: data?.error?.message || "Invalid credentials",
      },
    };
  }

  return { user: data.user, jwt: data.jwt };
}

const LoginPage = () => {
  const actionData = useActionData<{
    user: any;
    jwt: string;
    errors?: Record<string, string>;
  }>();

  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.user && actionData?.jwt) {
      // Update Redux
      store.dispatch(
        loginSuccess({
          user: actionData.user,
          jwt: actionData.jwt,
        }),
      );

      // Navigate to dashboard
      navigate("/dashboard");
    }
  }, [actionData, navigate]);
  return (
    <>
      <div className="w-full max-w-4xl bg-gray-900 mx-auto rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* left section */}
        <div className="hidden md:flex flex-col justify-center gap-4 p-8 text-white border-r border-gray-600 text-center">
          <div className="flex flex-col items-center gap-3 text-blue-400">
            <FaLaptopCode size={40} />
            <span className="text-3xl font-bold mb-2">
              The Friendly Developer
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Welcome Back! Login to access dashboard, manage projects and explore
            new Ideas
          </p>
          <p className="text-gray-400 text-sm"> Build • Learn • Ship 🚀</p>
        </div>
        {/* right section */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          <Form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 border border-gray-700 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full mt-1 border border-gray-700 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium mt-4"
            >
              Login
            </button>
          </Form>
          <p className="mt-4 text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
