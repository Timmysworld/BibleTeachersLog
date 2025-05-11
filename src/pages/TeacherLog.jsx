import React from 'react'
import { useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

const TeacherLog = () => {
  const schema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    bibleTeacher: z.string().min(1, "Bible Teacher is required"),
    email: z.string().email(),
    password: z.string().min(8),
  });
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors,isSubmitting} 
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "something went wrong, please try again",
      });
    }
  };
 
  return (
    <div>
      <nav className="">
        <h1 className="text-2xl font-bold text-gray-800">Teacher Log</h1>
        <p className="mt-4 text-gray-600">
          Use the form below to log your details.
        </p>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}> 
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
         <input
            {...register("First Name")} 
            type="text"
            label="Student First Name"
            placeholder="Enter your student first name"
          />
          {errors.firstName && (
        <div className="text-red-500">{errors.firstName.message}</div>
      )}
          <input
            {...register("Last Name")}
            type="text"
            label="Last Name"
            placeholder="Enter your student last name"
          />
           {errors.lastName && (
        <div className="text-red-500">{errors.lastName.message}</div>
      )}
          <input
          {...register("bibleTeacher")}
            type="text"
            label="Bible Teacher"
            placeholder="Enter the bible teacher's name"
          />
           {errors.bibleTeacher && (
        <div className="text-red-500">{errors.bibleTeacher.message}</div>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      </form> 
    </div>
  )
}

export default TeacherLog