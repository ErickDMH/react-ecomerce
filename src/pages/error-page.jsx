import { useRouteError } from "react-router-dom"
import building from '../assets/building.gif'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img src={building} alt="React logo" />
      {error && <p>
        <i>{error.statusText || error.message}</i>
      </p>}
    </div>
  );
}