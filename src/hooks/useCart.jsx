import { useQuery } from 'react-query'
import useAuth from './useAuth';


const useCart = () => {
    const { user } = useAuth();
    const {data=[], isLoading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            return res.json()
        }
    })
    return [data, isLoading, refetch]
};

export default useCart;