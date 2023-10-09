import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';


const useClient = () => {
    const {user,loading} = useContext(AuthContext)

    const {data:isClient,isLoading:isClientLoading} = useQuery({
        queryKey:['isClient',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const response = await axios.get(`http://localhost:5000/client/${user?.email}`)
            return response.data.isClient;
        }
    })
    return [isClient,isClientLoading]
};

export default useClient;