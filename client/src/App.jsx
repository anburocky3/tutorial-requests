import SuggestionList from "./components/SuggestionList";

const data = [
  {
    _id: "65d9f154c5c7468173670aa5",
    title: "Absolute Python Tutorial for beginners",
    desc: "Please upload the tutorials",
    created_at: "2024-02-24T13:38:28.491Z",
    __v: 0,
  },
  {
    _id: "65d9f5915b3fd9edc7a2c07c",
    technology: "php",
    title: "PHP with React",
    desc: "Create a application with reactjs and backend with php tech. Please create it!",
    created_at: "2024-02-24T13:56:33.918Z",
    __v: 0,
  },
  {
    _id: "65d9feebd39e0907cb9b1ae9",
    technology: "golang",
    title: "GoLang Basic",
    desc: "GoLang is my next backend for my future application, so please make a tutorial on that.",
    created_at: "2024-02-24T14:36:27.009Z",
    __v: 0,
  },
];

const App = () => {
  return (
    <div className="bg-white p-5 rounded shadow">
      <div>
        <h4 className="font-semibold text-xl">
          Requested tutorials around the world
        </h4>
        <p className="text-sm text-gray-600 mt-1">
          People have requested the following tutorials.
        </p>
      </div>
      {/* List all request here */}
      <section className="my-5 space-y-4">
        {data.map((list) => (
          <SuggestionList
            key={list}
            technology={list.technology}
            title={list.title}
            desc={list.desc}
            created_at={list.created_at}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
