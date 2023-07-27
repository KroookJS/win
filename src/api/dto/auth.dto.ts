export interface LoginFormDto {
    email: string;
    password: string
}

export interface LoginResponseDto {
    token : string;
}

export type RegisterFormDto = LoginResponseDto & {fullName: string, avatarUrl?: string}
export type RegisterResponseDto = LoginResponseDto

export interface User {
    id: string
    email: string;
    fullname: string;
}

export interface IUser {
    fullName: string;
	email: string;
	avatarUrl: string;
	posts: string[];
	videos: string[];
	photos: string[];
	_id: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	token: string;
}