import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  useEffect(() => {
    // Cal.com inline embed initialization
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "intro-call", { origin: "https://app.cal.com" });
    window.Cal.ns["intro-call"]("inline", {
      elementOrSelector: "#my-cal-inline-intro-call",
      config: {
        "layout": "month_view",
        "useSlotsViewOnSmallScreen": "true",
        "theme": "light"
      },
      calLink: "karthick-s-ufpzod/intro-call",
    });
    window.Cal.ns["intro-call"]("ui", {
      "theme": "light",
      "hideEventTypeDetails": false,
      "layout": "month_view"
    });

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f2f2f2', fontFamily: "'DM Sans', sans-serif" }}>
      <Header />

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem'
      }}>
        {/* Title Section */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '600',
            lineHeight: '1.1',
            margin: '0 0 0.5rem 0',
            color: '#000'
          }}>
            Ready to dive in?
          </h1>
          <p style={{
            fontSize: '56px',
            fontWeight: '600',
            lineHeight: '1.1',
            margin: '0 0 3rem 0',
            color: '#ccc'
          }}>
            Book a discovery call
          </p>
        </div>

        {/* Cal.com Inline Embed */}
        <div 
          id="my-cal-inline-intro-call" 
          style={{
            width: '100%',
            minHeight: '700px',
            overflow: 'auto'
          }}
        />

        {/* Trusted by Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          marginBottom: '3rem'
        }}>
          <p style={{
            fontSize: '13px',
            color: '#999',
            marginBottom: '2rem'
          }}>
            Trusted by high level brands that take accuracy and results seriously
          </p>

          {/* Brand Logos */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#000',
              letterSpacing: '1px'
            }}>
              SQUIRE
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '400',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ fontSize: '16px' }}>✤</span>
              reap
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#000'
            }}>
              nue°
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#000',
                borderRadius: '50%',
                display: 'inline-block'
              }}></span>
              slumity
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#000',
              letterSpacing: '1px'
            }}>
              IRON
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
