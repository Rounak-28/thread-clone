const Profile = ({ session, setIsProfileModelOpen }: any) => {
  return (
    <div
      onClick={() => setIsProfileModelOpen(true)}
      className="w-9 h-9 bg-white rounded-full overflow-hidden absolute right-6 top-[10px]"
    >
      <img src={session?.user?.image} alt="" />
    </div>
  );
};

export default Profile;
