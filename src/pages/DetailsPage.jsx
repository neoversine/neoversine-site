import React from 'react'
import BlogDetails from '../components/blog/BlogDetails'
import { blogData } from '../constants/blogData'



const DetailsPage = () => {
    return (
        <div>
            <BlogDetails blog={blogData.blog} />
        </div>
    )
}

export default DetailsPage