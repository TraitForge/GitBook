export default {
    logo: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src="/logo.png"
                alt="TraitForge Logo"
                height="50"
                width="50"
                style={{ marginRight: '8px' }}
            />
            <span>TraitForge Documentation</span>
        </div>
    ),
    project: {
        link: 'https://github.com/TraitForge',
    },
    chat: {
        link: 'https://discord.gg/Nz9Rv6sswT',
    },
    footer: {
        text: (
            <span>
        Documentation {new Date().getFullYear()} ©{' '}
                <a href="https://traitforge.info" target="_blank">
          TraitForge
        </a>
      </span>
        )
    }
};
