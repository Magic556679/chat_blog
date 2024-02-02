import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error: unknown = useRouteError()

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as Error).message ||
            (error as { statusText?: string }).statusText}
        </i>
      </p>
    </>
  )
}

export default NotFound
