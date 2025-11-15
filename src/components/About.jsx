import dbatu from "../assets/dbatu1.jpg"
import mern from "../assets/Techstack.png";

const About = () => {
  return (
    <div id="About" className="py-10 bg-yellow-50">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">
          About <span className="text-yellow-500">Me</span>
        </h1>
        <div className="flex flex-col md:flex-row mt-6 gap-6 px-4">
          <div className="max-w-xl bg-white mx-auto p-6 border rounded-md shadow-lg">
            <div>
              <img className="rounded-md border" src={dbatu} alt="bit" />
              <h1 className="text-2xl font-semibold my-3">DBATU</h1>
              <p className="text-left text-lg my-3">
              BTech In Information Techonloogy at Dr. Babasaheb Ambedkar Technological 
              Univarsity , Lonere  Raigad
              </p>
            </div>
            <div className="text-lg font-semibold text-left my-3">
              Things i do:
            </div>
            <ul className="text-left my-3 text-lg">
              <li>📚 Academic Studies</li>
              <li>🎓 Skill Development</li>
              <li>🏆 Fullstack Software Development</li>
              <li>🚀 Data Structure and Algorithm in Java</li>
              <li>🤝 Networking</li>
              
      
              
            </ul>
          </div>
          <div className="max-w-xl bg-white mx-auto p-6 border rounded-md shadow-lg">
            <div>
              <img className="rounded-md border" src={mern} alt="mern" />
              <h1 className="text-2xl font-semibold my-3">
                Full Stack Developer
              </h1>
              <p className="text-left text-lg my-3">
                Designing robust web applications with Java and Spring Boot for flawless functionality 
                and seamless user experience.
              </p>
            </div>
            <div className="text-lg font-semibold text-left my-3">
              Tech Stack:
            </div>
            <ul className="text-left my-3 text-lg">
              <li>🚀 Java | Spring Boot | Spring MVC | Spring Security</li>
              <li>🌐 HTML5 | CSS3 | JavaScript | React.js </li>
              <li>🗄️ SQL | MySQL | PostgreSQL | Hibernate | JPA</li>
              <li>⚙️ Build Tools: Maven | Gradle</li>
              <li>🗳️ Git | GitHub</li>
              <li>🔧 VS Code | IntelliJ IDEA | Eclipse | Postman</li>
              
              
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
