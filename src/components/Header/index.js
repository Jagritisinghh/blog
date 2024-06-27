import { Link } from "react-router-dom"
import {HeaderContainer,HeaderTitle,Logo,AddblogButtton} from "./styledComponents"


const Header=()=>(
    <HeaderContainer>
        <HeaderTitle>
        <Link 
      to="/" 
      style={{ textDecoration: 'none', color: 'inherit' }} 
      className="link"
    >   <Logo className="logo">MyBlogs</Logo></Link>
        </HeaderTitle>

        <AddblogButtton>Add Blogs</AddblogButtton>
        
        </HeaderContainer>
)
export default Header