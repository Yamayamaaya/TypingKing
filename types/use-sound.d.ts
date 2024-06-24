declare module "use-sound" {
  const useSound: (url: string, options?: any) => [() => void, any];
  export default useSound;
}
