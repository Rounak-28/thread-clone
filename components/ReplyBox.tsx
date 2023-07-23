const ReplyBox = () => {
  return (
    <div className="fixed bottom-0 flex justify-center items-center w-screen h-20 bg-dark space-x-2">
      <input
        type="text"
        placeholder="Reply to ..."
        className="w-[80%] px-4 text-sm placeholder-gray-300 rounded-full h-12 bg-[#2c2c2d] outline-none focus:placeholder-gray-100"
      />
      <div className="bg-blue-500 rounded hover:bg-blue-600 w-16 h-10 flex justify-center items-center">post</div>
    </div>
  );
};

export default ReplyBox;
