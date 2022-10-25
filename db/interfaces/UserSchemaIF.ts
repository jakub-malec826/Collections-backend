export default interface UserSchemaIF {
	userName: string;
	password: string;
	email: string;
	isAdmin: boolean;
	status: string;
	collections: string[];
}
