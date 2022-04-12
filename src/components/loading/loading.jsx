import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
	return (
		<>
			<h1 className="text-center">Loading</h1>
			< Spinner animation="border" className="col-md-5 col-xs-6 mx-auto" style={ { width: "10rem", height: "10rem" }
			} />
		</>
	)
}

export default Loading;