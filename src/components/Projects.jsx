
// import sgap from "../assets/sgpa.png";
import ecommrece from "../assets/ECommerceWeb.png";
import DDE from "../assets/DDE.png";
import bankingsystem from "../assets/bankingsystem.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      image: bankingsystem,
      title: "FinServe System",
      desc: "I built a web app called FinServe System using the Java Full Stack to simplify core banking operations for admins, managers, and users. Customers can easily create accounts, check balances, transfer funds, and track their transactions, improving convenience and reducing errors. On the admin and manager side, authorized staff can manage user accounts, oversee transactions, and approve or reject requests, which enhances data management and saves time for both customers and the banking team.",
      stack: [
        "Vite + React.js | Tailwind CSS",
        "Java | Spring Boot | MySQL",
        "VS Code | Postman | Eclipse IDE",
        "Render ",
      ],
      // liveLink: "https://jobportal-9amg.onrender.com/",//Add Live Link
      sourceCode: "https://github.com/Vaishnav4562/Banking-System.git", // Add Github Source Code Link
    },
    {
      id: 4,
      image: DDE, // Replace with the image for the LMS
      title: "Data Driven Valuation Of Used Vehicles Using Machine Learning",
      desc: "Developed a machine learning–based web application using Python, Flask, HTML, CSS, Bootstrap, and JavaScript to predict the resale value of used cars. The system uses a trained Scikit-learn model built with key features such as age, mileage, fuel type, and brand to ensure accurate price predictions. A responsive and user-friendly interface connects seamlessly with the model, allowing users to input details and receive real-time valuation results, delivering an interactive and efficient prediction platform.",
      stack: [
        "Vite + React.js | Tailwind CSS | Redux Toolkit | ",
        "Node.js | Express.js | MongoDB",
        "VS Code | Postman",
        "Render",
      ],
      // liveLink: "https://lms-gtai.onrender.com/", // Add Live Link
      sourceCode: "https://github.com/Vaishnav4562/Data-Driven-Valuation-of-Used-Vehicles-.git", // Add Github Source Code Link
    },
    {
      id: 2,
      image: ecommrece,
      title: "ECommerce Website",
      desc: "Developed an E-commerce Electronics web application using React.js for the frontend and Java Spring Boot for the backend to enhance the online shopping experience. Users can effortlessly explore products across categories such as mobiles, laptops, watches, and accessories, make secure purchases, and receive instant order updates. This system not only reduces manual effort and minimizes errors but also improves product and inventory management for store owners, ensuring a faster, more reliable, and user-friendly experience for both customers and businesses.",
      stack: [
        "Vite + React.js |",
        "Java | Spring Boot | MySQL",
        "VS Code | Postman",
        "Render | Versal",
      ],
      // liveLink: "https://ecommerce-platform-qomh.vercel.app/",//Add Live Link
      sourceCode: "https://github.com/nagesh5454/Ecommerce-Platform", // Add Github Source Code Link
    },
    // {
    //   id: 2,
    //   image: instaClone,
    //   title: "Instagram Clone",
    //   desc: "Built a web app with the MERN stack to enhance the social media experience. Users can now create accounts, share posts, like and comment on content, and follow other users. This fosters seamless interaction, instant content sharing, and a more engaging social media environment for users.",
    //   stack: [
    //     "Vite + React.js | Tailwind CSS | Redux Toolkit | ",
    //     "Node.js | Express.js | MongoDB",
    //     "VS Code | Postman",
    //     "Render",
    //   ],
    //   // liveLink: "https://instagram-clone-a9ip.onrender.com/",//Add Live Link
    //   sourceCode: "https://github.com/nagesh5454/Instagram_Clone", // Add Github Source Code Link
    // },

    // {
    //   id: 2,
    //   image: geminAI,
    //   title: "Gemini AI Clone ",
    //   desc: "Built a web app with the MERN stack to replicate the core functionalities of Gemini AI. Users can now interact with AI-driven tools, automate tasks, and analyze data insights in real-time. This saves time, reduces errors, and enhances decision-making for both individuals and businesses.",
    //   stack: [
    //     "Vite + React.js | Tailwind CSS | Redux Toolkit | ",
    //     "Node.js | Express.js | MongoDB",
    //     "VS Code | Postman",
    //     "Render",
    //   ],
    //   // liveLink: "",//Add Live Link
    //   sourceCode: "https://github.com/nagesh5454/Gemini-Clone", // Add Github Source Code Link
    // }
   ,
    // {
    //   id: 2,
    //   image: youtubeClone,
    //   title: "Youtube Clone",
    //   desc: "Developing a YouTube Clone using React.js and Tailwind CSS, our app offers a responsive and intuitive user interface. Leveraging React.js for dynamic content rendering and Tailwind CSS for sleek design, the clone replicates core YouTube features, providing users with a seamless video browsing and viewing experience.",
    //   stack: [
    //     "Vite + React.js | Tailwind CSS",
    //     "VS Code | Git",
    //     "Versal",
    //   ],
    //   liveLink: "https://youtubeclone-lilac.vercel.app/",//Add Live Link
    //   sourceCode: "https://github.com/nagesh5454/YouTube-Clone", // Add Github Source Code Link
    // },
    // {
    //   id: 2,
    //   image: cpu,
    //   title: "CPU Scheduling Algorithm Visualizer",
    //   desc: "Developed a web app using the MERN stack to visualize CPU scheduling algorithms. Users can seamlessly select and simulate different algorithms such as FCFS, SJF, and Round Robin, viewing detailed Gantt charts and turnaround times for processes. This approach enhances understanding by providing real-time feedback, minimizing errors in interpretation, and offering a more interactive learning experience. ",
    //   stack: [
    //     "HTML |  CSS | Javascript | Algorithms| BootStrap",
    //     " FCFS, SJF, RRS, LJF, PSA, LRTF, SRFT",
    //     "VS Code",
    //     "Versal",
    //   ],
    //   // liveLink: "https://cpuschedulingalgorithmvisualiser.vercel.app/",//Add Live Link
    //   sourceCode: "https://github.com/nagesh5454/CPU-SCHEDULING-ALGORITHM-VISUALISER", // Add Github Source Code Link
    // }
  ];

  return (
    <div id="Projects" className="py-10 bg-gray-50">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">Projects</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 px-5 mt-5 place-items-center lg:place-items-stretch">
        {projects.map(({ id, image, title, desc, stack,  sourceCode }) => (
          <div
            key={id}
            className="max-w-md flex flex-col justify-between mx-auto p-5 border rounded-md shadow-md"
          >
            <div>
              <img className="rounded-md border" src={image} alt={title} />
              <h2 className="text-2xl font-semibold text-center my-3">{title}</h2>
              <p className="text-justify my-3">{desc}</p>
            </div>
            <div className="text-lg font-semibold my-3">Tech Stack:</div>
            <ul className="my-3 text-lg">
              {stack.map((tech, index) => (
                <li key={index} className="flex items-center">
                  🚀 {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 text-sm flex-col lg:flex-row text-center justify-between my-3">
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 border border-green-200 text-green-700 hover:bg-green-200 px-4 py-2 rounded-sm"
                href={liveLink}
              >
                Live Deployment
              </a> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 border border-blue-200 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-sm"
                href={sourceCode}
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
