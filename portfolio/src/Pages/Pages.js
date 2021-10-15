import HomePage from './Components/HomePage/HomePage';
import ResumePage from './Components/ResumePage/ResumePage';
import './Pages.css';

const Pages = () => (
  <div className="pages">
    <HomePage />
    <ResumePage active/>
  </div>

);

export default Pages;
