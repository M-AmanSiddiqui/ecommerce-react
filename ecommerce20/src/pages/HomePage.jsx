import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import HomePageProductCard from "../components/homePageProdutCard";
import Track from "../components/Track";
import Testimonial from "../components/Testimonial";


const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <Category />
            <HomePageProductCard />
            <Track />
            <Testimonial />
            
        </Layout>
    );
}

export default HomePage;