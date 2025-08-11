import React from "react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

interface ErrorResponse {
  status: number;
  statusText: string;
}

export default function Error(): React.ReactElement {
  const error = useRouteError();

  let errorDetails: ErrorResponse | undefined;
  if (isRouteErrorResponse(error)) {
    errorDetails = {
      status: error.status,
      statusText: error.statusText,
    };
  }

  return (
    <>
      <h2>
        {errorDetails && `${errorDetails.status} `}
        Error
      </h2>

      {errorDetails && <p>{errorDetails.statusText}</p>}

      <p>
        Please return to the <Link to="/">homepage</Link>.
      </p>
    </>
  );
}
