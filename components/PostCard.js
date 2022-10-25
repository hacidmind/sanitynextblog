
import Image from "next/image";
import { useRouter } from 'next/router';
import {useNextSanityImage} from "next-sanity-image";
import { sanityClient } from "../client";


const PostCard = (props) => {
    console.log(props.post)
  const post = props.data;
  const slug = post.slug.current;
  const imageProps = useNextSanityImage(
    sanityClient,
    post.mainImage
  )
  const router = useRouter()

  return (
    <div className="col-lg-4">
      <div className="card">
        {post.mainImage && (
            
            <Image {...imageProps} layout="intrinsic" alt="" />
        )}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.excerpt.slice(0,20)}
          </p>
          <div className="btn btn-success" onClick={() => router.push(`/post/${slug}`)} >Read More </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;








