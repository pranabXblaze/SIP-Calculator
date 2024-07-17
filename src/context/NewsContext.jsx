import { createContext } from "react"; 

export const NewsContext = createContext({
    fetchData : {},
    fetch: () => {}
})

export default function useNews() {
    return useContext(NewsContext)
}

export const NewsProvider = ({Children}) => { 
    const api_key = '56e0a9701f0a440c99abf2f33a9110ad';
    const URL = `https://newsapi.org/v2/${endpoint}?${requestParams}&${api_key}`;
   
    return (
        <NewsContext.Provider value={{}}>                //Pass the children component as it is . It is neccssary.
        {Children}
        </NewsContext.Provider>
    )

}