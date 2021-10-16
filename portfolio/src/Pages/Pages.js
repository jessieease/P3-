import HomePage from './Components/HomePage/HomePage';
import ResumePage from './Components/ResumePage/ResumePage';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import { PAGE } from '../constants'
import './Pages.css';

const Pages = ({
  currentPage
}) => (
  <div className="pages">
    <HomePage active={ currentPage === PAGE.HOME } />
    <ResumePage active={ currentPage === PAGE.RESUME } />
    <ServicesPage active={ currentPage === PAGE.SERVICE }/>
  </div>

);

export default Pages;
