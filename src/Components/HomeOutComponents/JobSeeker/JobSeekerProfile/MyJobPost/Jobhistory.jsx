import { FaArtstation, FaRandom } from "react-icons/fa";
import MultipleLineCharts from "./MultipleLineCharts";

const Jobhistory = () => {

  const jobHistory = [
    {
      id: 1,
      company: 'Top Tech Giant A',
      position: 'Frontend Developer',
      status: 'Applied',
      date: '2024-07-10',
    },
    {
      id: 2,
      company: 'Top Tech Giant B',
      position: 'Software Developer',
      status: 'Interview Scheduled',
      date: '2024-08-20',
    },
    {
      id: 3,
      company: 'Frontend Focused Startup',
      position: 'React Developer',
      status: 'Offered',
      date: '2024-09-01',
    },
    {
      id: 4,
      company: 'E-commerce Giant',
      position: 'Full Stack Developer',
      status: 'Rejected',
      date: '2024-10-01',
    },
    // Add more job history here
  ];

  return (
    <div className="mx-10 mt-10">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 ">

        <div className="py-5 px-4 border-b w-full lg:w-1/3 h-[120px] rounded  flex justify-between items-center">

          <div>
            <p>Avg.Sessions</p>
            <p className="text-2xl font-semibold my-2">00:18</p>
          </div>

          <div className="text-gray-300 text-[20px]">
            <FaArtstation></FaArtstation>
          </div>
        </div>

        <div className="py-5 px-4 border-b w-full lg:w-1/3 h-[120px] rounded flex justify-between items-center">

          <div>
            <p>Apply Rate</p>
            <p className="text-2xl font-semibold my-2">36.45%</p>
          </div>

          <div className="text-gray-300 text-[20px]">
            <FaRandom></FaRandom>
          </div>
        </div>


        <div className="py-5 px-4 border-b w-full lg:w-1/3 h-[120px] rounded flex  justify-between items-center">

          <div>
            <p>Sessions</p>
            <p className="text-2xl font-semibold my-2">18K</p>
          </div>

          <div className="text-gray-300 text-[20px]">
            <FaArtstation></FaArtstation>
          </div>
        </div>



      </div>




      {/* create chart  */}

      <div>
        <div>
          <MultipleLineCharts></MultipleLineCharts>
        </div>
      </div>






      <div className="container mx-auto p-4 mt-7">
        <h2 className="text-xl mb-4 hover:text-[#28A856]">Job Application History</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Company</th>
                <th className="border border-gray-300 px-4 py-2">Position</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {jobHistory.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">{job.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{job.company}</td>
                  <td className="border border-gray-300 px-4 py-2">{job.position}</td>
                  <td className={`border border-gray-300 px-4 py-2 ${job.status === 'Offered' ? 'text-green-600 font-semibold' : job.status === 'Rejected' ? 'text-red-600' : ''}`}>{job.status}</td>
                  <td className="border border-gray-300 px-4 py-2">{job.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default Jobhistory;


