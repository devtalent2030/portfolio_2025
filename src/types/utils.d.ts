/** AwaitedReturn<T> – unwraps a Promise return type */
export type AwaitedReturn<T> =
  T extends Promise<infer U> ? AwaitedReturn<U> : T;
