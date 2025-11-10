import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import FeaturedProducts from "@/components/home/FeaturedProducts";
// import FeaturedDeal from "@/components/home/FeaturedDeals";
import PromoBanner from "@/components/home/PromoBanner";
import ShopByBrand from "@/components/home/ShopByBrand";
import NewsletterHybrid from "@/components/home/Newsletter";
import { banners } from "@/data/homePageData";
import { categories } from "@/data/categories";
import { featuredProducts } from "@/data/homePageData";
import NewArrivals from "@/components/home/NewArrivals";
import WelcomePopup from "@/components/common/WelcomePopup";
import TopRatingProducts from "@/components/home/TopRatingProducts";
import TopSellingProducts from "@/components/home/TopSellingProduct";

export default function Home() {
  return (
    <>
      <WelcomePopup />
      <main>
        <Banner banners={banners} />
        <Category categories={categories} />
        <FeaturedProducts products={featuredProducts} />
        {/* <FeaturedDeal /> */}
        <TopRatingProducts />
        <PromoBanner />
        <NewArrivals />
        <TopSellingProducts />
        <ShopByBrand />
        <NewsletterHybrid />
      </main>
    </>
  );
}
