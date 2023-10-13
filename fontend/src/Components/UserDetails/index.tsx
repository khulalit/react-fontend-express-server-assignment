import React from 'react';
import './details.css';
import User from '../../Types/UserTypes';


export default function Details({details}: {details: User}) {
    return (
        <div className='_details' data-testid="details">
            <h3>
                Discription
            </h3>
            <p>
                {details.company.catchPhrase}
            </p>
            <div className='_extra-details'>
                <div className='col-1'>
                    <h3>
                        Contact Person
                    </h3>
                    <p>{details.name}</p>
                    <h3>
                        Email
                    </h3>
                    <p>{details.email}</p>
                    <h3>
                        Phone
                    </h3>
                    <p>{details.phone}</p>
                    <h3>
                        Website
                    </h3>
                    <p>{details.website}</p>
                </div>
                <div className='col-2'>
                    <h3>
                        Address
                    </h3>
                    <p>{details.address.suite}, {details.address.street}, {details.address.city} - {details.address.zipcode}</p>
                    <h3>
                        City
                    </h3>
                    <p>{details.address.city}</p>
                    <h3>
                        State
                    </h3>
                    <p>{details.address.zipcode}</p>
                    <h3>
                        Website
                    </h3>
                    <p>{details.username}</p>
                </div>
            </div>
        </div>
    )
}
