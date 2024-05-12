import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id= "error-page">
            <h1>SlowDown</h1>
            <p>Something is Wrong with the system</p>
            <p>
                <i>{error.statusText || error.message} </i>
            </p>
        </div>
    );
}