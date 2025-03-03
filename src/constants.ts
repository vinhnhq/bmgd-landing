const isDev = process.env.NODE_ENV === "development";

export const homePageUrl = "/";

export const agentRecruitmentUrl = "/agent-recruitment";

export const productShowcaseUrl = "/product-showcase";

export const faqFileUrl = isDev
	? "https://drive.google.com/file/d/13wyKWFiu8Rln4W40pxOTB-xRToT-VyYd"
	: "https://drive.google.com/file/d/13wyKWFiu8Rln4W40pxOTB-xRToT-VyYd";

export const privacyPolicyUrl = isDev
	? "https://drive.google.com/file/d/13wyKWFiu8Rln4W40pxOTB-xRToT-VyYd"
	: "https://drive.google.com/file/d/13wyKWFiu8Rln4W40pxOTB-xRToT-VyYd";

export const termsOfServiceUrl = isDev
	? "https://drive.google.com/file/d/13wyKWFiu8Rln4W40pxOTB-xRToT-VyYd"
	: "https://drive.google.com/file/d/13wyKWFiu8Rln4W40pxOTB-xRToT-VyYd";
