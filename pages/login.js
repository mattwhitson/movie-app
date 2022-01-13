import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const Login = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const login = () => {};

  return (
    <div className="bg-black min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(login)}
        className="flex flex-col p-64 bg-[#101010] lg:w-[800px] rounded-lg"
      >
        <div className="flex flex-col mb-4">
          <label className="text-white pl-1">Username</label>
          <input
            className="py-1 focus:outline-none pl-1 rounded"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-white pl-1">Password</label>
          <input
            className="py-1 focus:outline-none pl-1 rounded"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-8 py-2 px-4 bg-blue-600 rounded shadow shadow-blue-500/50 w-1/3 hover:bg-blue-400"
        >
          Signin
        </button>
        <p className="text-white mt-2">
          Don&apos;t have an accout? Click{" "}
          <Link href="/register">
            <a className="text-blue-500">here</a>
          </Link>{" "}
          to sign in
        </p>
      </form>
    </div>
  );
};

export default Login;
