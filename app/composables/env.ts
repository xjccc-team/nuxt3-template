// 环境
const checkDev = (arr: string[]) => arr.some((item) => ~window.location.host.indexOf(item))
export const DEBUG = import.meta.server ? process.env.NODE_ENV === 'development' : checkDev(['local', '192', '-test'])
