import Image from "next/image";

function ProfilePicture() {
  return (
    <Image
      src="/pikaPlaceholder.png "
      alt="Profile Image"
      height={400}
      width={400}
      className="rounded-full border"
    />
  )
}

export default ProfilePicture