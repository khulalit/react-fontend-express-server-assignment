import { useState } from 'react'
import Details from '../UserDetails'
import User from '../../Types/UserTypes';
import './list.css'

export default function List({data}:{data: User}) {
    const [openDetails, setOpenDetails] = useState(false);
    return (
        <li className="_list" >
            <div className='_quick-info'>
                <div className='items'>
                    {data.company.name}
                </div>
                <div className='items'>
                    <label className='uppercase text-bold'>
                        Contact
                    </label>
                    <div>
                        {data.name}
                    </div>
                </div>
                <div className='items'>
                    <label className='uppercase text-bold'>
                        City
                    </label>
                    <div>
                        {data.address.city}
                    </div>
                </div>
                <div className='items'>
                    <label className='uppercase text-bold'>
                        Zipcode
                    </label>
                    <div>
                        {data.address.zipcode}
                    </div>
                </div>
                <div className='items'>
                    <button className="btn btn-rounded btn-danger" onClick={()=>setOpenDetails(!openDetails)}>
                        {!openDetails ? "View Details": "Hide Details"}
                    </button>
                </div>
            </div>
            {openDetails && <Details details={data} />}
        </li>
    )
}
