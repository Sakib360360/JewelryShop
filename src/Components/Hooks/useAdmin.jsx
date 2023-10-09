import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const useAdmin = () => {
    const {user,loading} = useContext(AuthContext)

    const {data:isAdmin,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!loading,
        queryFn:async ()=>{
            const response = await axios.get(`http://localhost:5000/admin/${user?.email}`)
            return response.data.isAdmin;
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;