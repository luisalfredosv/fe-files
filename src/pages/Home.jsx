import React from "react";

import { TableFiles } from "../components/TableFiles";
import { Loading } from "../components/Loading";

import { useFiles } from "../hooks/useFiles";

export const Home = () => {
	const { data, loading } = useFiles();

	if (loading) {
		return <Loading />;
	}

	return <>{!loading && <TableFiles filesData={data} />}</>;
};
