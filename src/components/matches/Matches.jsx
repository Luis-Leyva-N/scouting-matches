import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getMatches } from "../../api/apiMatchesCalls";
import { LoadingAlt } from "../loading/loading";

function Matches() {
	const [match, setMatch] = useState();

	useEffect(() => {
		async function getData() {
			const data = await getMatches();

			data.sort((a, b) => a - b);
			setMatch(data);
		}

		if (match === undefined) {
			getData();
		}
	}, [match]);

	if (match === undefined) {
		return <LoadingAlt />
	} else {
		return (
			<div>
				<h1>Matches</h1>
				<div>
					{ match.map(match => {
						return (
							<Link key={ match } to={ "qm-" + match } >{ match }</Link>
						)
					}) }
				</div>
				<Outlet />
			</div>
		);
	}
}

export default Matches;