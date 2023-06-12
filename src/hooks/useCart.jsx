import { useQuery } from 'react-query'
import useAuth from './useAuth';


const useCart = () => {
    const { user } = useAuth();
    const token = localStorage.getItem('access-token')
    const {data=[], isLoading, refetch} = useQuery({
        queryKey: ['select-class', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://sport-spark-server-riyad3399.vercel.app/select-class?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        }
    })
    return [data, isLoading, refetch]
};

export default useCart;