import {
  useParams,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react/cjs/react.production.min";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import { useEffect } from "react/cjs/react.development";
import LoadingSpinner from "../components/ui/LoadingSpinner";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "max", text: "good" },
//   { id: "q2", author: "max2", text: "good2" },
// ];
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

  useEffect(()=> {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (error) {
    return <p className="centered">{error}</p>
  }


  // if (!loadedQuote.text) {
  //   return <p> No Quote Found!</p>;
  // }

  if (status === 'pending' ) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
