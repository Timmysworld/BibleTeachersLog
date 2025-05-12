import React from 'react'
import { useForm, useFieldArray} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useNavigate } from 'react-router-dom';

const TeacherLog = () => {
  const navigate = useNavigate(); 
  const schema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    bibleTeacher: z.string().min(1, "Bible Teacher is required"),
    subject: z.array(z.string().min(1, "Subject is required")),
    email: z.string().email(),
    password: z.string().min(8),
  });
  
  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors,isSubmitting} 
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      subject: [],
 
    },
  });

const saveToExcel = (data) => {
  const fileName = 'BibleTeacherLog.xlsx';

  let workbook;
  let worksheet;

  // Check if the file exists
  if (fs.existsSync(fileName)) {
    // Read the existing workbook
    const fileBuffer = fs.readFileSync(fileName);
    workbook = XLSX.read(fileBuffer, { type: 'buffer' });

    // Get the first worksheet (or create a new one if it doesn't exist)
    worksheet = workbook.Sheets['Bible Teacher Log'] || XLSX.utils.json_to_sheet([]);
  } else {
    // Create a new workbook and worksheet if the file doesn't exist
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([]);
  }

  // Convert the new data to a worksheet and append it
  const existingData = XLSX.utils.sheet_to_json(worksheet); // Read existing data
  const updatedData = [...existingData, data]; // Append new data
  worksheet = XLSX.utils.json_to_sheet(updatedData); // Convert back to a worksheet

  // Append the updated worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Bible Teacher Log');

  // Write the updated workbook back to the file
  XLSX.writeFile(workbook, fileName);
};

    const { fields, append, remove } = useFieldArray({
    control, // Required to manage the dynamic array of fields
    name: 'subjects', // Name of the array field
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      saveToExcel(data); // Save the form data to an Excel file
       reset(); // Reset the form fields
    } catch (error) {
      setError("root", {
        message: "something went wrong, please try again",
      });
    }
  };

    const handleLogout = () => {
    // Clear any user-related data (e.g., localStorage/sessionStorage)
    localStorage.clear();

    // Redirect to the login page
    navigate('/');
  };
 
  return (
    <div className="flex flex-col h-screen ">
        <nav className="p-2 bg-gray-100 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Teacher Log</h1>
          <p className="mt-1 text-gray-600">Use the form below to log your details.</p>
        </div>
        <button 
        onClick={handleLogout} // Attach the logout handler
        className="bg-error text-text rounded px-4 py-2 hover:bg-red-600">
          Logout
        </button>
        </nav>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 mt-8 mx-auto "> 
      {errors.root && <div className="text-error">{errors.root.message}</div>}
      <div className="flex space-x-3 w-full">
         <input
            {...register("First Name")} 
            name="firstName"
            type="text"
            label="Student First Name"
            placeholder="Enter your student first name"
            autoComplete="off"
          />
          {errors.firstName && (
        <div className="text-error">{errors.firstName.message}</div>
      )}
          <input
            {...register("Last Name")}
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="Enter your student last name"
            autoComplete="off"
          />
           {errors.lastName && (
        <div className="text-error">{errors.lastName.message}</div>
      )}
      </div>
        
          <input
          {...register("bibleTeacher")}
          name="bibleTeacher"
            autoComplete="off"
            type="text"
            label="Bible Teacher"
            placeholder="Enter the bible teacher's name"
          />
           {errors.bibleTeacher && (
        <div className="text-error">{errors.bibleTeacher.message}</div>
      )}
        {/* Dynamic Subject Inputs */}
        <div>
          <label className="block font-bold">Subjects</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center space-x-2">
              <input
                {...register(`subjects.${index}`)} // Register each subject input
                type="text"
                placeholder={`Enter subject ${index + 1}`}
                className="p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => remove(index)} // Remove this subject input
                className="p-2 bg-error text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append('')} // Add a new empty subject input
            className="mt-2 p-2 bg-primary text-white rounded hover:bg-hover"
          >
            Add Subject
          </button>
        </div>
        {errors.subjects && (
          <div className="text-red-500">{errors.subjects.message}</div>
        )}
      <button 
      className='bg-success hover:bg-hover rounded-sm'
      disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      </form> 
    </div>
  )
}

export default TeacherLog