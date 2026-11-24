// ─── OSRA EDUCATION INSTITUTE — PRESTIGE GOLD & MIDNIGHT OBSIDIAN THEME ───────────
// High-performance 120fps GPU accelerated, metallic gold & deep imperial navy palette

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // LIGHT MODE - Executive Royal Navy with Warm Gold Accents
                primary: {
                    main: '#b8860b', // Imperial Dark Gold
                    light: '#d4af37',
                    dark: '#8b6508',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#0f172a', // Deep Executive Navy
                    light: '#1e293b',
                    dark: '#020617',
                    contrastText: '#ffffff',
                },
                background: {
                    default: '#f8fafc', // Ultra-light Slate
                    paper: '#ffffff',
                },
                text: {
                    primary: '#0f172a', // Slate 900
                    secondary: '#475569', // Slate 600
                },
                error: { main: '#f43f5e' },
                success: { main: '#10b981' },
                warning: { main: '#f59e0b' },
                info: { main: '#0284c7' },
                divider: 'rgba(15, 23, 42, 0.08)',
            }
            : {
                // DARK MODE - Prestige Imperial Navy, Obsidian & Metallic 24K Gold
                primary: {
                    main: '#d4af37', // Metallic 24K Royal Gold
                    light: '#f3cf7a', // Luminous Champagne Gold
                    dark: '#aa820a', // Burnished Amber Gold
                    contrastText: '#060a14', // Deepest Midnight Navy
                },
                secondary: {
                    main: '#38bdf8', // Electric Sapphire Accent
                    light: '#7dd3fc',
                    dark: '#0284c7',
                    contrastText: '#ffffff',
                },
                background: {
                    default: '#060a14', // Deepest Imperial Midnight Navy
                    paper: 'rgba(12, 20, 38, 0.85)', // Frosted Imperial Navy Glass
                },
                text: {
                    primary: '#f8fafc', // Platinum Ice White
                    secondary: '#94a3b8', // Cool Silver Slate
                },
                error: { main: '#f43f5e' },
                success: { main: '#10b981' },
                warning: { main: '#fbbf24' },
                info: { main: '#38bdf8' },
                divider: 'rgba(212, 175, 55, 0.16)', // Subtle 24K Gold Rim
            }),
    },
    typography: {
        fontFamily: "'Outfit', 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        h1: { fontWeight: 900, letterSpacing: '-0.04em' },
        h2: { fontWeight: 800, letterSpacing: '-0.03em' },
        h3: { fontWeight: 800, letterSpacing: '-0.025em' },
        h4: { fontWeight: 700, letterSpacing: '-0.02em' },
        h5: { fontWeight: 700, letterSpacing: '-0.015em' },
        h6: { fontWeight: 700, letterSpacing: '-0.01em' },
        button: { textTransform: 'none', fontWeight: 800, letterSpacing: '0.02em' },
        body1: { lineHeight: 1.65, fontSize: '0.95rem' },
        body2: { lineHeight: 1.6, fontSize: '0.875rem' },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: mode === 'dark' ? "rgba(212, 175, 55, 0.35) transparent" : "rgba(184, 134, 11, 0.3) transparent",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "transparent",
                        width: '5px',
                        height: '5px',
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 99,
                        backgroundColor: mode === 'dark' ? "rgba(212, 175, 55, 0.35)" : "rgba(184, 134, 11, 0.3)",
                        transition: 'background-color 0.15s ease',
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: mode === 'dark' ? "rgba(212, 175, 55, 0.7)" : "rgba(184, 134, 11, 0.6)",
                    },
                    transition: 'background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    minHeight: '100vh',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    padding: '8px 18px',
                    transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
                    fontWeight: 800,
                    letterSpacing: '0.01em',
                    position: 'relative',
                    overflow: 'hidden',
                    willChange: 'transform',
                    '&:hover': {
                        transform: 'translateY(-2px) scale(1.01)',
                        boxShadow: mode === 'dark'
                            ? '0 10px 24px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(212, 175, 55, 0.4)'
                            : '0 10px 22px -4px rgba(184, 134, 11, 0.25)',
                    },
                    '&:active': {
                        transform: 'translateY(0) scale(0.97)',
                        transition: 'all 0.06s ease',
                    }
                },
                containedPrimary: {
                    background: mode === 'dark'
                        ? 'linear-gradient(135deg, #f5d77f 0%, #d4af37 50%, #aa820a 100%)'
                        : 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
                    boxShadow: mode === 'dark'
                        ? '0 4px 18px -2px rgba(212, 175, 55, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)'
                        : '0 4px 16px -2px rgba(184, 134, 11, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
                    color: mode === 'dark' ? '#060a14' : '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    '&:hover': {
                        background: mode === 'dark'
                            ? 'linear-gradient(135deg, #fff2be 0%, #f3cf7a 50%, #d4af37 100%)'
                            : 'linear-gradient(135deg, #f3cf7a 0%, #d4af37 100%)',
                        boxShadow: mode === 'dark'
                            ? '0 8px 24px -2px rgba(212, 175, 55, 0.55), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)'
                            : '0 8px 22px -2px rgba(184, 134, 11, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
                    }
                },
                containedSecondary: {
                    background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                    color: '#fff',
                    boxShadow: '0 4px 16px -2px rgba(56, 189, 248, 0.35)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%)',
                        boxShadow: '0 8px 22px -2px rgba(56, 189, 248, 0.45)',
                    }
                },
                outlinedPrimary: {
                    borderColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.4)' : '#b8860b',
                    color: mode === 'dark' ? '#f3cf7a' : '#b8860b',
                    '&:hover': {
                        borderColor: '#d4af37',
                        background: 'rgba(212, 175, 55, 0.08)',
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    borderRadius: 18,
                    border: mode === 'dark' ? '1px solid rgba(212, 175, 55, 0.16)' : '1px solid rgba(15, 23, 42, 0.08)',
                    background: mode === 'dark' ? 'rgba(12, 20, 38, 0.82)' : '#ffffff',
                    backdropFilter: 'blur(16px)',
                    boxShadow: mode === 'dark'
                        ? '0 12px 32px -4px rgba(0, 0, 0, 0.55), inset 0 1px 0 0 rgba(212, 175, 55, 0.12)'
                        : '0 8px 24px -4px rgba(15, 23, 42, 0.05)',
                    transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                    willChange: 'transform',
                    '&:hover': {
                        borderColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.35)' : 'rgba(184, 134, 11, 0.3)',
                        boxShadow: mode === 'dark'
                            ? '0 18px 40px -6px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.2)'
                            : '0 14px 32px -6px rgba(184, 134, 11, 0.15)',
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                size: 'small',
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(15, 23, 42, 0.15)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: mode === 'dark' ? 'rgba(212, 175, 55, 0.45)' : '#b8860b',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: mode === 'dark' ? '#d4af37' : '#b8860b',
                        borderWidth: '1.5px',
                    },
                    '&.Mui-focused': {
                        boxShadow: mode === 'dark' ? '0 0 0 3px rgba(212, 175, 55, 0.2)' : '0 0 0 3px rgba(184, 134, 11, 0.15)',
                    }
                }
            }
        }
    }
});
