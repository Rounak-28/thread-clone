const Profile = ({ session, setIsProfileModelOpen }: any) => {
  return (
    <div
      onClick={() => setIsProfileModelOpen(true)}
      className="w-9 h-9 bg-white rounded-full overflow-hidden cursor-pointer absolute right-3"
    >
      <img src={session?.user?.image} alt="" />
    </div>
  );
};

export default Profile;
