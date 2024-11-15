import "./portfolio.css"
import PortfolioCard from "./PortfolioCard"
import ProjectOneImage from "./../assets/card-portfolio.jpg"
import BooksHomeProjectImage from "./../assets/book-home-image.png"

export default function Portfolio() {
  return (
    <section id="portfolio" className='portfolio'>
       <div className="container">
        <h1 className="title">My last works</h1>
        <div className="box">
          <PortfolioCard title="books home" role="Ui/Ux" description="its an how is make to be maked bèy to a team, working on the design : + than 9 pages rking on the front end using React." link="https://www.figma.com/design/uptA4FhSP0fCD0yrV4cfzd/%D8%A8%D9%8A%D8%AA-%D8%A7%D9%84%D9%83%D8%AA%D8%A8?node-id=0-1&node-type=canvas&t=epdMwXktu3SlEYi5-0" image={BooksHomeProjectImage}/>
          <PortfolioCard title="Adidas" role="Ui/Ux + Front end" description="its an library how is make to a team, working on the design : + than 9 pages, and working on the front end using React and php." link="https://www.figma.com/design/uptA4FhSP0fCD0yrV4cfzd/%D8%A8%D9%8A%D8%AA-%D8%A7%D9%84%D9%83%D8%AA%D8%A8?node-id=0-1&node-type=canvas&t=epdMwXktu3SlEYi5-0" image={ProjectOneImage}/>
          <PortfolioCard title="books home" role="Ui/Ux + Front end" description="its an library how is make to a team, working on the design : + than 9 pages, and working on the front end using React and php." link="https://www.figma.com/design/uptA4FhSP0fCD0yrV4cfzd/%D8%A8%D9%8A%D8%AA-%D8%A7%D9%84%D9%83%D8%AA%D8%A8?node-id=0-1&node-type=canvas&t=epdMwXktu3SlEYi5-0" image={BooksHomeProjectImage}/>
          <PortfolioCard title="books home" role="Ui/Ux + Front end" description="its an library how is make to a team, working on the design : + than 9 pages, and working on the front end using React and php." link="https://www.figma.com/design/uptA4FhSP0fCD0yrV4cfzd/%D8%A8%D9%8A%D8%AA-%D8%A7%D9%84%D9%83%D8%AA%D8%A8?node-id=0-1&node-type=canvas&t=epdMwXktu3SlEYi5-0" image={BooksHomeProjectImage}/>
        </div>
       </div>
    </section>
  )
}