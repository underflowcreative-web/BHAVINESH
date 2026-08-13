export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  width?: number;
  height?: number;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  count: number;
}

export const categories: Category[] = [
  {
    "slug": "weddings",
    "name": "Weddings",
    "description": "Cinematic wedding stories capturing sacred rituals, raw emotion, and timeless elegance across Kerala and worldwide.",
    "coverImage": "/images/client/14R2vD3rQ8OkgdM2uReQ1pj1EL0pwAxD6__DSC5007.JPG",
    "count": 25
  },
  {
    "slug": "pre-wedding",
    "name": "Pre-Wedding",
    "description": "Intimate, romantic couple portraits amidst Kerala natural landscapes and luxury architectural venues.",
    "coverImage": "/images/client/1-iqsBARTBUeI_hgFsg_dTa7PtIUTOLMm_DSC03476.JPG",
    "count": 61
  },
  {
    "slug": "model-shoot",
    "name": "Model Shoot",
    "description": "Professional model portfolio sessions focusing on strong poses, aesthetic moods, and high-impact visual storytelling.",
    "coverImage": "/images/client/10OE9e-Fr0FQW5BykpwUBbGLVHwJOoXU5_DSC03310.JPG",
    "count": 78
  },
  {
    "slug": "commercial",
    "name": "Commercial",
    "description": "Sophisticated commercial and product campaigns for luxury lifestyle brands and hospitality clients.",
    "coverImage": "/images/client/1-7vZRZMYIXs8UnCGB--YU1EbfJV14Dd2_DSC01096.jpg",
    "count": 30
  },
  {
    "slug": "film",
    "name": "Film Photography",
    "description": "Analog film warmth, medium-format textures, and vintage monochrome tones for timeless artistic depth.",
    "coverImage": "/images/client/10kD3tDoQy5sIP855aREinlfC6rQeCLun_DSC05913.JPG",
    "count": 29
  },
  {
    "slug": "drone",
    "name": "Drone Photography",
    "description": "Breathtaking 4K aerial cinematography capturing expansive wedding venues, Kerala backwaters, and dramatic landscapes.",
    "coverImage": "/images/client/13raco9wylNr52UOf7BECxzl03N6VGXf5_DJI_0262.jpg",
    "count": 23
  },
  {
    "slug": "maternity",
    "name": "Maternity",
    "description": "Heartwarming maternity and motherhood sessions celebrating new beginnings with soft, glowing light.",
    "coverImage": "/images/client/maternity_1l0-G4Vfu8Li5D4Q35GHtxMFNarm8xhN7.jpg",
    "count": 22
  },
  {
    "slug": "baby-shoot",
    "name": "Baby Shoot",
    "description": "Adorable newborn and baby portraiture capturing innocent smiles, delicate details, and family warmth.",
    "coverImage": "/images/client/146WM5HDiZpOCfpPwXH7NBBzQXRzIKuHQ_DSC09813.JPG",
    "count": 7
  }
];

export const portfolioImages: PortfolioImage[] = [
  {
    "id": "photo-1",
    "src": "/images/client/1-7vZRZMYIXs8UnCGB--YU1EbfJV14Dd2_DSC01096.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 1",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-2",
    "src": "/images/client/1-DHmLqxZZYlAmKMz8XqDyvC4Zr-YOpdR_DSC01078.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 2",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-3",
    "src": "/images/client/1-iqsBARTBUeI_hgFsg_dTa7PtIUTOLMm_DSC03476.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 3",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-4",
    "src": "/images/client/1-lZGPs8AWH2tvhoKwl7yDI5lfYIpowHe__DSC4519.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 4",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-5",
    "src": "/images/client/1-nBKeJ0DXKM1r0oGRjUPT52ahbYLV0_i_DSC01060.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 5",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-6",
    "src": "/images/client/10-inN31AmWGscMsMd_Y05NXtTcZoLvzO_DSC05323.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 6",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-7",
    "src": "/images/client/10i70BmSfyIk9TDsj4i5c4eaVOYsuuRRC_DSC01158.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 7",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-8",
    "src": "/images/client/10kD3tDoQy5sIP855aREinlfC6rQeCLun_DSC05913.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 8",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-9",
    "src": "/images/client/10OE9e-Fr0FQW5BykpwUBbGLVHwJOoXU5_DSC03310.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 9",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-10",
    "src": "/images/client/10PeyxzJGDbc4gPN3AHaEr6JpMGsCKYv4_DSC03464.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 10",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-11",
    "src": "/images/client/10qsNvgf1oXKgHU1Ammsru0qmYtWT0OSu_DSC02446.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 11",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-12",
    "src": "/images/client/10RVaPJskdXmrgku8OTiJeFwGCLNQLuol_DSC06058_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 12",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-13",
    "src": "/images/client/10zf5X4hGN_vfCt9s0TVYs-iG0vrbAszn_DSC06089_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 13",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-14",
    "src": "/images/client/11-PHI19TVYwNaouw_Grms-zAeJSXZm5K_DSC03383.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 14",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-15",
    "src": "/images/client/11DUziftIdW74_tDZCd4IQVyBB9g5WSbd_DSC03387.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 15",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-16",
    "src": "/images/client/11nIs1YZf75lnXDlwRCOq4EouKxNEw_Sm__DSC4308-2.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 16",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-17",
    "src": "/images/client/11QkrLWCuDOGH6RW0-6dAZEUB_pEEmXod_DSC03413.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 17",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-18",
    "src": "/images/client/11sseqw1XNIkbxTTaxFAhLNkh3JboXKmT_DSC03975.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 18",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-19",
    "src": "/images/client/12eH1L6I7RPFMXiAThcQjp7Ge2UOAA0Z2_DSC03169_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 19",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-20",
    "src": "/images/client/12KMyn2hikNj5KeYfRQYjMfnxXfvhgBkb_DSC03421.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 20",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-21",
    "src": "/images/client/12LuxevZk1gXFESOeSU3WcL7BZxAfnhLy_DSC06049_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 21",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-22",
    "src": "/images/client/12PgeOXTnuIV65g-FDYXumFqkfZ68yPd0_DSC03397.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 22",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-23",
    "src": "/images/client/135rfl1mvMrDiT2Sy1MZDBAFM41CUnBJn_DSC03444.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 23",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-24",
    "src": "/images/client/139DRcGfECfG30OZNtoIWr5IQU7_XKgPY_DSC03171.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 24",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-25",
    "src": "/images/client/13b8yWK7AY70ok9rcgcfelDF0WYBQMPUu_pulli_6.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity Story 25",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-26",
    "src": "/images/client/13CiYzLr4pFpRBg42iaanKxRVet2718T8_DSC03346.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 26",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-27",
    "src": "/images/client/13Ow7I0YriRuD18F15iwBkYtUI8QGq8BL_DSC06097.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 27",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-28",
    "src": "/images/client/13raco9wylNr52UOf7BECxzl03N6VGXf5_DJI_0262.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 28",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-29",
    "src": "/images/client/13VXMXvTNXaVEyagCHQ0wfcYVJodtArI2_DSC03326.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 29",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-30",
    "src": "/images/client/146WM5HDiZpOCfpPwXH7NBBzQXRzIKuHQ_DSC09813.JPG",
    "alt": "Bhavinesh Bharathan Photography - Baby Shoot Story 30",
    "category": "baby-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-31",
    "src": "/images/client/14gGHSIp1V-JSm1FWpT4J7l8pgaEl-N5T_DSC03350.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 31",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-32",
    "src": "/images/client/14qCG1_byr7LI4QRq6llYGkM9L5f9mEse_DSC03114.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 32",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-33",
    "src": "/images/client/14R2vD3rQ8OkgdM2uReQ1pj1EL0pwAxD6__DSC5007.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 33",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-34",
    "src": "/images/client/15x-i567NBkeehUOiiSBSQwEcHpZ8_Zxa_DSC09806.JPG",
    "alt": "Bhavinesh Bharathan Photography - Baby Shoot Story 34",
    "category": "baby-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-35",
    "src": "/images/client/16E9CENfCEoCsCZ05I3dkHSEoBWD9Vwo2_DSC01056.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 35",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-36",
    "src": "/images/client/17z-oF4y3C-HJigU-0QM7mTRYasuyUWSM_DSC01074.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 36",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-37",
    "src": "/images/client/18-ud9yHgdjXb8-cRQ62ZIKc6a_7Wt5K8_DSC01070.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 37",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-38",
    "src": "/images/client/182i74CQUpzBArrNZbvBdRl_4CBQnAUSk__DSC5188.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 38",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-39",
    "src": "/images/client/19SJLFdXY_YszmA6j4hviRyfGgdkY8yOq__DSC5681.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 39",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-40",
    "src": "/images/client/1AAyZjq120xm58rXz5nXIzI_NcbrFGfkg_DSC03362.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 40",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-41",
    "src": "/images/client/1Ab4mTiJtYDP7CFFMMwmSBExUr8XUBYX7__DSC1384.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 41",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-42",
    "src": "/images/client/1AJNvxS9ECA2f7kHBo7mGg5FX7uzhzuZv_DSC05336.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 42",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-43",
    "src": "/images/client/1aSiFnT4pXIvVRGLPfsM1RSehlQBQhQy6_DSC03365.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 43",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-44",
    "src": "/images/client/1B1V_oBa8GbYMBCTebeWvyuSlkd54V3kk_DSC01088.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 44",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-45",
    "src": "/images/client/1B30u6j2ZsYRJQu5A2uEy_5GHOXqthfDD_DSC02483.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 45",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-46",
    "src": "/images/client/1b7eZpo7vH6MwYxgZWPit-6OQ_et3qNFM_DSC06064.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 46",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-47",
    "src": "/images/client/1BCPp3w7-YiIXs1FTO7syhgzephvnKiRW_DSC03403.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 47",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-48",
    "src": "/images/client/1bMLSJcEjv31PIk2sBeTvPqSMDb-x_t9X_DSC05590.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 48",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-49",
    "src": "/images/client/1boKMUc_jGZebLpxot6XGxQJ9V7tkBk9B_DSC09435.JPG",
    "alt": "Bhavinesh Bharathan Photography - Maternity Story 49",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-50",
    "src": "/images/client/1bsyObVbYd7LlAdyQCfdt0gEl5XdS_dEZ_DSC01068.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 50",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-51",
    "src": "/images/client/1BV-CLlKa9pH-CDMOnPRIdvcSa8-wE-jr_DJI_0523.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 51",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-52",
    "src": "/images/client/1bvgMRKnjadqn_eGqzvBF1y5DGlH81S_W_DSC01134.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 52",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-53",
    "src": "/images/client/1bvJYtl3HIdBn9JJHSgYiBzntqewm1gHy_DSC06094.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 53",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-54",
    "src": "/images/client/1c8ZiwYSOgM7Wr0VL3TpG308ARnNwuYUd_DSC01101.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 54",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-55",
    "src": "/images/client/1CAuHbMjIjdk7r9d7Hp0tGKMU6tEdOIb0_DSC02399.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 55",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-56",
    "src": "/images/client/1cCAcHF_rLuhxFQjhV1ZuN-5HcfjWAM3m_DSC01108.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 56",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-57",
    "src": "/images/client/1cS7O4Prgok4aSPcsy7H159CSjXdBRR2K__DSC5185.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 57",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-58",
    "src": "/images/client/1CsDqvL4eO9Zn8bbf80niKGO1gEoimkSZ__DSC4641.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 58",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-59",
    "src": "/images/client/1CUp0uLeGxYcPjOQO1FUHLBHTGocQGNgs_DSC01082.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 59",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-60",
    "src": "/images/client/1D0fXJ8xZuw9Eh5znKDp3_Om13oDn6G0A_DJI_0283.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 60",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-61",
    "src": "/images/client/1D6tDvJLB2sEBarPSIK7d3isc_04EZaiE_DSC05555.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 61",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-62",
    "src": "/images/client/1da3Djh3wkOB6m-FCOJyKzJKXsUGNuSTi_DSC05453.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 62",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-63",
    "src": "/images/client/1DbJc-B8XVVNntXnyUQH9l-uAvSwwAclw_DSC09808.JPG",
    "alt": "Bhavinesh Bharathan Photography - Baby Shoot Story 63",
    "category": "baby-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-64",
    "src": "/images/client/1DG8ekIkOL50EzAYsWMOBKJI4ir8Zb2vv_DSC04945.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 64",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-65",
    "src": "/images/client/1Dja9RW4xSIP6gokNFUMNLl_FB40Vo8Vr_DJI_0271.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 65",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-66",
    "src": "/images/client/1dlXb0ynkG8hDP-Esffu_pHf6DEGXpJwF_DSC07574.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 66",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-67",
    "src": "/images/client/1Dr8ehzBtmJ19ixdfqBsqNHfqxQkLvnYH_DJI_0453.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 67",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-68",
    "src": "/images/client/1DTeW3uVkCjm9y9SDm31zijYcv5OUxhOL_DSC03329.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 68",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-69",
    "src": "/images/client/1DTpKxQ4K0_cWUkeP89y3n3P3eOtg4lO3_DSC03145.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 69",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-70",
    "src": "/images/client/1Du7XE1QzC1IXaxBJjBBd48DnfQI77Ylj__DSC4424.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Romantic Story Story 70",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-71",
    "src": "/images/client/1dUBgjM__bBgNJ1uKuq-PhPUVhwMtPwU3_DSC01157.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 71",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-72",
    "src": "/images/client/1dy4LvIpjdQsV0aMlFgtaEJEh9tJPhk_2__DSC5264.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 72",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-73",
    "src": "/images/client/1e0fHkYBzugRkENaaH1cMhnapYP4Dd_QR_DSC05005.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 73",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-74",
    "src": "/images/client/1e3wN66xARM9eAsnP4CZn1rvEWyQbo47D_DSC06121_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 74",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-75",
    "src": "/images/client/1e7dYksDuaaG3mBAaA0PbbVHaa3a0f_n0_DSC01083.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 75",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-76",
    "src": "/images/client/1eGyBarzkEAF_gm7OQKfob_MpQVA_n9N1_DSC05285.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 76",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-77",
    "src": "/images/client/1eMsK0ZWAIWYD9T5PggRanE5mRzPOzc74_DSC04293.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 77",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-78",
    "src": "/images/client/1EPAIlfINCyW1_j32N_ztY9OH0o7Bsast_DJI_0221.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 78",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-79",
    "src": "/images/client/1ezL0cNtVkQtBLy25lRl0xxMilKTokGkm_DSC04025.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 79",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-80",
    "src": "/images/client/1F-aDEZCfMmI39UkgVl7LEYjSKN_USKO1_DSC03331.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 80",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-81",
    "src": "/images/client/1F2pV5ntr9nG-WEKn-AiYgdIwJnCabn2___DSC3455.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 81",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-82",
    "src": "/images/client/1F32yl1ocd_ZgkEiXxasmf5pCqLtCQ_9X_DSC03522.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 82",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-83",
    "src": "/images/client/1FFrPXLqb6szPG1cr7PaA67YDoHIKg0Ie_DSC01081.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 83",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-84",
    "src": "/images/client/1FISoi_GI9rfRHLzJKDsj42WG_BaXvGzc_DSC06066_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 84",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-85",
    "src": "/images/client/1fJ0-7kHc4QjwrsHJ7mAyqLi3aBfTVFM__DSC05289.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 85",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-86",
    "src": "/images/client/1fM_Z3a0M_oeAvy8rnLylduYEgKN1xcwh__DSC4601.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 86",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-87",
    "src": "/images/client/1fOvXgpFnnA8_3jtllx_hBzA3WKRpBb1m_DSC03172.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 87",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-88",
    "src": "/images/client/1FoZq8_o24YuLBDecupB_iQuER5pfAOs9_pulli.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity Story 88",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-89",
    "src": "/images/client/1fPnAPw_3VBurXxwObfo9oO-_KIKYCWxj_DSC09680.JPG",
    "alt": "Bhavinesh Bharathan Photography - Baby Shoot Story 89",
    "category": "baby-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-90",
    "src": "/images/client/1FXToBOBVT3UPyRek2LeaxNKE5csIL2EE__DSC4332.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 90",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-91",
    "src": "/images/client/1fy3zcu-1CtdgCZeC8FLYKqACQ4H5JVXB_DSC02672.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 91",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-92",
    "src": "/images/client/1G2dmirkbViY2WUxvjbG8AhvwHiiIkE8V_DJI_0278.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 92",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-93",
    "src": "/images/client/1G976NeF1bsD1-GrXPxQoqY-BI8GOXMSy_DSC01097.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 93",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-94",
    "src": "/images/client/1g9QuR4DpJaMeIR_zcJvH_8FISRoV3Lk___DSC4316-2.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 94",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-95",
    "src": "/images/client/1gfUOIXowYlcGMdz7fWqeiIOUeiY5ny9e_DSC01191.jpg",
    "alt": "Bhavinesh Bharathan Photography - Commercial & Luxury Campaign Story 95",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-96",
    "src": "/images/client/1gOdZQp751kwkmwkeFUEiEkOSaNugRzlv_DSC05253.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 96",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-97",
    "src": "/images/client/1GTC4YTKfk1nAxdf5tNMXI6yQf8KKgosE_DSC09320.JPG",
    "alt": "Bhavinesh Bharathan Photography - Maternity Story 97",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-98",
    "src": "/images/client/1g_p1Ytryt90F__sqD9zmWBK39q9wNq8V_DSC01224.jpg",
    "alt": "Bhavinesh Bharathan Photography - Commercial & Luxury Campaign Story 98",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-99",
    "src": "/images/client/1H-noxXZJzy1CiTmWCEIotviMaQelSLab_DSC02498.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 99",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-100",
    "src": "/images/client/1H80P4rZbXpiS16IJlwRA-IxvLypUCmF6_DSC01129.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 100",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-101",
    "src": "/images/client/1ha52eD6vhx5IcuCdsb4EpzHJaj0A5Z9r_DSC03369.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 101",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-102",
    "src": "/images/client/1HBMfeW6DZOYqRjtv2jjb_JOpNZawH0VZ__DSC5277.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 102",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-103",
    "src": "/images/client/1HJ6cK7Z9PdVL7uFm-gG_NISO_S2OY1i6_DSC09677.JPG",
    "alt": "Bhavinesh Bharathan Photography - Baby Shoot Story 103",
    "category": "baby-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-104",
    "src": "/images/client/1HLLExCBKyzWHdMHYgCfefZOalgAlOg3s_DSC03430.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 104",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-105",
    "src": "/images/client/1hLu6Qg2OLiXTrKSRivEpLm-1CCdewGz6__DSC5679.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 105",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-106",
    "src": "/images/client/1hP2AvJKn_xQFYZm364ltjJ1mUNKgcDOX__DSC1428.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 106",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-107",
    "src": "/images/client/1hSbXd-ySmZ_RSnbFT-1WGy9INjAxcpw3_DSC03110.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 107",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-108",
    "src": "/images/client/1hSIg6urynL7GHk4wsAJWVP-RkuigBHOP_DSC06252_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 108",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-109",
    "src": "/images/client/1Hvcr-rbmAqi_aiW4hHw3cEza3gL2DAjU_DSC06073_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 109",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-110",
    "src": "/images/client/1hWvOrOD17n99UiHgcIV-x2Rn4WWPkjGH_DSC00029.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 110",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-111",
    "src": "/images/client/1ia-dtikqF6HPrez1Wcxn4-Du85Aa8k-5_DSC06033.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 111",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-112",
    "src": "/images/client/1iBuuIm6Ao_H3lzl2Byqy23qsnl7AVCY8_DJI_0524.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 112",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-113",
    "src": "/images/client/1iCPeHG3DOREXg7-ZWR4ad-WKwMnzCBq4_DSC06047.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 113",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-114",
    "src": "/images/client/1IF5a8q2j_hHHYS1kroJ1pN_6FKmf-kB8_DSC01077.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 114",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-115",
    "src": "/images/client/1ImYdDJuue3GF0ld7g40SouwIksPWaTwI__DSC4526.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 115",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-116",
    "src": "/images/client/1inKjTQdBC6FYCG4KTrxgSlQbSPT5lDae_DSC03538.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 116",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-117",
    "src": "/images/client/1IUNYtA7qTVaz32jzcpsmXFrg23jm7gXE_DSC02730.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 117",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-118",
    "src": "/images/client/1iXVmgOx39pOihALAl97R2QSZmk1WUO0U_DSC06276.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 118",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-119",
    "src": "/images/client/1iypysFW1AKktncrDg0Y9kcuiaXH-tOs0_DSC03458.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 119",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-120",
    "src": "/images/client/1j3IZPgO9W8Lms5woLSo-UoKmR2ZrGQ1Y_DSC03777.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 120",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-121",
    "src": "/images/client/1J60fL6aOoQkDg5mXfSwAlZJ98AxuMEkt_DJI_0227.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 121",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-122",
    "src": "/images/client/1JC3CIF27YZ8SDEklhZUdilBt5mdr3SfU_DSC05536.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 122",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-123",
    "src": "/images/client/1JHPkmR9tmnr245BwnqbPEENFtCycyug9__DSC4316.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 123",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-124",
    "src": "/images/client/1jj9F-aZRFR-5sdK4wDqiRmBm_LvadfzG_DSC06056.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 124",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-125",
    "src": "/images/client/1jP6jJT8bLlXat1HUC0Kbc8ic3uYp0fhm_DSC03092.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 125",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-126",
    "src": "/images/client/1jSi6eWECksKKfHaVVe7jkIqpg0OdkFy9__DSC2654.JPG",
    "alt": "Bhavinesh Bharathan Photography - Commercial & Luxury Campaign Story 126",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-127",
    "src": "/images/client/1jYAxHyBUe66XXnx4yFfUKokfr-kME9ap__DSC1394.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 127",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-128",
    "src": "/images/client/1J_Fb0v_JdS5-5meY5VWDz0pd5K84X9sj__DSC1906.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 128",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-129",
    "src": "/images/client/1KGe9mU5cIONuUGqucLHlf3SeE0dlCnG0_DSC00547.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 129",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-130",
    "src": "/images/client/1kn-mS4zOFA3S30LE5t02BIrvNHJYVTfz_DSC03190_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 130",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-131",
    "src": "/images/client/1L3VVdS5SQ8UHuPHuuQ0E2GMbzoBE-7CT__DSC4473.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Romantic Story Story 131",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-132",
    "src": "/images/client/1LACiKizwiIowOPRmjh1Ckp4rv8cXsPbi_DJI_0536.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 132",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-133",
    "src": "/images/client/1Lef8Cmic9PJqB-7z5CgDquZ20KPWl6Nt__DSC4358.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 133",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-134",
    "src": "/images/client/1Lh1oRI_aqQ-vH7VEePRpQMwPNUO-9K7L_DSC08392.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 134",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-135",
    "src": "/images/client/1ljbELOPGq4p821MRMbu0H9_b3RQTnsL8__DSC1373.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 135",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-136",
    "src": "/images/client/1LLkXWkcNMSZwPA4AOH1VosnpuABOccvP__DSC1423_-_Copy.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 136",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-137",
    "src": "/images/client/1LMWVIrUlyDdWxj88QsRKKpME0AfZ7SIy_DSC03174.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 137",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-138",
    "src": "/images/client/1LpA5VwVfm6qRZnHf7z_ifO0sQHIWiXRO_DJI_0232.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 138",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-139",
    "src": "/images/client/1lrUPa1Cy3BMlVH-6qG5Ri8YHMmGekMzD_DSC03747.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 139",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-140",
    "src": "/images/client/1m5ks-cFEElOwAIL3724Zst4EOut0kfI9__DSC4581.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 140",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-141",
    "src": "/images/client/1M7tYQguKSeOV6kwoq7UeVuFCgy2GY-8u_DSC03836.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 141",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-142",
    "src": "/images/client/1MCdvM9nQ3vq11Ouy2YeQRwbt_xaOn5by__DSC4496.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 142",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-143",
    "src": "/images/client/1me-a1cShfqe1s7c861Qc93e9-Bw5mwmD_DSC03411.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 143",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-144",
    "src": "/images/client/1ME5JDS1BNtez-hXAGlk1sqMeTMLYOg9j__DSC4091.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 144",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-145",
    "src": "/images/client/1MoZB7oa5_twmHUDgT97yc6U2WEtyomgQ_DSC06035.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 145",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-146",
    "src": "/images/client/1mrI86i7CK8NlXKyhtqdfe10S78dn_G-R__DSC4389.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 146",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-147",
    "src": "/images/client/1mx916FejofDSoSvL5GHgKqAidfoV5leU_DSC05341.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 147",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-148",
    "src": "/images/client/1mXoZ50DTzw4j21rbSX8wVsteMmZYWL1A_DSC03324.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 148",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-149",
    "src": "/images/client/1n03EdID_2kSOnPJ1kl6qpUiEmCS7O8_j__DSC4411.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 149",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-150",
    "src": "/images/client/1N0MymqGMGB__fOJ_Iv7xTFPghJCNlkWO_DSC05357.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 150",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-151",
    "src": "/images/client/1n3wWFxWpJNe6oHfGqdIhi_M9wrDHNzgN__DSC4505.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 151",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-152",
    "src": "/images/client/1n8ZmtlS6OiJz4xdnI6R68C0pUPSDc_XA__DSC1409.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 152",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-153",
    "src": "/images/client/1nFPoHmwMhS5dZ35ChNY6GAp1BrihayIt__DSC4539.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 153",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-154",
    "src": "/images/client/1NhAYhoXhPSxrWfF6Jl6ICZDsd_56s56z_DSC06075_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 154",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-155",
    "src": "/images/client/1NiREEwjmb-499Vko1QemtEy3JvtRJPHG_DSC03381.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 155",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-156",
    "src": "/images/client/1NKNJhb9tbktTHMPrbGaD8tqGyO1M-hdT__DSC1427.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 156",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-157",
    "src": "/images/client/1np0Hufo6pJXjYWhCQEGQwf1Tgclzoj-t_DSC03183_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 157",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-158",
    "src": "/images/client/1o-WHMv0NShmo_sq4LDNytN7qsq9Yp3OY_DSC05413.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 158",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-159",
    "src": "/images/client/1O01XGfW7z-mlPIUDrr0rbcN155vosZyq_DSC06084_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 159",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-160",
    "src": "/images/client/1OAbu_9-t6yMnvmQcUsqy6ZoPY82i1fKP_DJI_0392-Enhanced-NR.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 160",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-161",
    "src": "/images/client/1Oc0U40ejEn6CztXvz8Gz3kWyvllsuXHA_DJI_0275.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 161",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-162",
    "src": "/images/client/1oFf7oXgQR0DRJjbCcblbwixRdno_5Kmw_DSC09672.JPG",
    "alt": "Bhavinesh Bharathan Photography - Baby Shoot Story 162",
    "category": "baby-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-163",
    "src": "/images/client/1ON3YU5VFbHOwP5pu9wXUB9GO4sAtJ-AX_DSC03079.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 163",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-164",
    "src": "/images/client/1oOxJcmZwBfevANbBzvW0kJerhwmkMo6c_DSC03133.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 164",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-165",
    "src": "/images/client/1OPiohkC-39652qDD_ez43SHW1HZ0zl3r_DSC01064.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 165",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-166",
    "src": "/images/client/1OQTGIioWLh-Qmi5erg8LaKIdrvjFcEU8_DSC05272.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 166",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-167",
    "src": "/images/client/1OrwCvUOHYI5u6gZDVb3PgL-wG4Jfaelp_DSC03085.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 167",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-168",
    "src": "/images/client/1os9xKsKE3hirpPhe5Db221KzW2hd3qZ6_DJI_0228.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 168",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-169",
    "src": "/images/client/1OuCsh3f_-AnL8ihrDQFBIAJhVAtGUM_w_DSC03537.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 169",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-170",
    "src": "/images/client/1ovI1_keIFF5AR1RzmRN2CJqcXlzN6u3p__DSC5205.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 170",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-171",
    "src": "/images/client/1Ox4b8w76t0iR2hOImAgJUOurFLcMTcU5_DSC03323.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 171",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-172",
    "src": "/images/client/1oXAwFWFyuK88Qw0TbvGWlKMr9XQgPo4M_DSC05539.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 172",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-173",
    "src": "/images/client/1P5v5sq6L1SvIohk9oJc7-3fT8uK_RF1L_DSC09303.JPG",
    "alt": "Bhavinesh Bharathan Photography - Maternity Story 173",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-174",
    "src": "/images/client/1PDis8jsLL3w4tuICgWovdLOarcmpbnol__DSC4388.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 174",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-175",
    "src": "/images/client/1Pj83TTRuevoD-jvxtTNHJTatxdt_sG90_DSC03438.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 175",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-176",
    "src": "/images/client/1pmLP956UTcjqB0crmxNyjvKYVCN1x0g__DSC05556.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 176",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-177",
    "src": "/images/client/1Po9VgUfk8AerwWRXvTUveEXEero9wosg_DSC05444.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 177",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-178",
    "src": "/images/client/1PpDx5P7sWFZ6dnNdQyQoHEws6If-f4XD_DSC03187_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 178",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-179",
    "src": "/images/client/1PrLGAztoCIF-7E4XKbhnonpm0UjSzvsE_DSC03843.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 179",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-180",
    "src": "/images/client/1PwMi0Bd_oN66615wLs-LIuYP2cLEbO3Z_DSC01309.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 180",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-181",
    "src": "/images/client/1pZxiYrN7pbvqLBAH7v4OHTG9szkheaVU__DSC4432.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Romantic Story Story 181",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-182",
    "src": "/images/client/1Q4JKThKtMsl-vunYZJzg-dFkWI3zn95e__DSC4457.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Romantic Story Story 182",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-183",
    "src": "/images/client/1QAN95mdKE3pphKHFGTLlDm7BFPbxSc0E_DSC03398.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 183",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-184",
    "src": "/images/client/1QbtVXgKW97etUzC9Bdk8Gjl_l42vhSt2_DSC03429.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 184",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-185",
    "src": "/images/client/1QMHrvI-TSmLRqhtbdzmwJZA4xTwHl4U__DSC03405.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 185",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-186",
    "src": "/images/client/1QNzTvl2S7Jghk-VZBOSmG94uVQUTIgNM_DJI_0237.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 186",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-187",
    "src": "/images/client/1qqu_HunCrzFA5_WeCGKgz0sdvwg9ltJQ_DSC03504.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 187",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-188",
    "src": "/images/client/1QXduJ2x5YAUBAoL9eOS5lysfseRPm5YI__DSC1423.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 188",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-189",
    "src": "/images/client/1qxsOx2IR5tUE4FKhhXP0_2Td6kqrHP-r__DSC1432.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 189",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-190",
    "src": "/images/client/1rgPFG-4dQqD4J6sJ475e_YmXaM34jLUm_DSC03192_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 190",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-191",
    "src": "/images/client/1roGIu7_NTw3f8HiAYh48UlkgMFoFaRbI_DSC03493.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 191",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-192",
    "src": "/images/client/1Rrl_H_p95t-pOpAWeBIMtPhldIio1Pvc_DSC03194.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 192",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-193",
    "src": "/images/client/1rxHafDlbpGEQXCV8jQQa1ivbV7Qitspt__DSC1412_1.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 193",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-194",
    "src": "/images/client/1R_WRpw5c5PU6O5ewIMIuYiHKH0Ebv0NT_DSC05596.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 194",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-195",
    "src": "/images/client/1S2HeW5n_R8EAMjP77JShvHA8eRH8seVN_DJI_0459.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 195",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-196",
    "src": "/images/client/1sCOhBiJFxC8QwBjtkEUjE-u0aCiofKob_DSC03345.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 196",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-197",
    "src": "/images/client/1Sgnevn2mjYjU80OGgvUldyviBD7BJLCC_DSC01111.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 197",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-198",
    "src": "/images/client/1sgwH2yumClYyCWb6XxLspIG9mlCNZhq3_DSC05315.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 198",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-199",
    "src": "/images/client/1SqNFnvw5n5qXNRp7oQVPyeHuvPJvHLjD_DSC03678.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 199",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-200",
    "src": "/images/client/1szjlFJKphQpeEnZRyCpp9PLL5ji16Wzj_DSC01121.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 200",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-201",
    "src": "/images/client/1T6F0QOIMvn2lya2AXZMJybyIB-tCe6KW_DSC04873.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 201",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-202",
    "src": "/images/client/1TAdHCkzA4RqCukZqZp__KHmh8cyUXgnu_DSC03514.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 202",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-203",
    "src": "/images/client/1TDHJt-kiUTOsfULoH5YECcLn2gGLutau_DSC05363.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 203",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-204",
    "src": "/images/client/1tPC41dSlqLIOq6RETZapsjO62CGJlu2o_DSC03512.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 204",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-205",
    "src": "/images/client/1TuLlQ8pRqs1ygHF6c-haAGDqUfsrc_SY_DSC02430.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 205",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-206",
    "src": "/images/client/1TzEBKDJo0DPllbKaCBimn0F110CnjtGJ_DSC02579.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 206",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-207",
    "src": "/images/client/1u1k10JgoBui19qJBCZsqBpHpLGBddasd_DSC03506.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 207",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-208",
    "src": "/images/client/1UdQ8_py7dvlMCVJRm6Q--A9V51Cf0vQ4_DSC04834.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 208",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-209",
    "src": "/images/client/1ufMZu8uTd8AnpOfDf7Ht71QfQZfXHo2x_DSC03059.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 209",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-210",
    "src": "/images/client/1Uicq40wiD5uFR-D78FjFqka9Vlsso8iV_DSC03115.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 210",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-211",
    "src": "/images/client/1uL5beatUVFBjWZ3bQBWdEgtjOnMsgRVT_DJI_0439.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 211",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-212",
    "src": "/images/client/1UlFgtatJ5-KpNHpMC73yaQaEAD2Me4w1_DSC03067.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 212",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-213",
    "src": "/images/client/1v3-OuHSuvXO6oBPYMjx5qPOqjZwztc98_DSC05271.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 213",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-214",
    "src": "/images/client/1vhXsdZ1VIfp4bk_v86STnk_DVQ5lUEHv__DSC4493.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 214",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-215",
    "src": "/images/client/1VJU8_9cXFi2Rd6WkjS-Zh6zeu15Heaei_DSC04108.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 215",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-216",
    "src": "/images/client/1VwnFts6MKWSSJ9UsEM3LIlQhWfQWCZh1_DJI_0251.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 216",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-217",
    "src": "/images/client/1Wbzm9PSVCdxOggMHue86ljIALLKgKl7I__DSC4587.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 217",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-218",
    "src": "/images/client/1wcZB0ZLe4rrL3vzKTnaaK8ru9xRO0a-c_DSC03108.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 218",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-219",
    "src": "/images/client/1wFIaiJykpNCkWeGPzIRF-0HuXHguWFuw_DSC03073.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 219",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-220",
    "src": "/images/client/1wLbI5lKrV5MormUhaCv7DhHvigqM2Lud_DSC05292.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 220",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-221",
    "src": "/images/client/1wLvYgwQf86H62-JSza0cfLUCQp2ZktHr_DSC03071.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 221",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-222",
    "src": "/images/client/1Wz5g85XmDR9ap12eoYPYfMxwhNXlfL5H__DSC1890.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 222",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-223",
    "src": "/images/client/1X0RZZ0HwGusDDR-OlagqTDuo3H9V5u8f_DSC01222.jpg",
    "alt": "Bhavinesh Bharathan Photography - Commercial & Luxury Campaign Story 223",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-224",
    "src": "/images/client/1x63MOSAAupdkVwPJqOennTzE0hwzkl6G_DSC09678.JPG",
    "alt": "Bhavinesh Bharathan Photography - Baby Shoot Story 224",
    "category": "baby-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-225",
    "src": "/images/client/1xGOsxdnlYc0M7WYtMpDYCjnJvywU5FS4__DSC1417.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 225",
    "category": "weddings",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-226",
    "src": "/images/client/1xkK_gomBNRHKDsfdkVzmHO3OgkS41Bjz_DSC04405.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 226",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-227",
    "src": "/images/client/1xmFjouCUaoRp7lOkBng4TPDepR9gIxCY_DSC01062.jpg",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 227",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-228",
    "src": "/images/client/1xUkHTK_v8-3gX1LQ_XZxULikv2c9t4_x_DSC07579.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 228",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-229",
    "src": "/images/client/1X_78oqKyAxJDP8r9a7Z5wYuJbbmdsyOU_DSC03915.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 229",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-230",
    "src": "/images/client/1Y4I6lkLpqi3Uxqd2T-haT_uQ1xDJqOho_DSC02879.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 230",
    "category": "film",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-231",
    "src": "/images/client/1YaS4gM9oXc4l6bavTRXCwWsqJcvB0S_J_DSC02950.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 231",
    "category": "film",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-232",
    "src": "/images/client/1yCZp0afvlRs380Zm95iRHhTwKU6Spxlq_DJI_0532.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 232",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-233",
    "src": "/images/client/1yfGeTU6nYjV7-XM9_w98-A6w1k3cdMK-_DSC06065.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 233",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-234",
    "src": "/images/client/1Yk4DNa3t6C1U-Jzm2cCgJNlqZonop-xH__DSC2657.JPG",
    "alt": "Bhavinesh Bharathan Photography - Commercial & Luxury Campaign Story 234",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-235",
    "src": "/images/client/1yo52RVm6s58sAek4fLcf7kyA02ZST2uW_DSC07558.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 235",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-236",
    "src": "/images/client/1yQ_G0KacYbzidEAb91WX5e-JIqxq264S_DSC01171.jpg",
    "alt": "Bhavinesh Bharathan Photography - Commercial & Luxury Campaign Story 236",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-237",
    "src": "/images/client/1Yv-LMdPWKKI4XBi6Eh-TFnuEW73j5frP_DSC01117.jpg",
    "alt": "Bhavinesh Bharathan Photography - Fine Art Portrait Story 237",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-238",
    "src": "/images/client/1YVPMNBVwv-dOeEGuaoghBBnLlsE121Ye_DJI_0226.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 238",
    "category": "drone",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-239",
    "src": "/images/client/1yxPxOyBYzUfe-XUG-25LIQiPC1gqsIov_DJI_0527.JPG",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 239",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-240",
    "src": "/images/client/1Yz28qZ6_tfdW1Tb3GldMXUIfjsEhT46V_DSC00027.JPG",
    "alt": "Bhavinesh Bharathan Photography - Film Photography Story 240",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-241",
    "src": "/images/client/1zd9Djf64oloG9X5EqsTR5nNM3MCk4w1k_DJI_0286.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 241",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-242",
    "src": "/images/client/1zksmukieNe-Lhj0yVSZXP_0Wna-60cbR_DSC03183.JPG",
    "alt": "Bhavinesh Bharathan Photography - Model Shoot Story 242",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-243",
    "src": "/images/client/1ZO978QN8iVfAFJCLUuovD10tFu1GHeaQ_DSC06048.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 243",
    "category": "model-shoot",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-244",
    "src": "/images/client/1zpj0fxFOFa5Jv5E7Hqlq3wT9a7w81kXu__DSC4561.JPG",
    "alt": "Bhavinesh Bharathan Photography - Wedding Story 244",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-245",
    "src": "/images/client/1ZPUgRP4tO_uT8gxO5yyzcak2jTfDva8z_DSC00021.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 245",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-246",
    "src": "/images/client/1zR5w_0E8w2Tbrv68Cyv0LoKG5GoGi3RG_DSC01234.jpg",
    "alt": "Bhavinesh Bharathan Photography - Commercial & Luxury Campaign Story 246",
    "category": "commercial",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-247",
    "src": "/images/client/1zrEmv9zL1RdKrtzuWxbHUiNELn3orNd2_DSC03518.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 247",
    "category": "model-shoot",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-248",
    "src": "/images/client/1ZUIcu2hkkjk7ilejltq3FS46trtATvqL_DSC00447.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 248",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-249",
    "src": "/images/client/1ZUvFzS3uAC5kX1TgndpT2oz7z6jzQZGy_DJI_0279.jpg",
    "alt": "Bhavinesh Bharathan Photography - Drone Photography Story 249",
    "category": "drone",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-250",
    "src": "/images/client/1_aXNQANoYnjoj1i8oFeFK8kD0jv-321r_DSC01176.jpg",
    "alt": "Bhavinesh Bharathan Photography - Commercial & Luxury Campaign Story 250",
    "category": "commercial",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-251",
    "src": "/images/client/1_LNsYy_43jb69dhE1ZaJx3dKII5LpfzC_DSC03180.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Story 251",
    "category": "pre-wedding",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-252",
    "src": "/images/client/1_WTv_qiL5XbqsM9zRWfeMymI9pkEOfDL__DSC1887.JPG",
    "alt": "Bhavinesh Bharathan Photography - Fashion Story 252",
    "category": "weddings",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-253",
    "src": "/images/client/1_xV69QttuacgBOiUdCwbZGqgoBzZ8QlK__DSC4484.JPG",
    "alt": "Bhavinesh Bharathan Photography - Pre-Wedding Romantic Story Story 253",
    "category": "pre-wedding",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-1",
    "src": "/images/client/maternity_1l0-G4Vfu8Li5D4Q35GHtxMFNarm8xhN7.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 1",
    "category": "maternity",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-2",
    "src": "/images/client/maternity_1VByJLsglhRbZ9UNGWahjg3-ZP_cgpm2W.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 2",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-3",
    "src": "/images/client/maternity_1qFDtge8cOhBitI931w7m8ZWS5M1ExJgD.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 3",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-4",
    "src": "/images/client/maternity_1bGG6zVJP0bDjkzD-VvHCPVpnsZDlrTj_.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 4",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-5",
    "src": "/images/client/maternity_1x5xqxHYIBv_afdMHl36KSxXH_hkHsjCV.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 5",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-6",
    "src": "/images/client/maternity_1GEhnF-HdIva-Fkl2e7WZlzWRG5D-q1Oc.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 6",
    "category": "maternity",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-7",
    "src": "/images/client/maternity_1vjl4eWaM37PWlW69teOkkn3N0f5d6Jjy.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 7",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-8",
    "src": "/images/client/maternity_1ivCmz8URiCXYi4lb2Li019O3BF7bpaMv.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 8",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-9",
    "src": "/images/client/maternity_1Y1vrEIGdd8LCPo125N17MOc-2FAKrXye.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 9",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-10",
    "src": "/images/client/maternity_1y0nv1idlh3As9q2Nir8FIrvUeIBwRNt9.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 10",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-11",
    "src": "/images/client/maternity_1V6hCb12SJNaFeU6_lgZ4aERhMQXBErkZ.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 11",
    "category": "maternity",
    "featured": true,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-12",
    "src": "/images/client/maternity_1nrTGPzysNvKdaGkXibpy5TEOtGmVb-w5.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 12",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-13",
    "src": "/images/client/maternity_1xLGaG9e9vduAy3JR0G6fwjExn2bZdw4w.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 13",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-14",
    "src": "/images/client/maternity_1Xlo5JwgChxO2czyIzZBPImSvpAN2IBny.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 14",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-15",
    "src": "/images/client/maternity_1KFrX4O93xxSzXPr0hHll1JRwccPAMdaw.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 15",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-16",
    "src": "/images/client/maternity_1z8-qSRnrD-05ibVYGuC2HkvMoj9rq_xb.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 16",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-17",
    "src": "/images/client/maternity_10t-8PYuX3sadNJA0D6f3T6RvJu8T84zr.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 17",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-18",
    "src": "/images/client/maternity_19eTBEatufApRygTk5_TcAjXej0906FAU.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 18",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-19",
    "src": "/images/client/maternity_1dD7WwhEfoPdBpdDhjHc1nMBf_ENM--77.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 19",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-20",
    "src": "/images/client/maternity_1pA1ARsj4DB-e38iP65ZId2_SMqb9omNx.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 20",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-21",
    "src": "/images/client/maternity_1FbrpvjFccWGFQmupHaKAd03dL4tl_imp.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 21",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  },
  {
    "id": "photo-mat-22",
    "src": "/images/client/maternity_1VhaQiz-_TMUs0e4g758FDNEcxaW4Gx44.jpg",
    "alt": "Bhavinesh Bharathan Photography - Maternity & Motherhood Collection 22",
    "category": "maternity",
    "featured": false,
    "width": 1600,
    "height": 1067
  }
];
