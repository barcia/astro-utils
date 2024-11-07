export type YouTubePlayerParamsProps = {
    autoplay?: '0' | '1';
    cc_load_policy?: '1';
    color?: 'red' | 'white';
    controls?: '0' | '1' | '2';
    disablekb?: '0' | '1';
    enablejsapi?: '0' | '1';
    end?: number;
    fs?: '0' | '1';
    hl?: string;
    iv_load_policy?: '1' | '3';
    listType?: 'playlist' | 'search' | 'user_uploads';
    list?: string;
    loop?: '0' | '1';
    modestbranding?: '1';
    origin?: string;
    playlist?: string;
    playsinline?: '0' | '1';
    rel?: '0' | '1';
    showinfo?: '0' | '1';
    start?: number;
}

export enum YouTubeCoverResolution {
    MAXRESDEFAULT = "maxresdefault.jpg", // 1280px
    SDDEFAULT = "sddefault.jpg", // 640px
    HQDEFAULT = "hqdefault.jpg", // 480px
    MQDEFAULT = "mqdefault.jpg", // 320px
    DEFAULT = "default.jpg", // 120px
}

export type ComponentProps = {
    title?: string;
    borderRadius?: boolean;
} & YouTubePlayerParamsProps & (
        | {
            id: string;
            url?: never;
        }
        | {
            id?: never;
            url: string;
        }
    );

export type ComponentConfig = {
    borderRadiusSize: string;
    coverResolution: YouTubeCoverResolution;
}