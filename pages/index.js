import { useState } from 'react';

export default function Home() {
  const titles = [
    "SERIO ISSO?",
    "PROFESSOOOR PROFESSOORRR!!!!",
    "PQ ME HUMILHAS?",
    "E UM GRAUZIN? :'(",
    "VOCE NÃO TEM CORAÇÃO?",
    "INJUSTIÇA!",
    "ISSO DÓI NA ALMA",
    "TO FAZENDO POR ONDE...",
    "NEM O OSS FAZ MAIS SENTIDO AGORA",
    "JA PASSEI 3 GUARDA HJ",
    "TO NA HUMILDADE",
    "HOJE EU SONHEI COM A FAIXA",
    "E A AMIZADE? CADE?",
    "OS DE VERDADE EU SEI QUEM SÃO",
    "APERTA O SIIIIIIIIIIIIIIMMMMMMMM",
    "NÃO ESPERAVA ISSO DE VOCÊ",
    "ME DÁ UMA CHANCE",
    "JÁ ESTOU PRONTO",
    "NEM UMA PALAVRA DE INCENTIVO?",
    "TANTO ESFORÇO PRA ISSO?",
    "DE NOVO NÃO...",
    "ACHEI QUE A GENTE TINHA ALGO ESPECIAL",
    "JÁ TÁ NA HORA!",
    "ME DEIXA ACREDITAR",
    "SE NÃO FOR AGORA, QUANDO?",
    "SÓ QUERO UMA OPORTUNIDADE",
    "FAÇO TUDO CERTO",
    "QUERO SÓ UM RECONHECIMENTO",
    "POR FAVOR PROFESSOR",
    "TODO DIA ISSO",
    "DESSA VEZ EU MEREÇO",
    "SÓ MAIS UMA CHANCE",
    "TÔ NA LUTA",
    "NÃO DESISTO FACILMENTE",
    "ME OLHA COM CARINHO",
    "OLHA MEU PROGRESSO",
    "NÃO VÊ MEU ESFORÇO?",
    "FAZ ISSO POR MIM",
    "É MEU SONHO",
    "OLHA MINHA DEDICAÇÃO",
    "JÁ É MERECIDO",
    "VOCÊ TÁ SENDO DURO DEMAIS",
    "CADÊ A CONSIDERAÇÃO?",
    "TÁ DIFÍCIL ASSIM",
    "JÁ TÔ COM AS COSTAS MOÍDAS",
    "EU ACREDITO EM MIM",
    "QUERO TE DEIXAR ORGULHOSO",
    "TÔ QUASE LÁ",
    "MAIS UM PASSO SÓ",
    "QUERO TE OUVIR DIZER SIM",
    "CHEGOU MINHA HORA"
  ];

  const titlesEn = [
    "ARE YOU SERIOUS?",
    "PROFESSOOORRR!!!!",
    "WHY DO YOU HURT ME?",
    "JUST A STRIPE? :'(",
    "YOU HAVE NO HEART!",
    "INJUSTICE!",
    "THIS HURTS SO MUCH",
    "I'M DOING MY PART...",
    "NOT EVEN OSS MAKES SENSE NOW",
    "I PASSED 3 GUARDS TODAY",
    "I'M BEING HUMBLE",
    "I DREAMED ABOUT THE BELT",
    "WHAT ABOUT FRIENDSHIP?",
    "I KNOW WHO'S REAL",
    "JUST PRESS YEEEEESSSSS",
    "DIDN'T EXPECT THIS FROM YOU",
    "GIVE ME A CHANCE",
    "I'M READY",
    "NO WORD OF ENCOURAGEMENT?",
    "ALL THIS EFFORT FOR WHAT?",
    "NOT AGAIN...",
    "I THOUGHT WE HAD SOMETHING SPECIAL",
    "IT'S TIME!",
    "LET ME BELIEVE",
    "IF NOT NOW, WHEN?",
    "JUST ONE OPPORTUNITY",
    "I DO EVERYTHING RIGHT",
    "JUST NEED RECOGNITION",
    "PLEASE PROFESSOR",
    "EVERY DAY THIS",
    "THIS TIME I DESERVE IT",
    "JUST ONE MORE CHANCE",
    "I'M FIGHTING",
    "I DON'T GIVE UP EASILY",
    "LOOK AT ME WITH KINDNESS",
    "LOOK AT MY PROGRESS",
    "DON'T YOU SEE MY EFFORT?",
    "DO IT FOR ME",
    "IT'S MY DREAM",
    "LOOK AT MY DEDICATION",
    "I DESERVE THIS",
    "YOU'RE BEING TOO HARSH",
    "WHERE'S THE CONSIDERATION?",
    "IT'S HARD LIKE THIS",
    "MY BACK IS BROKEN",
    "I BELIEVE IN MYSELF",
    "I WANT TO MAKE YOU PROUD",
    "I'M ALMOST THERE",
    "JUST ONE MORE STEP",
    "I WANT TO HEAR YOU SAY YES",
    "MY TIME HAS COME"
  ];

  const [language, setLanguage] = useState(null);
  const [customTitle, setCustomTitle] = useState('');
  const [message, setMessage] = useState('');
  const [titleIndex, setTitleIndex] = useState(-1);
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const [noClicks, setNoClicks] = useState(0);
  const [noHasMoved, setNoHasMoved] = useState(false);
  const [bgColor, setBgColor] = useState('black');

  const getText = (pt, en) => language === 'pt' ? pt : en;
  const getCurrentTitle = () => {
    if (customTitle) return customTitle;
    if (titleIndex === -1) return getText('Essa pessoa merece a faixa?', 'Does this person deserve the belt?');
    return language === 'pt' ? titles[titleIndex] : titlesEn[titleIndex];
  };

  const handleYesClick = () => {
    const messages = language === 'pt'
      ? ["OBRIGADOOO", "VOCE É O MELHOR", "AGORA SIMMM", "MEU PROFESSOR É JUSTO"]
      : ["THANK YOU!", "YOU ARE THE BEST", "NOW WE'RE TALKING", "MY PROFESSOR IS FAIR"];
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setCustomTitle('');
    setBgColor('#1e1e2e');
    setTimeout(() => setBgColor('black'), 1500);
  };

  const handleNoClick = () => {
    setNoClicks(prev => prev + 1);
    const nextIndex = (titleIndex + 1) % titles.length;
    setTitleIndex(nextIndex);
    setNoHasMoved(true);

    const top = `${Math.floor(Math.random() * 80) + 10}%`;
    const left = `${Math.floor(Math.random() * 80) + 10}%`;
    setNoBtnStyle({ position: 'absolute', top, left, transform: 'translate(-50%, -50%)', transition: 'top 0.3s, left 0.3s' });
  };

  const resetApp = () => {
    setMessage('');
    setCustomTitle('');
    setTitleIndex(-1);
    setNoBtnStyle({});
    setNoClicks(0);
    setNoHasMoved(false);
    setBgColor('black');
  };

  return (
    <div style={{ height: '100vh', backgroundColor: bgColor, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', transition: 'background-color 0.5s ease', textAlign: 'center', padding: '2rem' }}>
      {!language && (
        <>
          <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #00f260, #0575e6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Choose your language / Escolha sua língua
          </h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <button onClick={() => setLanguage('en')} style={{ ...buttonStyle, order: 1 }}>English 🇺🇸</button>
            <button onClick={() => setLanguage('pt')} style={{ ...buttonStyle, order: 2 }}>Português 🇧🇷</button>
          </div>
        </>
      )}

      {language && (
        <>
          <h1 style={{ fontSize: '2rem', marginBottom: '2rem', minHeight: '3rem' }}>{getCurrentTitle()}</h1>

          {!message && (
            <div style={{ display: 'flex', gap: '2rem' }}>
              <button onClick={handleYesClick} style={{ ...buttonStyle, backgroundColor: 'green' }}>{getText('Sim', 'Yes')}</button>
              {!noHasMoved && <button onClick={handleNoClick} style={{ ...buttonStyle, backgroundColor: 'red' }}>{getText('Não', 'No')}</button>}
            </div>
          )}

          {!message && noHasMoved && (
            <button onClick={handleNoClick} style={{ ...noBtnStyle, ...buttonStyle, backgroundColor: 'red' }}>{getText('Não', 'No')}</button>
          )}

          {message && (
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.8rem', color: '#4ade80', animation: 'pulse 1s infinite' }}>{message}</p>
              <p style={{ fontSize: '1rem', color: '#ccc', marginTop: '0.5rem' }}>{getText('tô aguardando 👀', 'waiting... 👀')}</p>
            </div>
          )}

          {!message && noClicks > 0 && (
            <p style={{ marginTop: '1rem' }}>{getText(`Tentativas de negar: ${noClicks}`, `Attempts to deny: ${noClicks}`)}</p>
          )}

          {message && (
            <button onClick={resetApp} style={{ marginTop: '2rem', backgroundColor: '#444', color: 'white', padding: '0.5rem 1.5rem', fontSize: '1rem', borderRadius: '0.5rem', cursor: 'pointer', border: 'none' }}>{getText('Recomeçar', 'Restart')}</button>
          )}
        </>
      )}
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem 2rem',
  fontSize: '1rem',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  border: 'none',
  fontWeight: 'bold'
};