export interface Person {
  nick: string;
  age: number;
  avatar: string;
  description?: string;
}

export type PersonResponseFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description?: string;
}>;
