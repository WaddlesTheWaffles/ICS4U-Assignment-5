import { useState } from 'react'
import HeaderSection from '../Components/HeaderSection.jsx'
import FooterSection from '../Components/FooterSection.jsx'
import GenresList from "../Components/Genres"
import GenreView from './GenreView.jsx'
import "./MoviesView.css"

function MoviesView() {
   const [genreSelected, setGenreSelected] = useState(28); //Uses id:28 action as a default display

   function setGenreId(genre) {
      setGenreSelected(genre);
   }

   return (
      <div>
         <HeaderSection />
         <GenresList selectGenreId={setGenreId} />
         <GenreView genreId={genreSelected} />
         <FooterSection />
      </div>
   )
}

export default MoviesView