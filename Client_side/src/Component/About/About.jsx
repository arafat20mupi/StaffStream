import { Link } from "react-router-dom";
import about from "../../assets/about.jpg";
import hr from "../../assets/abouthr.png";
const About = () => {
  return (
    <section className="my-32 lg:px-0 px-5 container mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="lg:text-xl text-lg max-w-[800px] mt-3 mx-auto">
          Empower your workforce and optimize resource allocation with
          StaffStream, the all-in one web application designed to revolutionize
          employee asset management.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-6 justify-center items-center">
        <div>
          <img className="rounded-lg" src={about} alt="" />
        </div>
        <div>
          <h3 className="text-3xl mb-2 font-bold mt-5 border-b-2 w-fit border-black pb-2">
            Here's what StaffStream can do for your business:
          </h3>
          <ul className="list-disc text-lg font-normal p-5 space-y-2">
            <li className="text-justify">
              <span className="font-semibold">Effortless Asset Tracking:</span>{" "}
              Manage both returnable (laptops, phones, furniture) and
              non-returnable (office supplies) assets with ease. Track their
              status, and assigned users in real-time.
            </li>
            <li className="text-justify">
              <span className="font-semibold">Simplified HR Management:</span>{" "}
              Streamline the onboarding process by assigning essential equipment
              and supplies to new hires instantly. Automate check-in/out
              procedures and eliminate time-consuming manual spreadsheets.
            </li>
            <li className="text-justify">
              <span className="font-semibold">Enhanced Accountability: </span>
              Ensure employees have the resources they need while promoting
              responsible asset usage. Track individual accountability and
              identify areas for optimization.
            </li>
            <li className="text-justify">
              <span className="font-semibold">Data-Driven Decisions:</span>
              Generate comprehensive reports to identify trends, optimize
              resource allocation, and make informed budgeting decisions.
            </li>
            <li className="text-justify">
              <span className="font-semibold">Scalable and Secure: </span>
              StaffStream is a cloud-based solution that adapts to your business
              needs. Enjoy robust security measures to safeguard your company's
              asset data.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="h-[600px] w-full mt-10 flex items-center"
        style={{
          background: `url(${hr})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[900px] lg:ml-20">
          <h3 className="text-3xl mb-2 font-bold mt-5 border-b-2 w-fit border-black pb-2">
            Benefits for HR Managers:
          </h3>
          <ul className="list-disc text-lg font-normal p-5 space-y-2">
            <li className="text-justify font-bold">
              Save valuable time with automated processes.
            </li>
            <li className="text-justify font-bold">
              Increase employee accountability and reduce asset loss.
            </li>
            <li className="text-justify font-bold">
              Gain valuable insights for strategic resource management.
            </li>
            <li className="text-justify font-bold">
              Focus on HR initiatives that drive business growth.
            </li>
            <li className="text-justify font-bold">
              Empower your team with a user-friendly and accessible platform.
            </li>
          </ul>
          <p className="text-xl font-bold">
            Ready to take control of your employee asset management?
          </p>
          <Link>
            <button className="bg-violet-500 py-2 px-7 text-white text-xl font-medium mt-4">
            See Pricing
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
