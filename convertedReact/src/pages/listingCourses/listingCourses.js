import React,{Component} from "react";
import "./listingCourses.css";
// import Navbar from "../../components/nav_search/index";
import Navbar from "../../components/Navbar/index";
import AboutUs from "../../components/about_section/Aboutsection";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Card from "../../components/cardComponent/cardComponent";
import CardHackrio from "../../components/cardHackrio/cardHackrio";
import FilterBox from "../../components/FilterBox/index";
import Footer from "../../components/footer/index";

class listingCourses extends Component{
    render(){
        let mainCards = [];
        for(let i=0;i<5;i++){
            mainCards.push(<Card />);
        }
        return(
            <div className="listinCourses">
                <Navbar />
                <AboutUs />
                <BreadCrumb />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-4 filter">
                            <FilterBox />
                        </div>
                        <div className="col-12 col-sm-8 cardRow">
                            {mainCards}
                        </div>
                    </div>
                </div>
                <CardHackrio />
                <Footer />
            </div>
        );
    }
}

export default listingCourses;