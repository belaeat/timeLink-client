function ShowRiddle({ riddle }) {
  return (
    <div className="mb-5 p-5 bg-gray-100 border-2 border-[#8168fe] rounded-md text-justify">
      {riddle ? (
        <p className="font-bold text-lg">
          {riddle.riddle}
        </p>
      ) : (
        <p>Loading riddle...</p>
      )}
    </div>
  );
}

export default ShowRiddle;
