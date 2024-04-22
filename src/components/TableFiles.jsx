import React from "react";
import { Table } from "react-bootstrap";

export const TableFiles = ({ filesData }) => {
	return (
		<Table striped bordered>
			<thead>
				<tr>
					<th>File Name</th>
					<th>Text</th>
					<th>Number</th>
					<th>Hex</th>
				</tr>
			</thead>
			<tbody>
				{filesData.map((data, index) =>
					data.lines.map((line, lineIndex) => (
						<tr key={`${index}-${lineIndex}`}>
							{lineIndex === 0 && (
								<td rowSpan={data.lines.length}>
									<a href={`?fileName=${data.file}`}>
										{data.file}
									</a>
								</td>
							)}
							<td>{line.text}</td>
							<td>{line.number}</td>
							<td>{line.hex}</td>
						</tr>
					))
				)}
			</tbody>
		</Table>
	);
};
