import './App.css';
import SearchForm from './component/search-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionList from './component/transaction-list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailPage from './component/detail-page'

function App() {
  const [listTransaction, setListTransaction] = useState([])
  const [selectedOptions, setSelectedOptions] = useState('nama_a_z');
  const [typeSearch, setTypeSearch] = useState('')


  const getListTransaction = () => {
    axios.get('https://nextar.flip.id/frontend-test')
    .then(response => {
      if (response.status === 200) {
        setListTransaction(response.data)
      }
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  useEffect(() => {
    getListTransaction();
  }, [])

  useEffect(() => {
    let sorted = {}
    switch (selectedOptions){
      case 'nama_a_z' :
        let sortedASC = Object.entries(listTransaction).sort(([,a], [,b]) => (
          [,a][1].beneficiary_name.toLowerCase() > [,b][1].beneficiary_name.toLowerCase() ? 1 : -1
        ))
        sorted = sortedASC.reduce((r, [k, a]) => ({ ...r, [k]: a}), {})
        break;
      case 'nama_z_a' :
        let sortedDESC= Object.entries(listTransaction).sort(([,a], [,b]) => (
          [,a][1].beneficiary_name.toLowerCase() < [,b][1].beneficiary_name.toLowerCase() ? 1 : -1
        ))
        sorted = sortedDESC.reduce((r, [k, a]) => ({ ...r, [k]: a}), {})
      break;
      default:
       break;
    }
    setListTransaction(sorted)
  }, [selectedOptions])


  const handleSelectOption = (event) => {
    setSelectedOptions(event)
  }

  const handleTypeSearch = (text) => {
    setTypeSearch(text)
  }



  useEffect(() => {
    if (typeSearch.length > 0) {
    let trySearch = Object.entries(listTransaction).filter(([,val]) => 
      [,val][1].beneficiary_name.toLowerCase().includes(typeSearch) || [,val][1].beneficiary_bank.toLowerCase().includes(typeSearch) 
    )
    setListTransaction(Object.fromEntries(trySearch))

    } 
  }, [typeSearch])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="homepage">
              <h1 className="title">Daftar Transaksi</h1>
              <div className="home-greeting">
                Hallo kak !
              </div>
              <p className="text-info">Kamu telah melakukan transaksi sebesar <span className="price">Rp 5.000.000</span> sejak menggunakan Flip</p>
              <SearchForm 
                dataSource={listTransaction}
                handleSelectOption={handleSelectOption}
                handleTypeSearch={handleTypeSearch} 
                selectedOptions={selectedOptions}
              />
              <TransactionList
                dataTransaction={listTransaction}
              />
            </div>
          </Route>
          <Route path="/:detailId">
            <DetailPage dataSource={listTransaction}/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
