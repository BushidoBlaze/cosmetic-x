import { Hero } from "@/sections/hero/ui/Hero.tsx";
import { Categories } from "@/sections/categories/ui/Categories.tsx";
import { ProductsList } from "@/sections/productList/ProductsList.tsx";
import { Services } from "@/sections/services/ui/Services.tsx";

import { FullScreenVideo } from "@/ui/fullScreenVideo/FullScreenVideo.tsx";
import { GlobalTitle } from "@/ui/globalTitle/GlobalTitle.tsx";
import { SectionTransition } from "@/ui/sectionTransition/SectionTransition.tsx";

import { soleilViiData, noirEclatData, nuitDopaleData } from "../model/data.ts";
import { MOCKS_PRODUCT_CARD } from "@/components/productCard/model/data.ts";

export function Home() {
  const soleilProducts = MOCKS_PRODUCT_CARD.filter(
    (product) => product.label === "soleil",
  );
  const nuitProducts = MOCKS_PRODUCT_CARD.filter(
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
