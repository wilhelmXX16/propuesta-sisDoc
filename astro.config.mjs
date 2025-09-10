// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'INTRANET DF-PASCO',
        //idioma por defecto español
        locales:{
            root:{
                 label: 'Español',
                 lang: 'es',
            },
        },
        logo: {
            light: '/src/assets/images/Horizontal-escudo.png',
            dark: '/src/assets/images/image.png',
            replacesTitle: true,

        },
        // para poner un icono a alguna página social 
        social: [{ icon: 'laptop', label: 'Intranet', href: 'http://10.23.100.17/intranetpasco' }],
        //custom styles
        customCss: [
                // Ruta relativa a tu archivo CSS personalizado
        './src/style/custom.css',
        ],
        // sidebar de la documentación
        sidebar: [
            {
                label: 'SGF',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { 
                        label:'Antes de Iniciar', 
                        items: [
                            {label: 'Instalación cliente base' , slug: 'guides/install/start'},
                        ]
                    },
                    { label: 'Example Guide', slug: 'guides/example' },
                    { label: 'Example Guide', slug: 'guides/examples'},
                ],
            },
            {
                label: 'Tramites',
                items: [
                    { label: 'Certificado Digital', slug: 'formalities/digital-certificate' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), markdoc()],
});