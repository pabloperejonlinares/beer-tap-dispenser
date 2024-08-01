export function DispenserSkeleton() {
  return (
    <div className="flex flex-col justify-items-center h-80 w-80 rounded-xl bg-gray-50 p-2 shadow-lg">
      <p
        className='truncate rounded-xl bg-white px-4 py-8 text-center text-2xl'
      >
      </p>
      <button className="flex flex-row justify-items-center mt-4 h-32 rounded-lg bg-gray-200 font-extrabold items-center">
        <b className="text-3xl self-center ml-4 text-white"></b>
      </button>
    </div>
  );
}

export function DispensersSkeleton() {
  return (
    <>
      <DispenserSkeleton />
      <DispenserSkeleton />
      <DispenserSkeleton />
    </>
  );
}
