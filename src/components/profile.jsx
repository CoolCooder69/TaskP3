const ProfilePhoto = ({ imageUrl, userName})=> {
    return (
        <div className="w-48 h-48 shrink-0 rounded-full overflow-hidden border-4 border-black relative group">
            <img
              class="w-full h-full object-cover"
              src={imageUrl}
              alt="DP"
            />

            <div
              class="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Hi I am {userName}.
            </div>
        </div>
    )
}

export default ProfilePhoto; 