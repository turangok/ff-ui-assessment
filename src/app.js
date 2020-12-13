import './app.css';
import AccountOverview from './pages/account-overview/account-overview';

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com',
      telephone: '020 3362 4208'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    }
  }


  return (
    <div className="App">
      <AccountOverview data={accountOverviewStub}/>
   
    </div>
  );
}

export default App;
