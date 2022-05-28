import Experience from "./Experience";
import { H1 } from "../../Common/CommonComp";

const WorkExperience = (props) => {
  const workList = [
    {
      time: 4,
      year: "2014 - 2017",
      position: "Sr. Software Engineer",
      oraganisation: "UST Global",
      description:
        "Healthcare Industry, Leading an agile team along with day to day dev work,Leading scrum calls and being part of design & implementation phase,Web applications based on React JS, Scala,HIPAA compliant development efforts,AWS developer",
    },
    {
      time: 3,
      year: "2017 - 2017",
      position: "Technology Analyst",
      oraganisation: "Infosys Ltd.",
      description:
        "Healthcare Industry, Leading an agile team along with day to day dev work,Leading scrum calls and being part of design & implementation phase,Web applications based on React JS, Scala,HIPAA compliant development efforts,AWS developer",
    },
    {
      time: 2,
      year: "2018 - 2021",
      position: "Application Development Specialist",
      oraganisation: "Accenture Solutions Pvt Ltd.",
      description:
        "Healthcare Industry, Leading an agile team along with day to day dev work,Leading scrum calls and being part of design & implementation phase,Web applications based on React JS, Scala,HIPAA compliant development efforts,AWS developer",
    },
    {
      time: 1,
      year: "2021 - Present",
      position: "Software Engineering Lead",
      oraganisation: "Optum Global Solutions",
      description:
        "Healthcare Industry, Leading an agile team along with day to day dev work,Leading scrum calls and being part of design & implementation phase,Web applications based on React JS, Scala,HIPAA compliant development efforts,AWS developer",
    },
  ];

  return (
    <div>
      <H1>WORK EXPERIENCE</H1>
      {workList.map((work) => {
        return <Experience key={work.time} experience={work} />;
      })}
    </div>
  );
};

export default WorkExperience;
