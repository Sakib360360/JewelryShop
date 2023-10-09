import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './Providers/AuthProvider'
import Routes from './Components/Routes'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider><QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={Routes} />
        </div>
    </QueryClientProvider></AuthProvider>
)
