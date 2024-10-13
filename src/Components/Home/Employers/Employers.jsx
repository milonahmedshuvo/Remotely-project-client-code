import SingleEmployers from "./SingleEmployers";

const Employers = () => {
  const employers = [
    {
      image:
        "https://static.remotehub.com/smp/assets/images/home/hints/post_jobs.svg",
      title: "Post Jobs For Free",
      dres: "Find professionals from around the world and across all skills.",
    },
    {
      image:
        "https://static.remotehub.com/smp/assets/images/home/hints/Services_Portfolios.svg",
      title: "Browse Services and Portfolios",
      dres: "Choose people by their creativity and previous projects, not just resumes.",
    },

    {
      image:
        "https://static.remotehub.com/smp/assets/images/home/hints/best_matches.svg",
      title: "Get Best Matches for Your Jobs",
      dres: "Get the best candidates on top of your list of job applications.",
    },

    {
      image:
        "https://static.remotehub.com/smp/assets/images/home/hints/power_community.svg",
      title: "Use the Power of Community",
      dres: "Connect and chat with other companies and remote professionals.",
    },
  ];




  return (
    <div className="pb-20  bg-[#F0F6FA]  my-20">
      <div className=" w-full md:w-1/2 lg:w-1/3 mx-auto pb-20 pt-16">
        <p className="text-center text-3xl mb-5 font-bold ">For Employers</p>
        <p className="text-center text-[#303952cc] text-lg">
          Find the best talent for your full-time, part-time, contract,
          internship, or freelance jobs in any location.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20 mt-20 ">
        {employers.map((employer, i) => (
          <SingleEmployers key={i} employer={employer}></SingleEmployers>
        ))}
      </div>
    </div>
  );
};

export default Employers;
