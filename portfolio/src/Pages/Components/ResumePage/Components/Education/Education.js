import Timeline from '../Timeline/Timeline';

const Education = () => (
    <div>
    <h3 className="resumeSub__title">Education</h3>
    <Timeline 
      items={[{
        key: 'MASTER',
        title: 'Monash University',
        year: 'Mar. 2019 -- Jun. 2021',
        address: 'Clayton, Melbourne',
        description: 'Master of Networks and Security'
      }, {
        key: 'BACHELOR',
        title: 'Zhejiang University of Finance & Economics',
        year: '2012-2016',
        address: 'Hangzhou, Zhejiang',
        description: 'BS Information and Computing Sciences'
      }]}
    />
  </div>
);

export default Education;
