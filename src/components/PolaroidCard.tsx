interface Props {
    photo: string;
    caption: string;
  }
  
  export default function PolaroidCard({ photo, caption }: Props) {
    return (
      <div
        className="
          bg-white
          rounded-3xl
          p-6
          w-80
          md:w-96
          shadow-2xl
          rotate-[-2deg]
        "
      >
        <img
          src={photo}
          alt="memory"
          className="
            w-full
            h-80
            md:h-96
            object-cover
            object-top
            rounded-xl
          "
        />
  
        <p className="mt-6 text-lg text-center italic text-gray-700">
          {caption}
        </p>
      </div>
    );
  }
  