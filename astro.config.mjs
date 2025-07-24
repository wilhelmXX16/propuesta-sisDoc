// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'MPFN',
        logo: {
            src: '/src/assets/Logo_Ministerio_Público_Perú.png',
            replacesTitle: true,
        },
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), markdoc()],
});