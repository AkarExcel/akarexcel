import react,{useEffect,useState} from "react"
import Aos from "aos"
import Blog from "../component/Blog"
import Client from "../component/Client"
import Hero from "../component/Hero"
import Portfolio from "../component/Portfolio"
import Services from "../component/Services"
import Skills from "../component/Skills"
import Testimonial from "../component/Testimonial"
import Navbar from "../layout/Navbar"
import { sanityClient } from "../sanity"
import PopBanner from "../component/popbanner/PopBanner"
import is from "sharp/lib/is"

export default function Home({posts,services, portfolio, testimonial}) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    Aos.init({duration:800, once: true, easing: "ease-in-quart"})
  },[])

  useEffect(() => {
if(isOpen){
  document.body.style.overflow = 'hidden'
  document.body.classList.add('touch-action')
}else
{
  document.body.style.overflow = 'scroll'
  document.body.classList.remove('touch-action')

}
  },[isOpen])

  return (
    <>
  {isOpen && <PopBanner setIsOpen={setIsOpen} isOpen={isOpen} />}

  <Navbar />
  <Hero/>
  <div data-aos="fade-up"><Services services={services} /></div>
  {/* About & Skills */}
  {/* <Skills/> */}
  {/* Portfolio */}
  <div data-aos="fade-up"><Portfolio portfolio={portfolio} /></div>
  {/* Homepage Blog */}
  <div data-aos="fade-up"><Blog posts={posts}/></div>
  {/* Testiominals */}
  <Testimonial testimonial={testimonial}/>
  {/* Clients */}
  <Client/>

</>

  )
}

export async function getServerSideProps(){
  const query = `*[_type == "post"][0...3]{
    _id,
    title,
    publishedAt,
    categories[] -> {
      title,         
},
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const serviceQuery = `*[_type == 'service']{
    _id,
    description,
    name,
    title,
    slug,
    iconType
  }`

  const portfolioQuery = `*[_type == 'portfolio']{
    _id,
    description,
    title,
    slug,
    portfolioImage,
    service
  }`

  const testimonialQuery = `*[_type == 'testimonial' && approved == true]{
    _id,
    description,
    position,
    name,
    authorImage,
  }`

  const services = await sanityClient.fetch(serviceQuery)
  const portfolio = await sanityClient.fetch(portfolioQuery)
  const testimonial = await sanityClient.fetch(testimonialQuery)
  const posts = await sanityClient.fetch(query)

  return{
    props: {
      posts,services,portfolio,testimonial
    }
  }
} 
