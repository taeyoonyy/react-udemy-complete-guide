import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import useHttp from '../components/hooks/use-http';
import { getAllQuotes } from '../components/lib/api';
import { useEffect } from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';



const AllQuote = () => {
  const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);

  useEffect(()=> {
    sendRequest();
  }, [sendRequest])

  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <p className='centered focused'>{error}</p>
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0 )) {
    return <NoQuotesFound />
  }


  return <QuoteList quotes={loadedQuotes}/>
};

export default AllQuote;
