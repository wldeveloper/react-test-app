// 全局变量类型声明引用
/// <reference types="vite/client" />
/// <reference types="jest" />

type Dispatch<A> = (value: A) => void
type SetStateAction<S> = S | ((prevState: S) => S)

declare namespace React {}

declare function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>]
declare function useState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>
]

declare function cloneDeep<T>(value: T): T
