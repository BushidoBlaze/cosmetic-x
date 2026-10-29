export interface VideoSource {
    src: string;
    type: 'video/webm' | 'video/mp4';
}

export interface VideoHeroContent {
    title: string;
    linkLabel: string;
    linkTo: string;
}

export interface VideoHeroData {
    content: VideoHeroContent;
    sources: VideoSource[];
}