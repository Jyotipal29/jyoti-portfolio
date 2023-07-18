import ProjectItems from "./ProjectItems";
import jyotube from "../assets/video-lib.png";
import jyogram from "../assets/jyogram.png";
import jyocart from "../assets/ecomm-ss.png";
import jyonotes from "../assets/notes-ss.png";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Jyocart"
            backgroundImg={jyocart}
            projectUrl="/jyocart"
            tech={[
              "Reactjs, typescript,tailwindcss, nodejs, expressjs,mongodb",
            ]}
          />
          <ProjectItems
            title="Jyotube"
            backgroundImg={jyotube}
            projectUrl="/jyotube"
            tech={[
              "Reactjs, typescript,tailwindcss, nodejs, expressjs,mongodb",
            ]}
          />
          <ProjectItems
            title="Jyogram"
            backgroundImg={jyogram}
            projectUrl="/jyogram"
            tech={["Reactjs,css, nodejs, expressjs,mongodb"]}
          />
          <ProjectItems
            title="jyonotes"
            backgroundImg={jyonotes}
            projectUrl="/jyonotes"
            tech={["Reactjs,Nextjs,tailwindcss, nodejs, expressjs,mongodb"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
