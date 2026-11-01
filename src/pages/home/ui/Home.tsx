import { Hero } from "@/components/sections/hero/ui/Hero.tsx";
import { Categories } from "@/components/sections/categories/ui/Categories.tsx";
import { ProductsList } from "@/components/sections/productList/ProductsList.tsx";
import { Services } from "@/components/sections/services/ui/Services.tsx";

import { FullScreenVideo } from "@/ui/fullScreenVideo/FullScreenVideo.tsx";
import { GlobalTitle } from "@/ui/globalTitle/GlobalTitle.tsx";
import { SectionTransition } from "@/ui/sectionTransition/SectionTransition.tsx";

import { soleilViiData, noirEclatData, nuitDopaleData } from "../model/data.ts";
import { MOCKS_PRODUCTS } from "@/mocks/data/mock.data.products.ts";

export default function Home() {
  const soleilProducts = MOCKS_PRODUCTS.filter(
    (product) => product.label === "soleil",
  );
  const nuitProducts = MOCKS_PRODUCTS.filter(
    (product) => product.label === "nuit",
  );

  return (
    <>
      <Hero />

      <SectionTransition>
        <GlobalTitle title="Shop by category" />
        <Categories />
        <FullScreenVideo data={soleilViiData} />
      </SectionTransition>

      <SectionTransition>
        <GlobalTitle title="More from our collection SOLEIL VII" />
        {/* Передаем только отфильтрованные soleil */}
        <ProductsList products={soleilProducts} />
        <FullScreenVideo data={noirEclatData} />
      </SectionTransition>

      <SectionTransition>
        <GlobalTitle title="More from our collection NUIT D'OPALE" />
        {/* Передаем только отфильтрованные nuit */}
        <ProductsList products={nuitProducts} />
        <FullScreenVideo data={nuitDopaleData} />
      </SectionTransition>

      <SectionTransition>
        <GlobalTitle title="Services" />
        <Services />
      </SectionTransition>
    </>
  );
}
