import './ContactTable.css'

const DATA = [{
  key: 'age',
  title: 'Age',
  value: '27',
}, {
  key: 'Residence',
  title: 'Residence',
  value: 'China'
}, {
  key: 'address',
  title: 'Address',
  value: '3/1 Dunstan St, Clayton, VIC3168',
}, {
  key: 'email',
  title: 'Email',
  value: (
    <a href="jessieease@gmail.com">
      jessieease@gmail.com
    </a>
  ),
}, {
  key: 'phone',
  title: 'Phone',
  value: '+0487 128 866'
}];

const ContactTable = () => (
  <div>
    <table className="homepage__contact">
      <tbody>
        {DATA.map(({ key, title, value }) => (
          <tr key={key}>
            <td>{title}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

);

export default ContactTable;
