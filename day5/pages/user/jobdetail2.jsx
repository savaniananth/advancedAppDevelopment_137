import { useParams } from 'react-router-dom';
import ResponsiveAppBar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import '../../assets/css/jobdetail.css'

const JobDetails = () => {
  const { id } = useParams(); // Get the job ID from URL params

  // Sample job details for job 2
  const job = {
    id: parseInt(id),
    title: "Data Scientist",
    company: "Amazon",
    description: "As a Data Scientist at Amazon, you will be responsible for analyzing large datasets, developing machine learning models, and deriving actionable insights to drive business decisions. You will collaborate with cross-functional teams to identify business opportunities and implement data-driven solutions. This role offers an exciting opportunity to work on cutting-edge projects in a fast-paced environment.",
    requirements: "1. Master's degree or PhD in Computer Science, Statistics, Mathematics, or related field.\n2. Proficiency in programming languages such as Python, R, or Scala.\n3. Strong experience with data analysis, statistical modeling, and machine learning techniques.\n4. Excellent problem-solving skills and attention to detail.\n5. Effective communication and collaboration skills.",
    salary: "Salary range: $90,000 - $150,000 per year",
    location: "Seattle, WA, USA",
    experience: "5+ years",
    image: "https://tse2.mm.bing.net/th?id=OIP.JfJRL4GepTdGhE8edI7ohQHaHa&pid=Api&P=0&h=180"
  };

  // If job is not found, display a message
  if (!job) {
    return <div>Job not found!</div>;
  }

  return (
    <div>
      <ResponsiveAppBar />
      <div className="job-details">
        <div className="job-details-left">
          <img src={job.image} alt={job.title} className="job-image" />
          <h2>{job.title}</h2>
          <p><strong>Employer:</strong> {job.company}</p>
        </div>
        <div className="job-details-right">
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Requirements:</strong> {job.requirements}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
        </div>
      </div>
      <div className="apply-button-container">
        <button className="apply-button">Apply Now</button>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default JobDetails;
