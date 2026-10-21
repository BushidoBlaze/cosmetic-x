import { Hero } from "@/widgets/hero";
import { Categories } from "@/widgets/categories";
import { ProductsList } from "@/widgets/productList";
import { Services } from "@/widgets/services";
import { FullScreenVideo } from "@/shared/ui/fullScreenVideo";
import { GlobalTitle } from "@/shared/ui/globalTitle";
import { SectionTransition } from "@/shared/ui/sectionTransition";

import { soleilViiData, noirEclatData, nuitDopaleData } from "../model/data";
import { MOCKS_PRODUCT_CARD } from "@/entities/product/model/data";

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
