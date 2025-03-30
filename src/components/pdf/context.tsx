"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

interface PdfContextType {
	file: File | null;
	currentPage: number;
	totalPages: number;
	dimensions: {
		width: number;
		height: number;
	};
	setCurrentPage: (page: number) => void;
	setTotalPages: (total: number) => void;
	setDimensions: (dimensions: { width: number; height: number }) => void;
	setFile: (file: File) => void;
}

const PdfContext = createContext<PdfContextType | undefined>(undefined);

interface PdfProviderProps {
	children: ReactNode;
}

export function PdfProvider({ children }: PdfProviderProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const [file, setFile] = useState<File | null>(null);

	const value = {
		file,
		currentPage,
		totalPages,
		dimensions,
		setCurrentPage,
		setTotalPages,
		setDimensions,
		setFile,
	};

	return <PdfContext.Provider value={value}>{children}</PdfContext.Provider>;
}

export function usePdf() {
	const context = useContext(PdfContext);
	if (context === undefined) {
		throw new Error("usePdf must be used within a PdfProvider");
	}
	return context;
}
