const GalleryCard = ({ ImgUrl }) => {
  return (
    <>
      <div className="rounded-lg overflow-hidden">
        <img className="h-full w-full object-center" src={ImgUrl} alt="photo" />
      </div>
    </>
  );
};

export default GalleryCard;
