import HeaderSection from '../Components/HeaderSection.jsx'
import FooterSection from '../Components/FooterSection.jsx'
import GenresList from "../Components/Genres";
import "./MoviesView.css"

function MoviesView() {
   return (
      <div>
         <HeaderSection />
         <GenresList />
         <FooterSection />
      </div>
   )
}

export default MoviesView