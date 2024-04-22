import React from "react";

import { TableFiles } from "../components/TableFiles";
import { useFiles } from "../hooks/useFiles";

export const Home = () => {
	const { data, loading } = useFiles();

	if (loading) <>Cargando, espere por favor..</>;
	return <>{!loading && <TableFiles filesData={data} />}</>;
};
