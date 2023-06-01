import React, {useEffect, useState} from 'react'
import Navbar from '../../layout/Navbar'
import {PortableText} from '@portabletext/react'
import {useForm, SubmitHandler} from "react-hook-form"
import { sanityClient, urlFor } from '../../sanity'
import Highlight from 'react-highlight'
import Head from 'next/head'
import 'highlight.js/styles/dracula.css';
import Link from 'next/link'
// import BlockContent from '@sanity/block-content-to-react'

const Post = ({post}) => {
    const [submited, setSubmitted] = useState(false)

    const {register, 
        handleSubmit, 
        formState: {errors},
    } = useForm()

    const onSubmit = async(data) => (
        await fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        }).then(() => (
            setSubmitted(!submited),
            setTimeout(setSubmitted(!submited),2000)

        )).catch((err) => (
            console.log(err)
        ))
    )
        
    const myPortableTextComponents = {
      types: {
        code: ({value}) => 
        <Highlight language="javascript" className='language-javascript' >
        {value.code}
      </Highlight>,
        table: ({value}) => {
          return (
            <div>
              hi
            {value.rows[0].cells.map(cell => {
              {console.log(cell)}
              <h1>{cell}hi</h1>
            })}
            hi
            </div>
            
            // <h1>
            //   {console.log(value.rows[0].cells[1])}
            //   {value.rows[0].cells[1]}
            //   .
            // </h1>
        //   <table class="table-auto border-2 my-4 text-center">
        //     <thead class="bg-white ">
        //         <tr class="p-2">
        //           {
        //             value.rows[0].cells.map(cell => {
        //               {console.log(cell)}
        //               <th class="p-2">{cell}</th>
        //             })
        //           }
        //        </tr>
        //   </thead>
        //   <tbody>
        //         {value.rows.map((row, i) => {
        //           console.log(i)
        //           if(1 !== 0){
        //             <tr>       
        //               {row.cells?.map(cell => {
        //                 <td class="p-2">{cell}</td>
        //               })}
        //           </tr> 
        //           }
        //         })}
        //   </tbody>
        // </table>
          )
        }
      },
      block: {
        h1: (props) => (
          <h1 className='text-3xl font-bold my-5' {...props} />
          ),
        h2: (props) => (
            <h2 className='text-xl font-bold my-5' {...props} />
            ),
        li: ({children}) => (
            <li className='ml-8 list-disc' >
                {children}
            </li>
        ),
        blockquote: ({children}) => (
            <blockquote className='mx-4 italic font-thin text-slate-400 my-5 blockquote'>{children}</blockquote>
        )
        ,
        link: ({href,children}) => (
            <a href={href} className="text-blue-500 hover:underline">
                {children}
            </a>
        )
      },
      marks: {
        link: ({children, value}) => {
          const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          return (
            <a href={value.href} rel={rel}>
              {children}
            </a>
          )
        },
      },
    }

  return (
<>
<Head>
    <title>{post?.title}</title>
</Head>
<Navbar/>
<section className="section-padding post-page">
  <div className="container">
    <div className="row mb-45">
      <div className="col-md-12">
        <div className="blog-post-categorydate-wrapper">
          <Link href="/blog">
            <div>Blog</div>
          </Link>
          <div className="blog-post-categorydate-divider" />
          <div>{new Date(post?.publishedAt).toDateString()}</div>
        </div>
        <h1>{post.title}</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        {" "}
        <img src={urlFor(post?.mainImage).url()} className="mb-30 img-fluid" alt="" />
        {post.body ?
          <PortableText  
          className=''
          value={post.body}
          // components={}
          components={myPortableTextComponents}
          serializer = {{
              h1: (props) => (
                  <h1 className='text-3xl font-bold my-5' {...props} />
                  ),
              h2: (props) => (
                  <h2 className='text-xl font-bold my-5' {...props} />
                  ),
              li: ({children}) => (
                  <li className='ml-8 list-disc' >
                      {children}
                  </li>
              ),
              blockquote: ({children}) => (
                  <blockquote className='mx-4 italic font-thin text-slate-400 my-5 blockquote'>{children}</blockquote>
              )
              ,
              link: ({href,children}) => (
                  <a href={href} className="text-blue-500 hover:underline">
                      {children}
                  </a>
              )
          }}
          />
          :       
          ""         
          // <BlockContent
          // blocks={post.body}
          // projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          // dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          // /> 
  }


        <div className="blog-comment-section">
          <div className="row">
            {/* Comment */}
            <div className="col-md-6">
            {post.comments.map(comment => (
           
              <div key={comment._id} className="blog-post-comment-wrap">
                <div className="blog-post-user-comment">
                  {" "}
                  <img src="images/team/1.jpg" alt="" />{" "}
                </div>
                <div className="blog-post-user-content">
                  <h3>
                    {comment.name} &nbsp;&nbsp;<span>{new Date(comment._updatedAt).toLocaleDateString("en-EN",{ year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </h3>
                  <p>
                    {comment.comment}{" "}
                  </p>{" "}
                  <a className="blog-post-repay" href="#">
                    Reply
                    <i className="ti-back-left" />
                  </a>
                </div>
              </div>
            
            ))}
            </div>
            {/* Contact Form */}
            <div className="col-md-5 offset-md-1">
              <h3>Leave a Reply</h3>
              {submited?
              <div className="row">
                
              <div className="col-12">
                <div
                  className="alert alert-success contact__msg"
                  style={{ display: "block"}}
                >
                  {" "}
                  Your message was sent successfully.{" "}
                </div>
              </div>
            </div>
            :
            <form onSubmit={handleSubmit(onSubmit)} className="contact__form" action="">
                {/* Form message */}
                <input 
                {...register("_id")}
                type='hidden'
                name='id'
                value={post._id}
                />
                {/* <div className="row">
                  <div className="col-12">
                    <div
                      className="alert alert-success contact__msg"
                      style={{ display: "none"}}
                    >
                      {" "}
                      Your message was sent successfully.{" "}
                    </div>
                  </div>
                </div> */}
                {/* Form elements */}
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      {...register("name", {required: true})}
                      name="name"
                      type="text"
                      placeholder="Full Name *"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      {...register("email", {required: true})}
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea
                       {...register("comment", {required: true})}
                      name="comment"
                      id="message"
                      cols={30}
                      rows={4}
                      placeholder="Your Comment *"
                      
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="btn-wrap">
                      <div className="btn-link">
                        <input type="submit" defaultValue="Send Comment" />{" "}
                        <span className="btn-block color1 animation-bounce" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            }
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>

  )
}

export default Post

export const getStaticPaths = async() => {
    const query = `*[_type == 'post']{
        _id,
        slug{
            current
        },
    }`

    const post = await sanityClient.fetch(query)

    const paths = post.map(post => ({
        params: {
            slug: post.slug.current
        }
        
    }))

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async({params}) => {
    const query = `*[_type == "post" && 
    slug.current == $slug ][0]{
      _id,
      publishedAt,
      title,
      author -> {
          image,
          name
      },
     "comments": *[
          _type == "comment" && 
          post._ref == ^._id &&
          approved == true
      ]{
        name,
        _id,
        _updatedAt,
        comment,
        "reply": *[
            _type == "reply" && 
            comment._ref == ^._id &&
            approved == true
        ],
      },
      description,
      mainImage,
      slug,
      body,
  }`
  const postFields = `
  _id,
  name,
  title,
  description,
  'date': publishedAt,
  'slug': slug.current,
  'coverImage': mainImage,
  author -> {
    image,
    name
},
`
const moreQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
    ${postFields}
    body,
  }[0...2]`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    })

    const morePost = await sanityClient.fetch(moreQuery, {
        slug: params?.slug
    })

    if(!post){
        return{
            notFound: true
        }
    }

    return {
        props: {
            post,morePost
        },
        revalidate: 60,
    }
}