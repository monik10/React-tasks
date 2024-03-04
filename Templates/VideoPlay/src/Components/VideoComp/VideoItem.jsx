/* eslint-disable react/prop-types */


const VideoItem = (props) => {
  

  let{id,name,description,contentUrl,thumbUrl}=props.video
  return (
    <div className="videoItem" onClick={()=>props.handleClick(props.video)}>
    <figure>
        <picture>
            <img src={thumbUrl} alt={name}/>
        </picture>
    </figure>
    <main>
        <h2>{name.slice(0,30) + "...."}</h2>
    </main>
    </div>
  )
}

export default VideoItem
