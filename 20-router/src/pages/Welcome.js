import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The welcom page</h1>
      <Route path="/welcome/new-user">
        <p>Wellcome new user</p>
      </Route>
    </section>

  )
}

export default Welcome;