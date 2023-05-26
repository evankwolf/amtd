export type Concurrence<A, B> = A | B;
export type Intersection<A, B> = A extends B ? A : never;
export type Difference<A, B> = A extends B ? never : A;
export type Complement<A, B extends A> = Difference<A, B>;
export type IntersectionT<A, B, C> = A extends B ? C : never;
export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
