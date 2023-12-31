//function to get url with image crop adjustments
//used to render a cropped image to improve page reload
import noImage from '../assets/no-image-placeholder.webp' //placeholder image 

const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage;

    //url has /media
    const target = 'media/'; 
    const index = url.indexOf(target) + target.length;
    //from 0 index to media/ then add the crop dimension + the rest of the url
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index)

}

export default getCroppedImageUrl;