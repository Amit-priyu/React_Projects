import { VideoCard } from "./VideoCard"
const VIDEOS=[{
      title:"how to learn coding | Become coder in 30 days. ",
      image:"photo.jpg",
      thumbimage:"photo.jpg",
      author:"Amit Priyadarshini",
      views:"100k",
      timestamp:"4 days ago"
},{
    title:"how to learn coding | Become coder in 30 days. ",
    image:"photo.jpg",
    thumbimage:"photo.jpg",
    author:"Amit Priyadarshini",
    views:"100k",
    timestamp:"4 days ago"
},{
    title:"how to learn coding | Become coder in 30 days. ",
    image:"photo.jpg",
    thumbimage:"photo.jpg",
    author:"Amit Priyadarshini",
    views:"100k",
    timestamp:"4 days ago"
},{
    title:"how to learn coding | Become coder in 30 days. ",
    image:"photo.jpg",
    thumbimage:"photo.jpg",
    author:"Amit Priyadarshini",
    views:"100k",
    timestamp:"4 days ago"
},{
    title:"how to learn coding | Become coder in 30 days. ",
    image:"photo.jpg",
    thumbimage:"photo.jpg",
    author:"Amit Priyadarshini",
    views:"100k",
    timestamp:"4 days ago"
},{
    title:"how to learn coding | Become coder in 30 days. ",
    image:"photo.jpg",
    thumbimage:"photo.jpg",
    author:"Amit Priyadarshini",
    views:"100k",
    timestamp:"4 days ago"
},{
    title:"how to learn coding | Become coder in 30 days. ",
    image:"photo.jpg",
    thumbimage:"photo.jpg",
    author:"Amit Priyadarshini",
    views:"100k",
    timestamp:"4 days ago"
},{
    title:"how to learn coding | Become coder in 30 days. ",
    image:"photo.jpg",
    thumbimage:"photo.jpg",
    author:"Amit Priyadarshini",
    views:"100k",
    timestamp:"4 days ago"
}]

export const VideoGrid=()=>{
    // define the different breakpoints 
    return <div className="grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumbimage={video.image}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
                ></VideoCard>
        </div>)}
    </div>
}
