import {useEffect, useRef, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {ArrowRight, Pause, Play, Volume2, VolumeX} from 'lucide-react';
import type {VideoHeroData} from '../model/types';
import './FullScreenVideo.css';

interface FullScreenVideoProps {
    data: VideoHeroData;
}

export function FullScreenVideo({data}: FullScreenVideoProps) {
    const {content, sources} = data;
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const onPlay = () => setPlaying(true);
        const onPause = () => setPlaying(false);
        video.addEventListener('play', onPlay);
        video.addEventListener('pause', onPause);
        return () => {
            video.removeEventListener('play', onPlay);
            video.removeEventListener('pause', onPause);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !hasStarted) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) video.pause();
            },
            {threshold: 0.25},
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, [hasStarted]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play().catch(() => {});
            setHasStarted(true);
        } else {
            video.pause();
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setMuted(video.muted);
    };

    const sectionClass = [
        'video-hero',
        hasStarted ? 'video-hero--started' : '',
        playing ? 'video-hero--playing' : '',
    ].filter(Boolean).join(' ');

    return (
        <section className={sectionClass}>
            <video
                ref={videoRef}
                className="video-hero__video"
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
            >
                {sources.map((source) => (
                    <source key={source.src} src={source.src} type={source.type}/>
                ))}
            </video>

            <div className="video-hero__overlay" aria-hidden="true"/>

            <div className="video-hero__body">
                <h2 className="video-hero__title" data-reveal>
                    {content.title}
                </h2>

                <NavLink className="video-hero__link" to={content.linkTo} data-reveal>
                    <span>{content.linkLabel}</span>
                    <ArrowRight size={16} strokeWidth={1.5}/>
                </NavLink>
            </div>

            <button
                type="button"
                className="video-hero__play"
                onClick={togglePlay}
                aria-label={playing ? 'Pause video' : 'Play video'}
                aria-pressed={playing}
            >
                <span className="video-hero__play-icon" aria-hidden="true">
                    {playing ? (
                        <Pause size={22} strokeWidth={1.5} fill="currentColor"/>
                    ) : (
                        <Play size={22} strokeWidth={1.5} fill="currentColor"/>
                    )}
                </span>
            </button>

            {hasStarted && (
                <button
                    type="button"
                    className="video-hero__mute"
                    onClick={toggleMute}
                    aria-label={muted ? 'Unmute video' : 'Mute video'}
                    aria-pressed={!muted}
                >
                    {muted ? <VolumeX size={16} strokeWidth={1.75}/> : <Volume2 size={16} strokeWidth={1.75}/>}
                </button>
            )}
        </section>
    );
}
