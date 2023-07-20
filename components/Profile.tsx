const Profile = ({ session }: any) => {
  return (
    <div className="w-9 h-9 bg-white rounded-full overflow-hidden absolute right-28 top-[10px]">
      <img src={session?.user?.image} alt="" />
    </div>
  );
};

export default Profile;
