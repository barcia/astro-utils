import { YouTubePlayerParamsProps } from "./types";

/**
 * eleventy-plugin-youtube-embed
 * https://github.com/gfscott/eleventy-plugin-youtube-embed/blob/main/lib/extractMatches.js
 */
const urlPattern =
    /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;

/**
 * Get a YouTube ID from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A YouTube video ID or undefined if none matched
 */
export function getIdByUrl(url: string): string | undefined {
    const match = url.match(urlPattern);
    return match?.[3];
}



const VALID_YOUTUBE_PARAMS = [
    'autoplay',
    'cc_load_policy',
    'color',
    'controls',
    'disablekb',
    'enablejsapi',
    'end',
    'fs',
    'hl',
    'iv_load_policy',
    'listType',
    'list',
    'loop',
    'modestbranding',
    'origin',
    'playlist',
    'playsinline',
    'rel',
    'showinfo',
    'start'
];

/**
 * Build a string of YouTube params from an object.
 * @param params Object of YouTube params
 * @returns String of YouTube params
 */
export const buildYouTubeParams = (params: YouTubePlayerParamsProps) => {
    return Object.entries(params)
        .filter(([key, value]) => VALID_YOUTUBE_PARAMS.includes(key) && value !== undefined)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
};