import React from "react";
import { Table } from "react-bootstrap"

function BottomTable(matches) {
	console.log(matches)
	return (
		<>
			<h1>Percentages and Statistics</h1>
			<Table>
				<thead>
					<tr>
						<th>Empieza con pelota</th>
					</tr>
				</thead>
			</Table>
		</>
	)
}

export default BottomTable;