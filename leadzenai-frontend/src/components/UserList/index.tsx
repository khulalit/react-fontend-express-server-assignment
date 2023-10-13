import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserImage from '../../assets/image.jpg';
import LoadingImage from '../../assets/bars.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setUserList } from '../../store/userSlice';
import { Link } from 'react-router-dom';
import User from '../../types/UserType';
import './styles.css';

export default function UserList({search, option} : {search: string, option: string}) {
    const [status, setStatus] = useState('loading');
    const rows = useSelector((state: any) => state.users.userList)
    const dispatch = useDispatch();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users');
                const users = await response.json();
                // setRows(users);
                dispatch(setUserList(users));
                setStatus('done');
            } catch (error: any) {
                console.log(error.message)
                setStatus('error');
            }
        }

        getUsers();
    }, [])
    return (
        <>
            
        </>
    )
}
