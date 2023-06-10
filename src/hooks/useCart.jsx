import { useQuery } from 'react-query'
import useAuth from './useAuth';


const useCart = () => {
    const { user } = useAuth();
    const token = localStorage.getItem('access-token')
    const {data=[], isLoading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/select-class?email=${user?.email}`, {
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