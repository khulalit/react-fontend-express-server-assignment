/* eslint-disable */
import { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../../store/dataSlice";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store";
import User from "../../Types/UserTypes";
import List from "../../Components/List";
import Header from "../../Components/Header";
import './home.css';



function Home() {
  const [pageNo, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const { data, page, totalPages } = useSelector((state: any) => state.data.data);
  const status = useSelector((state: RootState) => state.data.status);

  function filterData(row: User) {
    switch (searchBy) {
      case 'name':
        return row.company.name.toLowerCase().includes(query)
      case 'contactPerson':
        return row.name.toLowerCase().includes(query)
      case 'city':
        return row.address.city.toLowerCase().includes(query)
      case 'zipcode':
        return row.address.zipcode.toLowerCase().includes(query)
      default:
        return row
    }
  }

  useEffect(() => {
    if (status === 'idle')
      dispatch(fetchData({ page: 1 }));
  }, [])

  useEffect(() => {
    dispatch(fetchData({ page: pageNo }));
  }, [pageNo])

  return (
    <div className="app">
      <Header setQuery={setQuery} setSearchBy={setSearchBy} />
      <div className="main" data-testid='main'>
        {status === 'succeeded' && data.filter(filterData).map((user: User) => <Fragment key={user.id}>
          <List data={user} />
        </Fragment>)}

      </div>
      <div className="pagination">
        <button className="btn" onClick={() => {
          if (pageNo > 1) setPage(prev => prev - 1)
        }}>{'<'}
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((e: number) => <button key={e} onClick={() => {
          setPage(e)
        }} className={`btn ${+e === +page && 'btn-danger'}`}>{e}</button>)}

        <button className="btn" onClick={() => {
          if (pageNo < totalPages) setPage(prev => prev + 1);
        }}>{'>'}</button>
      </div>
    </div>
  )
}

export default Home;
