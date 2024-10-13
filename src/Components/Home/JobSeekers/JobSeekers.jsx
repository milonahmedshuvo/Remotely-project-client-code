import SingleJobSeekers from "./SingleJobSeekers";

const JobSeekers = () => {
  const employers = [
    {
      image:
        "https://static.remotehub.com/smp/assets/images/home/hints/professional_network.svg",
      title: "Expand Your Professional Network",
      dres: "Build your professional profile, find connections, and new job opportunities.",
    },
    {
      image:
        "https://static.remotehub.com/smp/assets/images/home/hints/post_services_portfolios.svg",
      title: "Post Services and Portfolios",
      dres: "Showcase your creativity, experience, skills, and past projects.",
    },

    {
      image:
        "https://static.remotehub.com/smp/assets/images/home/hints/dream_jobs.svg",
      title: "Apply for Your Dream Jobs",
      dres: "Get recommendations for the jobs that match your interests and skills",
    },

    {
      image:
        "https://static.remotehub.com/smp/assets/images/home/hints/chat_with_employers.svg",
      title: "Chat with Employers and Get Hired",
      dres: "Chat to discuss details, and start employment, contract, or a freelance project.",
    },
  ];

  return (
    <div className="pb-20  my-20">
      <div className=" w-full md:w-1/2 lg:w-1/3 mx-auto pb-20 pt-16">
        <p className="text-center text-3xl mb-5 font-bold ">For Job Seekers</p>
        <p className="text-center text-[#303952cc] text-lg mb-2">
          Expand your network and portfolio, receive work recommendations, and
          get hired for your dream job.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20 mt-20">
        {employers.map((employer, i) => (
          <SingleJobSeekers key={i} employer={employer}></SingleJobSeekers>
        ))}
      </div>
    </div>
  );
};

export default JobSeekers;
