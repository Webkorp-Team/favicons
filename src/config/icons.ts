/* eslint-disable no-magic-numbers */

import { Dictionary } from "../helpers";
import { IconOptions } from "./defaults";

function transparentIcon(width: number, height?: number): IconOptions {
  return {
    sizes: [{ width, height: height ?? width }],
    offset: 0,
    background: false,
    transparent: true,
    rotate: false,
    mask: false,
    overlayGlow: false,
    overlayShadow: false,
  };
}

function transparentIcons(...sizes: number[]): IconOptions {
  return {
    sizes: sizes.map((size) => ({ width: size, height: size })),
    offset: 0,
    background: false,
    transparent: true,
    rotate: false,
    mask: false,
    overlayGlow: false,
    overlayShadow: false,
  };
}

function opaqueIcon(width: number, height?: number): IconOptions {
  return {
    sizes: [{ width, height: height ?? width }],
    offset: 0,
    background: true,
    transparent: false,
    rotate: false,
    mask: false,
    overlayGlow: false,
    overlayShadow: false,
  };
}

function glowIcon(width: number, height?: number): IconOptions {
  return {
    sizes: [{ width, height: height ?? width }],
    offset: 0,
    background: true,
    transparent: false,
    rotate: false,
    mask: true,
    overlayGlow: true,
    overlayShadow: false,
  };
}

export const ICONS_OPTIONS: Dictionary<Dictionary<IconOptions>> = {
  android: {
    "android-chrome-192x192.png": transparentIcon(192),
    "android-chrome-512x512.png": transparentIcon(512),
  },
  android_maskable: {
    "android-chrome-maskable-192x192.png": transparentIcon(192),
    "android-chrome-maskable-512x512.png": transparentIcon(512),
  },
  appleIcon: {
    "apple-touch-icon-152x152.png": opaqueIcon(152),
    "apple-touch-icon-167x167.png": opaqueIcon(167),
    "apple-touch-icon.png": opaqueIcon(180),
  },
  appleStartup: {
    "apple-touch-startup-image-640x1136.png": opaqueIcon(640, 1136),
    "apple-touch-startup-image-750x1334.png": opaqueIcon(750, 1334),
    "apple-touch-startup-image-828x1792.png": opaqueIcon(828, 1792),
    "apple-touch-startup-image-1125x2436.png": opaqueIcon(1125, 2436),
    "apple-touch-startup-image-1242x2208.png": opaqueIcon(1242, 2208),
    "apple-touch-startup-image-1242x2688.png": opaqueIcon(1242, 2688),
    "apple-touch-startup-image-1536x2048.png": opaqueIcon(1536, 2048),
    "apple-touch-startup-image-1668x2224.png": opaqueIcon(1668, 2224),
    "apple-touch-startup-image-1668x2388.png": opaqueIcon(1668, 2388),
    "apple-touch-startup-image-2048x2732.png": opaqueIcon(2048, 2732),
    "apple-touch-startup-image-1136x640.png": opaqueIcon(1136, 640),
    "apple-touch-startup-image-2160x1620.png": opaqueIcon(2160, 1620),
    "apple-touch-startup-image-1620x2160.png": opaqueIcon(1620, 2160),
    "apple-touch-startup-image-1334x750.png": opaqueIcon(1334, 750),
    "apple-touch-startup-image-1792x828.png": opaqueIcon(1792, 828),
    "apple-touch-startup-image-2436x1125.png": opaqueIcon(2436, 1125),
    "apple-touch-startup-image-2208x1242.png": opaqueIcon(2208, 1242),
    "apple-touch-startup-image-2688x1242.png": opaqueIcon(2688, 1242),
    "apple-touch-startup-image-2048x1536.png": opaqueIcon(2048, 1536),
    "apple-touch-startup-image-2224x1668.png": opaqueIcon(2224, 1668),
    "apple-touch-startup-image-2388x1668.png": opaqueIcon(2388, 1668),
    "apple-touch-startup-image-2732x2048.png": opaqueIcon(2732, 2048),
  },
  coast: {
    "coast-228x228.png": opaqueIcon(228),
  },
  favicons: {
    "favicon-16x16.png": transparentIcon(16),
    "favicon-32x32.png": transparentIcon(32),
    "favicon-48x48.png": transparentIcon(48),
    "favicon.ico": transparentIcons(16, 24, 32, 48, 64),
  },
  firefox: {
    "firefox_app_60x60.png": glowIcon(60),
    "firefox_app_128x128.png": glowIcon(128),
    "firefox_app_512x512.png": glowIcon(512),
  },
  windows: {
    "mstile-70x70.png": transparentIcon(70),
    "mstile-144x144.png": transparentIcon(144),
    "mstile-150x150.png": transparentIcon(150),
    "mstile-310x150.png": transparentIcon(310, 150),
    "mstile-310x310.png": transparentIcon(310),
  },
  yandex: {
    "yandex-browser-50x50.png": transparentIcon(50),
  },
};
