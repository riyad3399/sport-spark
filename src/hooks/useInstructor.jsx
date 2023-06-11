import { useQuery } from "react-query";
import useAxiosSecure from "./axiosSecure";
import useAuth from "./useAuth";

const useInstructor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const { data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`users/instructor/${user?.email}`)
            return res.data.instructor
            
        }
    })
    return [isInstructor, isInstructorLoading];
}
export default useInstructor;