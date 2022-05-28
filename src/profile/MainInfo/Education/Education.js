import { H1 } from "../../Common/CommonComp";
import Experience from "../WorkExperience/Experience";

const Education = (props) => {
  const education = {
    time: 1,
    year: "2009 - 2013",
    position: "BTech - Electronics and Communication Engineering",
    oraganisation: "Kerala University",
    description:
      "Healthcare Industry, Leading an agile team along with day to day dev work,Leading scrum calls and being part of design & implementation phase,Web applications based on React JS, Scala,HIPAA compliant development efforts,AWS developer",
  };
  return (
    <div>
      <H1>EDUCATION</H1>
      <Experience experience={education} />
    </div>
  );
};

export default Education;
