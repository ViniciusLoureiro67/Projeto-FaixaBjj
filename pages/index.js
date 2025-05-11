import { useState } from 'react';

export default function Home() {
    const titles = [
        "SERIO ISSO?",
        "PROFESSOOOR PROFESSOORRR!!!!",
        "PQ ME HUMILHAS?",
        "e um grauzin? :'(",
        "VOCE NÃO TEM CORAÇÃO?",
        "INJUSTIÇA!",
        "ISSO DÓI NA ALMA",
        "TO FAZENDO POR ONDE...",
        "NEM O OSS FAZ MAIS SENTIDO AGORA",
        "JA PASSEI 3 GUARDA HJ",
        "TO NA HUMILDADE",
        "HOJE EU SONHEI COM A FAIXA ROXA",
        "E A AMIZADE? CADE?",
        "OS DE VERDADE EU SEI QUEM SÃO",
        "APERTA O SIIIIIIIIIIIIIIMMMMMMMM"
    ];

    const [message, setMessage] = useState('');
    const [titleIndex, setTitleIndex] = useState(-1);
    const [noBtnStyle, setNoBtnStyle] = useState({});
    const [noClicks, setNoClicks] = useState(0);
    const [noHasMoved, setNoHasMoved] = useState(false);
    const [bgColor, setBgColor] = useState('black');

    const handleYesClick = () => {
        setMessage('BOOOAAA 🔥🥋');
        setBgColor('#1e1e2e'); // muda cor de fundo temporariamente

        // volta para o fundo preto depois de 1.5s
        setTimeout(() => setBgColor('black'), 1500);
    };

    const handleNoClick = () => {
        setNoClicks(prev => prev + 1);
        const nextIndex = (titleIndex + 1) % titles.length;
        setTitleIndex(nextIndex);
        setNoHasMoved(true);

        const top = `${Math.floor(Math.random() * 80) + 10}%`;
        const left = `${Math.floor(Math.random() * 80) + 10}%`;
        setNoBtnStyle({
            position: 'absolute',
            top,
            left,
            transform: 'translate(-50%, -50%)',
            transition: 'top 0.3s, left 0.3s'
        });
    };

    return (
        <div style={{
            height: '100vh',
            backgroundColor: bgColor,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background-color 0.5s ease'
        }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
                {titleIndex === -1 ? 'O Vini merece a faixa roxa?' : titles[titleIndex]}
            </h1>

            {/* Botões centralizados inicialmente */}
            <div style={{ display: 'flex', gap: '2rem' }}>
                {!message && (
                    <button
                        onClick={handleYesClick}
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '1rem 2rem',
                            fontSize: '1rem',
                            borderRadius: '0.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        Sim
                    </button>
                )}

                {!message && !noHasMoved && (
                    <button
                        onClick={handleNoClick}
                        style={{
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '1rem 2rem',
                            fontSize: '1rem',
                            borderRadius: '0.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        Não
                    </button>
                )}
            </div>

            {/* Botão "não" flutuante depois da primeira tentativa */}
            {!message && noHasMoved && (
                <button
                    onClick={handleNoClick}
                    style={{
                        ...noBtnStyle,
                        backgroundColor: 'red',
                        color: 'white',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        borderRadius: '0.5rem',
                        cursor: 'pointer'
                    }}
                >
                    Não
                </button>
            )}

            {message && (
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{
                        fontSize: '1.8rem',
                        color: '#4ade80',
                        transition: 'transform 0.3s ease',
                        animation: 'pulse 1s infinite'
                    }}>
                        {message}
                    </p>
                    <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#ccc' }}>
                        tô aguardando 👀
                    </p>
                </div>
            )}


            {!message && noClicks > 0 && (
                <p style={{ marginTop: '1rem' }}>Tentativas de negar: {noClicks}</p>
            )}
        </div>
    );
}
