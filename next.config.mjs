import nextra from 'nextra';

const withNextra = nextra({
    latex: true,
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.mjs'
});
export default withNextra();