import React from 'react';
import { useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

const SignIn = () => {
    const navigate = useNavigate();
    const schema = z.object({
        username: z.string().min(3),
        password: z.string().min(8),
      });
      const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: zodResolver(schema),
      });

  const onSubmit = async (data) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
      } catch (error) {
        setError("root", {
          message: "This email is already taken",
        });
      }
    const { password } = data;

    if (password === 'adminPassword') {
      navigate('/admin-dashboard');
    } else {
      navigate('/teacher-log');
    }
  };

  return (
    <div className="max-h-screen ">
      <div className="flex flex-col justify-center items-center h-screen">
        <div><h1 className="text-xl p-2 font-header">Sign In</h1></div>
     
        <form onSubmit={handleSubmit(onSubmit)}  className="border-slate-200 space-y-4">
        <input
        {...register("username")}
          type="text"
          name="username"
          label="Username"
          placeholder="Enter your username"
          className="w-full p-2 border border-gray-300 rounded"
          autoComplete="off"
        />
        {errors.username && (
        <div className="text-red-500">{errors.username.message}</div>
      )}
        <input 
        {...register("password")}
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          className="w-full p-2 border border-gray-300 rounded"
          autoComplete="off"
        />
        {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      
         <button disabled={isSubmitting} 
         type="submit"
         className="w-full p-2 bg-primary text-white rounded hover:bg-blue-600"
         >
        {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && <div className="text-red-500">{errors.root.message}</div>}

        <div className=""> 
        <button type="reset" onClick={() => reset({ username: '', password: '' })}
        className="p-2 bg-gray-300 rounded hover:bg-hover"
          >
            Reset
        </button>
       
        <Link to="/">
          <button 
          type="button"
          className="p-2 bg-gray-300 rounded hover:bg-hover"
          >
            Home
          </button>
        </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;