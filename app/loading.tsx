
export default function Loading() {
  return (
    <div className="w-screen h-screen fixed top-0 right-0 bg-white bg-opacity-90 z-10 text-center flex justify-center content-center items-center">
      <img src="/assets/img/loading.png" className="w-[50px] h-[50px] animate-spin" />
    </div>  
  );
}