import ProfilePhoto from "./profile";

const ProfileCard = () => {
  return (
    <>
      <section class="flex-1 w-full text-lg flex justify-center">
        <div class="border shadow-2xl shrink-0 w-4/12 h-96 rounded-lg flex justify-start items-center p-2">
          <ProfilePhoto
            imageUrl={
              "https://i.pinimg.com/474x/55/1f/ff/551fff636303fb8a696c213736ddc09e.jpg"
            }
            userName={"Ravneet"}
          ></ProfilePhoto>

          <div class="h-full flex-1 text-center p-5 py-20 overflow-y-auto">
            <span class="text-3xl">Ravneet Singh</span>
            <span class="text-sm">2510994789</span>

            <p class="text-gray-500">
              I’m Ravneet, a software engineering student with a strong interest
              and experience in web development. I have worked with technologies
              such as React, Tailwind CSS, Next.js, and other modern web
              development tools.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
