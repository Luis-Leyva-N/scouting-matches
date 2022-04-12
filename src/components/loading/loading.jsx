import React from "react";
import { Spinner, Stack } from "react-bootstrap";

export function Loading() {
	return (
		<>
			<h1 className="text-center">Loading</h1>
			< Spinner animation="border" className="col-md-5 col-xs-6 mx-auto" style={ { width: "10rem", height: "10rem" }
			} />
		</>
	)
}

export function LoadingAlt() {
	return (
		<Stack gap={ 2 } className="col-md-3 col-xs-6 mx-auto">
			<h1 className="text-center">Loading</h1>
			< Spinner animation="border" className="col-md-5 col-xs-6 mx-auto" style={ { width: "10rem", height: "10rem" }
			} />
		</Stack>
	)
}