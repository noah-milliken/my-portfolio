import Image from "next/image";

function ProfilePicture() {
  return (
    <Image
      src="https://my-tracker-portfolio-bucket.s3.amazonaws.com/noahProfilePic.png"
      alt="Profile Image"
      height={600}
      width={600}
      className="rounded-full p-8 sm:p-0"
    />
  );
}

export default ProfilePicture;
