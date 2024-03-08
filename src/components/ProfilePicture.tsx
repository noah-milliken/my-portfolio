import Image from "next/image";

function ProfilePicture() {
  return (
    <Image
      src="/noahProfilePic.png "
      alt="Profile Image"
      height={600}
      width={600}
      className="rounded-full p-8 sm:p-0"
    />
  );
}

export default ProfilePicture;
