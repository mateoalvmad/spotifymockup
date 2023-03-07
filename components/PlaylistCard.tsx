import Image from "next/image";

interface PlaylistCardProps { 
    image: string;
    name: string;
    description: string;

}

const PlaylistCard = ({image, name, description}:PlaylistCardProps) => {
  return (
    <div className="flex flex-col p-4 w-[181px] gap-3 bg-spotify-black rounded-lg">
      <Image src={image} alt={name} width={149.17} height={149.17}/>
      <span className="text-base font-bold ">{name}</span>
      <span className="text-xs text-spotify-gray">{description}</span>
    </div>
  );
};

export default PlaylistCard;
