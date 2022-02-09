import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'max', text: 'good'},
  { id: 'q2', author: 'max2', text: 'good2'},
]

const AllQuote = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuote;
