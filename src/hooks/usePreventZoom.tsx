'use client'

import { type KeyboardEvent, useEffect } from "react";

function usePreventZoom(scrollCheck = true, keyboardCheck = true) {
	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (
				keyboardCheck &&
				e.ctrlKey &&
				(String(e.keyCode) === "61" ||
					String(e.keyCode) === "107" ||
					String(e.keyCode) === "173" ||
					String(e.keyCode) === "109" ||
					String(e.keyCode) === "187" ||
					String(e.keyCode) === "189")
			) {
				e.preventDefault();
			}
		};

		const handleWheel = (e: any) => {
			if (scrollCheck && e.ctrlKey) {
				e.preventDefault();
			}
		};

		document.addEventListener("keydown", handleKeydown as any);
		document.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			document.removeEventListener("keydown", handleKeydown as any);
			document.removeEventListener("wheel", handleWheel);
		};
	}, [scrollCheck, keyboardCheck]);
}

export default usePreventZoom;
