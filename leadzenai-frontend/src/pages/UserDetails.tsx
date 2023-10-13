import UserImage from '../assets/image.jpg';
import './UserDetails.css';
import Map from '../components/Map';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function UserDetails() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    if (!id) return 'Invalid userid'
    const user = useSelector((state: any) => state.users.userList[(+id) + 1]);

    return (
        <>
            <div className='page'>
                <div className='col-1'>

                    <div className="card max-width-300">
                        <img src={UserImage} className='max-width-300' />
                        <h1>{user.name}</h1>
                        <strong>@{user.username}</strong>
                        <p className="title">{user.email}</p>
                        <p>{user.phone}</p>
                        <p><button>{user.website}</button></p>
                    </div>

                </div>
                <div className="col-2">
                    <div className="card-noshadow">
                        <p><button>Address</button></p>

                        <p className="title">{user.address.suite}, {user.address.street}</p>
                        <h3>{user.address.city}</h3>
                        <p>{user.address.zipcode}</p>
                    </div>
                    <div className="card-noshadow">
                        <p><button>Company details</button></p>
                        <h3>{user.company.name}</h3>
                        <p className="title">{user.company.catchPhrase}</p>
                        <p>{user.company.bs}</p>
                    </div>
                    {/* <Map/> */}
                </div>
            </div>

            <Map long={user.address.geo.lng} lat={user.address.geo.lat}/>
        </>
    )
}
