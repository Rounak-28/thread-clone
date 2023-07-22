const ReplyBox = () => {
  return (
    <div className="fixed bottom-0 flex justify-center items-center w-screen h-20 bg-dark">
      <input
        type="text"
        placeholder="Reply to ..."
        className="w-[95%] px-4 text-sm placeholder-gray-300 rounded-full h-12 bg-[#2c2c2d] outline-none focus:placeholder-gray-100"
      />
      {/* <p>post</p> */}
    </div>
  );
};

export default ReplyBox;
