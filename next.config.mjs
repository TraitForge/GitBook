import nextra from 'nextra';

const withNextra = nextra({
    latex: true,
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.mjs'
});

export default withNextra({
    output: 'export',         // Enables static export
    distDir: 'out',           // Specifies the output directory for the build
    images: {
        unoptimized: true     // Disables the Image Optimization API for static export compatibility
    }
});
