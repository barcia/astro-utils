# Astro YouTube Component
A YouTube component for Astro with type safety and support for YouTube Player Parameters. Is a wrapper of [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) with some improvements.

* Type safety.
* Lightweight and minimalistic.
* Can be used with `url` or `id` of the YouTube video.
* Support for custom title.
* Support for official YouTube Player Parameters with type safety.
* By default, uses the best available cover resolution.
* By default, sets equal borders radius of official YouTube website (can be disabled).
* Set aspect ratio to 16/9 by default.
* Wrapper of [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed).
    * approximately 224x faster
    * lite-youtube uses youtube-nocookie.com instead of youtube.com in order to be more privacy friendly


## Usage

Import the component and use with the `url` prop or the `id` prop:
```jsx
import YouTube from "@barcia/astro-youtube";

<YouTube url="https://www.youtube.com/watch?v=QdBZY2fkU-0" />

<!-- or -->

<YouTube id="QdBZY2fkU-0" />
```
Add the `title` prop to set the title of the video.

```jsx
<YouTube url="https://www.youtube.com/watch?v=QdBZY2fkU-0" title="GTA 6 Trailer" />
```

Add any YouTube Player Parameters to the component, listed [here](https://developers.google.com/youtube/player_parameters) and with type safety.

```jsx
<YouTube url="https://www.youtube.com/watch?v=QdBZY2fkU-0" autoplay="1" />
```

## Props
### Component related
| Prop name | Description |
| --------- | ----------- |
| `url` | The URL of the YouTube video. |
| `id` | The ID of the YouTube video. |
| `title` | Optional title of the YouTube video. |
| `borderRadius` | Set false to remove the official YouTube player border radius. By default, is true. |

### YouTube Player Parameters
See the [Official YouTube Player Parameters](https://developers.google.com/youtube/player_parameters#Parameters) for check all available parameters.

## Acknowledgments
* [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) by [Paul Irish](https://github.com/paulirish)
* [eleventy-plugin-youtube-embed](https://github.com/gfscott/eleventy-plugin-youtube-embed/blob/main/lib/extractMatches.js)


## Author
* https://barcia.dev
* https://github.com/barcia
* https://bsky.app/profile/barcia.dev

## License
MIT License.

