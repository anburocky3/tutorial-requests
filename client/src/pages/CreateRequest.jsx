import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const requestSchema = z.object({
  technology: z.string().min(1),
  title: z.string().min(10).max(180),
  desc: z.string().min(50).max(2000),
});

const CreateRequest = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(requestSchema),
  });

  const sendToServer = async (data) => {
    // All data will be validated!
    const response = await fetch(
      "https://tutorial-requests.onrender.com/create",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.status === 200) {
      alert("Your request has been posted! Thanks!");
      navigate("/");
    } else {
      alert("There is some problem in sending files!");
    }
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h4 className="font-semibold text-xl">Create your request</h4>
      <form
        action=""
        className="my-5 space-y-4"
        onSubmit={handleSubmit(sendToServer)}
      >
        <div>
          <label htmlFor="technology" className="block text-gray-600">
            Technology
          </label>
          <select
            name="technology"
            id="technology"
            className="px-4 py-2 rounded bg-gray-100 w-full mt-2 outline-none"
            {...register("technology")}
          >
            <option value="">-- Select Technology --</option>
            <option value="rust">Rust</option>
            <option value="golang">GoLang</option>
            <option value="elixir">Elixir</option>
            <option value="python">Python</option>
            <option value="ruby">Ruby</option>
            <option value="perl">Perl</option>
            <option value="typescript">Typescript</option>
            <option value="java">Java</option>
            <option value="swift">Swift</option>
            <option value="kotlin">Kotlin</option>
          </select>
          {errors.technology && (
            <small className="text-red-500">{errors.technology.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="title" className="block text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            className="px-4 py-2 rounded bg-gray-100 w-full mt-2 outline-none"
            {...register("title")}
          />
          {errors.title && (
            <small className="text-red-500">{errors.title.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="desc" className="block text-gray-600">
            Description
          </label>
          <textarea
            type="text"
            id="desc"
            placeholder="Enter description"
            className="px-4 py-2 rounded bg-gray-100 w-full mt-2 outline-none"
            {...register("desc")}
          ></textarea>
          {errors.desc && (
            <small className="text-red-500">{errors.desc.message}</small>
          )}
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded">
            Submit your request
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRequest;
