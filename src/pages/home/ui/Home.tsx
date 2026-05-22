import {Hero} from '@/widgets/hero';
import {Categories} from '@/widgets/categories';
import {ProductList} from '@/widgets/productList';
import {Services} from '@/widgets/services';
import {FullScreenVideo} from '@/shared/ui/fullScreenVideo';
import {GlobalTitle} from '@/shared/ui/globalTitle';
import {SectionTransition} from '@/shared/ui/sectionTransition';

import {soleilViiData, noirEclatData, nuitDopaleData} from '../model/data';
import {PRODUCT_CARD_CONTENT_NUIT_DOPALE, PRODUCT_CARD_CONTENT_SOLEIL_VII} from "@/entities/product/model/data";

export function Home() {
    return (
        <>
            <Hero/>

            <SectionTransition>
                <GlobalTitle title="Shop by category"/>
                <Categories/>
                <FullScreenVideo data={soleilViiData}/>
            </SectionTransition>

            <SectionTransition>
                <GlobalTitle title="More from our collection SOLEIL VII"/>
                <ProductList items={PRODUCT_CARD_CONTENT_NUIT_DOPALE}/>
                <FullScreenVideo data={noirEclatData}/>
            </SectionTransition>

            <SectionTransition>
                <GlobalTitle title="More from our collection NUIT D'OPALE"/>
                <ProductList items={PRODUCT_CARD_CONTENT_SOLEIL_VII}/>
                <FullScreenVideo data={nuitDopaleData}/>
            </SectionTransition>

            <SectionTransition>
                <GlobalTitle title="Services"/>
                <Services/>
            </SectionTransition>
        </>
    );
}
