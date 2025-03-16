import { useState, useCallback, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export const PRODUCTS = [
	{
		id: "1",
		title: "Bảo Hiểm Du Lịch Quốc Tế",
		category: "BẢO HIỂM TAI NẠN",
		description:
			"An tâm trên mọi hành trình với sự bảo vệ toàn diện từ tai nạn, chi phí y tế đến mất hành lý hay hủy chuyến bay, mang đến cho bạn chuyến đi trọn vẹn.",
		image: "/product-1-banner.jpeg",
		status: "available" as const,
		buttonText: "TÌM HIỂU THÊM",
		tag: "BẢO HIỂM TAI NẠN",
	},
	{
		id: "2",
		title: "Bảo Hiểm Sức Khỏe Toàn Diện",
		category: "BẢO HIỂM TAI NẠN",
		description:
			"Tâm khiến bảo vệ bạn trước những rủi ro do tai nạn, ốm đau, bệnh tật, thai sản... Hỗ trợ viện phí và phẫu thuật, an tâm trước mọi biến cố không lường trước được.",
		image: "/product-2-banner.jpeg",
		status: "coming" as const,
		buttonText: "TÌM HIỂU THÊM",
		tag: "BẢO HIỂM TAI NẠN",
	},
	{
		id: "3",
		title: "Bảo Hiểm Sức Khỏe Gia Đình",
		category: "BẢO HIỂM TAI NẠN",
		description:
			"Bảo vệ tài chính cho gia đình trước những sự kiện không mong muốn, từ thương tật, ốm đau đến thai sản, giữ trọn nụ cười cho những người thân yêu.",
		image: "/product-3-banner.jpeg",
		status: "coming" as const,
		buttonText: "TÌM HIỂU THÊM",
		tag: "BẢO HIỂM TAI NẠN",
	},
];

export const AGE_OPTIONS = [
	{ id: "1", label: "Dưới 12 Tháng Tuổi" },
	{ id: "2", label: "Từ 12 Tháng - Dưới 06 Tuổi" },
	{ id: "3", label: "Từ 06 Tuổi - Dưới 18 Tuổi" },
	{ id: "4", label: "Từ 18 Đến 50 Tuổi" },
	{ id: "5", label: "Từ 50 Đến 65 Tuổi" },
	{ id: "6", label: "Trên 65 Tuổi" },
];

export const FEE_OPTIONS = [
	{ id: "1", label: "Dưới 1 Triệu Đồng" },
	{ id: "2", label: "Từ 1 - 3 Triệu Đồng" },
	{ id: "3", label: "Từ 3 - 5 Triệu Đồng" },
	{ id: "4", label: "Từ 5 - 7 Triệu Đồng" },
	{ id: "5", label: "Từ 7 - 9 Triệu Đồng" },
	{ id: "6", label: "Trên 9 Triệu Đồng" },
];

export const BENEFIT_OPTIONS = [
	{ id: "1", label: "Điều Trị Ngoại Trú" },
	{ id: "2", label: "Mất/ Giảm Thu Nhập Trong Thời Gian Điều Trị" },
	{ id: "3", label: "Nằm Viện Tại Bệnh Viện Tây Y" },
	{ id: "4", label: "Phẫu Thuật Do Ốm Đau, Bệnh Tật" },
	{ id: "5", label: "Thương Tật Thân Thể Tạm Thời Do Tai Nạn" },
	{ id: "6", label: "Thương Tật Thân Thể Vĩnh Viễn Do Tai Nạn" },
	{ id: "7", label: "Trường Hợp Tử Vong" },
];

export const INSURANCE_GROUP_OPTIONS = [
	{
		id: "1",
		label: "Bảo Hiểm Con Người",
		status: "Đang Cập Nhật",
	},
];

type SearchState = {
	age: string[] | null;
	premium: string[] | null;
	benefit: string[] | null;
	keyword: string | null;
	type: string[] | null;
};

type SearchValue<T extends keyof SearchState> = SearchState[T];

const removeVietnameseTones = (str: string): string => {
	let lowerStr = str.toLowerCase();
	lowerStr = lowerStr.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	lowerStr = lowerStr.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	lowerStr = lowerStr.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	lowerStr = lowerStr.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	lowerStr = lowerStr.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	lowerStr = lowerStr.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	lowerStr = lowerStr.replace(/đ/g, "d");
	lowerStr = lowerStr.replace(/[^a-zA-Z0-9 ]/g, "");
	lowerStr = lowerStr.replace(/\s+/g, " ").trim();

	return lowerStr;
};

const isInternationalTravelInsurance = (keyword: string): boolean => {
	const normalizedKeyword = removeVietnameseTones(keyword);
	const targetPhrase = "bao hiem du lich quoc te";

	if (normalizedKeyword === targetPhrase) return true;

	const keywordWords = normalizedKeyword.split(" ");
	const targetWords = targetPhrase.split(" ");

	return targetWords.every((word) => keywordWords.includes(word));
};

type InsuranceProduct = {
	id: string;
	name: string;
	description: string;
};

export const useSearch = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [searchState, setSearchState] = useState<SearchState>({
		age: searchParams.get("age")?.split(",") || null,
		premium: searchParams.get("premium")?.split(",") || null,
		benefit: searchParams.get("benefit")?.split(",") || null,
		keyword: searchParams.get("keyword") || null,
		type: searchParams.get("type")?.split(",") || null,
	});

	const hasSearch = !!searchState.age || !!searchState.premium || !!searchState.benefit || !!searchState.type;

	const updateUrl = useCallback(
		(newParams: URLSearchParams) => {
			const search = newParams.toString();
			const query = search ? `?${search}` : "";
			router.push(`${window.location.pathname}${query}`, { scroll: false });
		},
		[router],
	);

	const debouncedUpdateKeyword = useCallback(
		(keyword: string | null) => {
			const newParams = createNewSearchParams(searchParams);
			if (keyword) {
				newParams.set("keyword", keyword);
			} else {
				newParams.delete("keyword");
			}
			updateUrl(newParams);
		},
		[searchParams, updateUrl],
	);

	const updateUrlParams = useCallback(
		<T extends keyof SearchState>(key: T, value: SearchValue<T>) => {
			const newParams = createNewSearchParams(searchParams);

			if (value === null || (Array.isArray(value) && value.length === 0)) {
				newParams.delete(key);
			} else if (Array.isArray(value)) {
				newParams.set(key, value.join(","));
			} else {
				newParams.set(key, value.toString());
			}

			updateUrl(newParams);
		},
		[searchParams, updateUrl],
	);

	const updateSearch = useCallback(
		<T extends keyof SearchState>(key: T, value: SearchValue<T>) => {
			setSearchState((prev) => ({
				...prev,
				[key]: value,
			}));

			if (key === "keyword") {
				debouncedUpdateKeyword(value as string | null);
			} else {
				updateUrlParams(key, value);
			}
		},
		[debouncedUpdateKeyword, updateUrlParams],
	);

	const resetSearch = useCallback(() => {
		setSearchState({
			age: null,
			premium: null,
			benefit: null,
			keyword: null,
			type: null,
		});

		const newParams = createNewSearchParams(searchParams);

		newParams.delete("age");
		newParams.delete("premium");
		newParams.delete("benefit");
		newParams.delete("keyword");
		newParams.delete("type");

		updateUrl(newParams);
	}, [searchParams, updateUrl]);

	useEffect(() => {
		const newState: SearchState = {
			age: searchParams.get("age")?.split(",") || null,
			premium: searchParams.get("premium")?.split(",") || null,
			benefit: searchParams.get("benefit")?.split(",") || null,
			keyword: searchParams.get("keyword"),
			type: searchParams.get("type")?.split(",") || null,
		};

		setSearchState(newState);
	}, [searchParams]);

	const getMatchingProducts = useCallback(() => {
		if (searchState.keyword) {
			return isInternationalTravelInsurance(searchState.keyword) ? [PRODUCTS[0]] : [];
		}

		if (hasSearch) {
			return [PRODUCTS[0]];
		}

		return PRODUCTS;
	}, [hasSearch, searchState.keyword]);

	return {
		searchState,
		updateSearch,
		resetSearch,
		hasSearch,
		matchingProducts: getMatchingProducts(),
	};
};

const createNewSearchParams = (params: URLSearchParams) => {
	const newParams = new URLSearchParams(params);
	return newParams;
};
