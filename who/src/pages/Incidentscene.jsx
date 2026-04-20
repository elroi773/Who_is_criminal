import bgMain from '../assets/start/bg-main.png'

function Incidentscene() {
  return (
    <main
      aria-label="Incident scene placeholder"
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 50% 36%, rgba(73, 59, 32, 0.16) 0%, rgba(0, 0, 0, 0) 34%), linear-gradient(180deg, #0b0c0b 0%, #030303 100%)',
        color: '#f5efe4',
      }}
    >
      {/* TODO: build the incident scene page. */}
      <img
        src={bgMain}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-6%',
          width: '112%',
          height: '112%',
          objectFit: 'cover',
          objectPosition: 'center center',
          opacity: 0.16,
          filter: 'blur(24px) brightness(0.18) saturate(0.7)',
          transform: 'scale(1.04)',
          userSelect: 'none',
          WebkitUserDrag: 'none',
        }}
        draggable="false"
      />

      <section
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100svh',
          display: 'grid',
          placeItems: 'center',
          padding: '24px',
          textAlign: 'center',
          fontFamily: 'Pretendard, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            padding: '28px 32px',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: '24px',
            background: 'rgba(10, 10, 10, 0.42)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.24)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <p style={{ margin: 0, fontSize: '20px', letterSpacing: '0.08em' }}>Incidentscene</p>
          <p style={{ margin: '10px 0 0', opacity: 0.7, fontSize: '14px' }}>
            TODO: next investigation scene
          </p>
        </div>
      </section>
    </main>
  )
}

export default Incidentscene
