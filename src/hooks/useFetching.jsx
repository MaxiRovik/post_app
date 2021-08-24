import {useState} from 'react';

export const useFetching = (callback) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (e) => {
        try{
            setLoading(true);
            await callback(e)
        }
        catch (e){
            setError(e.message)
        }

        finally{
            setLoading(false)
        }
    };

return [fetching, isLoading, error]
};