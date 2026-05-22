import type {VideoHeroData} from '@/shared/ui/fullScreenVideo';

import video1 from '@/shared/assets/videos/video-1.webm';
import video2 from '@/shared/assets/videos/video-2.webm';
import video3 from '@/shared/assets/videos/video-3.webm';

export const soleilViiData: VideoHeroData = {
    content: {
        title: 'collection NOIR-ÉCLAT',
        linkLabel: 'find out more',
        linkTo: '/catalog/noir-eclat',
    },
    sources: [
        {src: video1, type: 'video/webm'},
    ],
};

export const noirEclatData: VideoHeroData = {
    content: {
        title: 'collection SOLEIL VII',
        linkLabel: 'find out more',
        linkTo: '/catalog/soleil-vii',
    },
    sources: [
        {src: video2, type: 'video/webm'},
    ],
};

export const nuitDopaleData: VideoHeroData = {
    content: {
        title: "collection NUIT D'OPALE",
        linkLabel: 'find out more',
        linkTo: '/catalog/nuit-dopale',
    },
    sources: [
        {src: video3, type: 'video/webm'},
    ],
};
