import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const stateMap = ({globalStyling}) => ({
    colors: globalStyling.colors,
    videoHeight: globalStyling.videos.height,
    videoWidth: globalStyling.videos.width
})

const Caption = styled.p`
    margin: 0;
    color: ${props => props.captionColor};
    font-style: italic;
`

const ThumbnailContainer = styled.div`
    width: ${props => props.thumbnailWidth};
    height: ${props => props.thumbnailHeight};
    background-image: linear-gradient(#00000033, #00000033), url(${props => props.thumbnailUrl});
    color: #fff;
    font-size: 45px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const VideoComponent = ({videoSource, customThumbnails, sectionTheme, videoCaption}) => {
    const [videoIsPlaying, setVideoIsPlaying] = useState(false);
    const {colors, videoWidth, videoHeight} = useSelector(stateMap);

    const captionColor = colors[sectionTheme.text.paragraphs]


    function getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);

        if (match && match[2].length === 11) {
            return match[2];
        } else {
            return 'error';
        }
    }

    useEffect(() => {
        if(!customThumbnails){
            setVideoIsPlaying(true)
        }
    })

    return(
        <div>
            {videoIsPlaying ? (
                <iframe width={videoWidth} height={videoHeight} src={"http://www.youtube.com/embed/" + getId(videoSource) + "?autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            ) : (
                <ThumbnailContainer thumbnailWidth={videoWidth} thumbnailHeight={videoHeight} thumbnailUrl={customThumbnails} onClick={() => setVideoIsPlaying(true)}>
                    <i class="fas fa-play"/>
                </ThumbnailContainer>
            )}
            
            {videoCaption && (
                <Caption>{videoCaption}</Caption>
            )}
        </div>
        

    )

}

export default VideoComponent;